using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightsApp.Models
{
    public class Fluturimet
    {
        public int FluturimetID { get; set; }
        public string Stafi { get; set; }
        public string Kompania { get; set; }
        public string VendiNisjes { get; set; }
        public string VendiZbritjes { get; set; }
        public DateTime DataNisjesOra { get; set; }
        public decimal Cmimiet { get; set; }
    }
}