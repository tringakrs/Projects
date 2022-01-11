using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace FlightsApp.Models
{
    public class Booking
    {
        [Key]
        public int id { get; set; }
        public DateTime Data { get; set; }
        public string Klienti { get; set; }
        public string Kompanite { get; set; }
        public string Banka { get; set; }
        public int FluturimetID { get; set; }

    }
}
