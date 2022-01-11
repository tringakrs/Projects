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
    public class KlientiBankaController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public KlientiBankaController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {


            string query = @"select KlientiBankaID,Klienti,CardNumber, CardType, ExpiryDate, SecurityCode
            from dbo.KlientiBanka";
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
        public JsonResult Post(KlientiBanka kb)
        {

            string query = @"insert into dbo.KlientiBanka values 
                           ('" + kb.Klienti + @"',
                            '" + kb.CardNumber + @"',
                            '" + kb.CardType + @"',
                            '" + kb.ExpiryDate + @"',
                            '" + kb.SecurityCode + @"')";
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
        public JsonResult Put(KlientiBanka kb)
        {

            string query = @"update dbo.KlientiBanka set
                                     Klienti='" + kb.Klienti + @"',
                                     CardNumber='" + kb.CardNumber + @"',
                                     CardType='" + kb.CardType + @"',
                                     ExpiryDate='" + kb.ExpiryDate + @"',
                                     SecurityCode = '" + kb.SecurityCode + @"'
                                     where KlientiBankaID='" + kb.KlientiBankaID + @"'";
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

            string query = @"delete from dbo.KlientiBanka 
                            where KlientiBankaID=" + id + @"";
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
