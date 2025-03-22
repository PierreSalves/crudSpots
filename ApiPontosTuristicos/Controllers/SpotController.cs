using Microsoft.AspNetCore.Mvc;
using ApiPontosTuristicos.Dtos;
using ApiPontosTuristicos.Services;

namespace ApiPontosTuristicos.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SpotsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public SpotsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("listSpots")]
        public async Task<IActionResult> listSpots()
        {
            try
            {

                var dbConnection = new DBConnection();
                var query = "call sp_get_all_spots();";
                var result = dbConnection.Execute(query);

                return Ok(new { message = "Operation completed successfully!", spots = result });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    error = ex.Message
                });
            }
        }

        [HttpGet("filterSpots")]
        public async Task<IActionResult> filterSpots(string filter = "")
        {
            try
            {

                var dbConnection = new DBConnection();
                var query = $"call sp_filter_spots('{filter}');";
                var result = dbConnection.Execute(query);

                if (result == null)
                {
                    return NotFound(new { message = "Spot not found!" });
                }


                return Ok(new { message = "Operation completed successfully!", spots = result });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    error = ex.Message
                });
            }
        }

        [HttpGet("getSpot")]
        public async Task<IActionResult> GetSpot(int spotid)
        {
            try
            {

                var dbConnection = new DBConnection();
                var query = $"call sp_get_spot_by_id({spotid});";
                var result = dbConnection.Execute(query);

                if (result == null)
                {
                    return NotFound(new { message = "Spot not found!" });
                }

                return Ok(new { message = "Operation completed successfully!", spots = result });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    error = ex.Message
                });
            }
        }

        [HttpPost("insertSpot")]
        public async Task<IActionResult> InsertSpot([FromBody] SpotDto spotDto)
        {

            try
            {

                var dbConnection = new DBConnection();
                var query = $"call sp_insert_spot(" +
                            $"'{spotDto.SpotName}', " +
                            $"'{spotDto.SpotDescription}', " +
                            $"'{spotDto.SpotReference}', " +
                            $"{spotDto.SpotCity.CityId}, " +
                            $"'{spotDto.SpotCity.CityName}', " +
                            $"{spotDto.SpotState.StateId}, " +
                            $"'{spotDto.SpotState.StateName}', " +
                            $"'{spotDto.SpotState.StateAbbreviation}');";
                var result = dbConnection.Execute(query);

                return Ok(new { message = "Operation completed successfully!", insertedSpot = result });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }


        [HttpPut("editSpot")]
        public async Task<IActionResult> EditSpot(int spotid, [FromBody] SpotDto spotDto)
        {
            try
            {

                var dbConnection = new DBConnection();
                var query = $"call sp_edit_spot(" +
                            $"'{spotid}', " +
                            $"'{spotDto.SpotName}', " +
                            $"'{spotDto.SpotDescription}', " +
                            $"'{spotDto.SpotReference}', " +
                            $"{spotDto.SpotCity.CityId}, " +
                            $"'{spotDto.SpotCity.CityName}', " +
                            $"{spotDto.SpotState.StateId}, " +
                            $"'{spotDto.SpotState.StateName}', " +
                            $"'{spotDto.SpotState.StateAbbreviation}');";
                var result = dbConnection.Execute(query);


                return Ok(new { message = "Operation completed successfully!", editedSpot = result });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }


        [HttpDelete("deleteSpot")]
        public async Task<IActionResult> DeleteSpot(int spotid)
        {
            try
            {

                var dbConnection = new DBConnection();
                var query = $"call sp_delete_spot({spotid});";
                var result = dbConnection.Execute(query);

                return Ok(new { message = "Operation completed successfully!", deletedSpot = spotid });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }
    }
}
