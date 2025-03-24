using Microsoft.AspNetCore.Mvc;

namespace ApiPontosTuristicos.Dtos
{
    public class StateDto
    {
        public int StateId { get; set; }
        public string StateName { get; set; }
        public string StateAbbreviation { get; set; }
    }

}
