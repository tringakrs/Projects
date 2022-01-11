using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using FlightsApp.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace FlightsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeliveryController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public DeliveryController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"
                          select DeliveryID, Klienti,Aeroporti,Cmimi,KohaENisjes,KohaEArritjes,Kompania from dbo.Delivery";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FlightAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]

        public JsonResult Post(Delivery d)
        {
            string query = @"
                          insert into dbo.Delivery values
                          ('" + d.Klienti + @"',
                           '" + d.Aeroporti + @"',
                           '" + d.Cmimi + @"',
                           '" + d.KohaENisjes + @"',
                           '" + d.KohaEArritjes + @"',
                           '" + d.Kompania + @"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FlightAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Delivery d)
        {

            string query = @"update Delivery set
                            DeliveryID = '" + d.DeliveryID + @"'
                            ,Klienti = '" + d.Klienti + @"'
                            ,Aeroporti = '" + d.Aeroporti + @"'
                            ,Cmimi = '" + d.Cmimi + @"'
                            ,KohaENisjes = '" + d.KohaENisjes + @"'
                            ,KohaEArritjes = '" + d.KohaEArritjes + @"'
                            ,Kompania = '" + d.Kompania + @"'
                            where Delivery=" + d.DeliveryID + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FlightAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {
            string query = @"
                          delete from dbo.Delivery
                          where DeliveryID = " + id + @" 
                           ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FlightAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}


