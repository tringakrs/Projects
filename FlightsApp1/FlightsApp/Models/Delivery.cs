using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightsApp.Models
{
    public class Delivery
    {
        public int DeliveryID { get; set; }
        public string Klienti { get; set; }
        public string Aeroporti { get; set; }
        public double Cmimi { get; set; }
        public DateTime KohaENisjes { get; set; }
        public DateTime KohaEArritjes { get; set; }
        public string Kompania { get; set; }

    }
}