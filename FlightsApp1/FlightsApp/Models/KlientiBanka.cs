using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightsApp.Models
{
    public class KlientiBanka
    {
        public int KlientiBankaID { get; set; }
        public string Klienti { get; set; }
        public int CardNumber { get; set; }
        public string CardType { get; set; }
        public DateTime ExpiryDate { get; set; }
        public int SecurityCode { get; set; }

    }
}
