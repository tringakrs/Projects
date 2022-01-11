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
    public class StafiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public StafiController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"
                          select StafiID,EmriMbiemri, Ditelindja, Gjinia, NrPersonal, Shtetesia, KodiPostal, NrTelefonit, Roli, Kompania, FillimiIPunes, MbarimiIPunes from dbo.Stafi";
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

        public JsonResult Post(Stafi s)
        {
            string query = @"
                          insert into dbo.Stafi values
                          ('" + s.EmriMbiemri + @"',
                           '" + s.Ditelindja + @"',
                           '" + s.Gjinia + @"',
                           '" + s.NrPersonal + @"',
                           '" + s.Shtetesia + @"',
                           '" + s.KodiPostal + @"',
                           '" + s.NrTelefonit + @"',
                           '" + s.Roli + @"',
                           '" + s.Kompania + @"',
                           '" + s.FillimiIPunes + @"',
                           '" + s.MbarimiIPunes + @"')";
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

        public JsonResult Put(Stafi s)
        {
            string query = @"
                          update dbo.Stafi set 
                          EmriMbiemri = '" + s.EmriMbiemri + @"',
                          Ditelindja = '" + s.Ditelindja + @"',
                          Gjinia = '" + s.Gjinia + @"',
                          NrPersonal = '" + s.NrPersonal + @"',
                          Shtetesia = '" + s.Shtetesia + @"',
                          KodiPostal = '" + s.KodiPostal + @"',
                          NrTelefonit = '" + s.NrTelefonit + @"',
                          Roli = '" + s.Roli + @"',
                          Kompania = '" + s.Kompania + @"',
                          FillimiIPunes = '" + s.FillimiIPunes + @"',
                          MbarimiIPunes = '" + s.MbarimiIPunes + @"'
                          where StafiID='" + s.StafiID + @"'

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
                          delete from dbo.Stafi
                          where StafiID = " + id + @" 
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