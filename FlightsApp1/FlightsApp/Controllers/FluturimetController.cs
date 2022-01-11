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

namespace FlightsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FluturimetController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public FluturimetController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {


            string query = @"select FluturimetID, Stafi, Kompania, VendiNisjes, VendiZbritjes, DataNisjesOra, Cmimiet  from dbo.Fluturimet";
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
        public JsonResult Post(Fluturimet flu)
        {

            string query = @"insert into Fluturimet values ('"+flu.Stafi + @"',
                                                           '" + flu.Kompania + @"',
                                                           '" + flu.VendiNisjes + @"',
                                                           '" + flu.VendiZbritjes + @"',
                                                           '" + flu.DataNisjesOra + @"',
                                                           '" + flu.Cmimiet + @"')";
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
        public JsonResult Put(Fluturimet flu)
        {

            string query = @"update Fluturimet set
                            Stafi = '" + flu.Stafi + @"',
                          Kompania = '" + flu.Kompania + @"',
                          VendiNisjes = '" + flu.VendiNisjes + @"',
                          VendiZbritjes = '" + flu.VendiZbritjes + @"',
                          DataNisjesOra = '" + flu.DataNisjesOra + @"',
                          Cmimiet = '" + flu.Cmimiet + @"'
                          where FluturimetID='" + flu.FluturimetID + @"'";
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

            string query = @"delete from Fluturimet 
                            where FluturimetID=" + id + @"";
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
