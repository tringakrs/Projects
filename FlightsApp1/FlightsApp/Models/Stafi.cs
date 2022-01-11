using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightsApp.Models
{
    public class Stafi
    {
        public int StafiID { get; set; }
        public string EmriMbiemri { get; set; }
        public DateTime Ditelindja { get; set; }
        public string Gjinia { get; set; }
        public int NrPersonal { get; set; }
        public string Shtetesia { get; set; }
        public int KodiPostal { get; set; }
        public string NrTelefonit { get; set; }

        public string Roli { get; set; }
        public string Kompania { get; set; }

        public DateTime FillimiIPunes { get; set; }
        public DateTime MbarimiIPunes { get; set; }
    }
}