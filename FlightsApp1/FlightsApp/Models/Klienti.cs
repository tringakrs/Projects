using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightsApp.Models
{
    public class Klienti
    {
        public int KlientiID { get; set; }
        public string EmriMbiemri { get; set; }
        public DateTime Ditelindja { get; set; }
        public string Gjinia { get; set; }
        public string Adresa { get; set; }
        public int NrPersonal { get; set; }
        public string Shtetesia { get; set; }
        public int KodiPostal { get; set; }
        public string NrTelefonit { get; set; }
        public string Email { get; set; }

    }
}