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
    public class KlientiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public KlientiController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"
                          select KlientiID, EmriMbiemri, Ditelindja, Gjinia, Adresa, NrPersonal, Shtetesia, KodiPostal, NrTelefonit, Email from dbo.Klienti";
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

        public JsonResult Post(Klienti k)
        {
            string query = @"
                          insert into dbo.Klienti values
                          ('" + k.EmriMbiemri + @"','" + k.Ditelindja + @"', '" + k.Gjinia + @"', '" + k.Adresa + "' , '" + k.NrPersonal + @"','" + k.Shtetesia + @"','" + k.KodiPostal + @"','" + k.NrTelefonit + @"','" + k.Email + @"')";
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

        public JsonResult Put(Klienti k)
        {
            string query = @"
                          update Klienti set 
                          EmriMbiemri = '" + k.EmriMbiemri + @"',
                          Ditelindja = '" + k.Ditelindja + @"',
                          Gjinia = '" + k.Gjinia + @"',
                          Adresa = '" + k.Adresa + @"',
                          NrPersonal = '" + k.NrPersonal + @"',
                          Shtetesia = '" + k.Shtetesia + @"',
                          KodiPostal = '" + k.KodiPostal + @"',
                          NrTelefonit = '" + k.NrTelefonit + @"',
                          Email = '" + k.Email + @"'

                          where KlientiID='" + k.KlientiID + @"'
                          
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
            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {
            string query = @"
                          delete from Klienti
                          where KlientiID = " + id + @" 
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