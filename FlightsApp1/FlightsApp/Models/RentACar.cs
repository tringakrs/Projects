using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightsApp.Models
{
    public class RentACar
    {
        public int MakinaID { get; set; }
        public int Targat { get; set; }
        public string Lloji { get; set; }
        public string Ngjyra { get; set; }
        public DateTime Viti { get; set; }
        public string Klienti { get; set; } 
        public string KompaninaCar { get; set; }
        public string PickUpLocation { get; set; }

        public DateTime PickUpDate { get; set; }
        public DateTime ReturnDate { get; set; }
    }
}