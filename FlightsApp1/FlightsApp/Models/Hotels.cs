using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightsApp.Models
{
    public class Hotels
    {
        public int HoteliID { get; set; }
        public string Emri { get; set; }
        public int Dhoma { get; set; }
        public DateTime DataEArdhjes { get; set; }
        public DateTime DataELargimit { get; set; }
        public int NrPersonave { get; set; }
        public string Oferta { get; set; }
        public decimal Cmimi { get; set; }
        public string Klienti { get; set; }
        public string Kompanina { get; set; }
    }
}