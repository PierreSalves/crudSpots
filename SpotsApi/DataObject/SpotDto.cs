namespace ApiPontosTuristicos.Dtos
{
    public class SpotDto
    {
        public int SpotId { get; set; }
        public string SpotName { get; set; }
        public string SpotDescription { get; set; }
        public string SpotReference { get; set; }
        public CityDto SpotCity { get; set; }
        public StateDto SpotState { get; set; }
    }
}
