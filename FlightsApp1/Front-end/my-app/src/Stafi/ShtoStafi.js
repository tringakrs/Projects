import React,{Component} from 'react';
import {Button, Row, Col, Form} from 'react-bootstrap';
import { Grid } from "@material-ui/core";

export class ShtoStafi extends Component{
    constructor(props){
        super(props);
        this.state={aer:[],are:[]}; 
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
      fetch(process.env.REACT_APP_API+'Roli')
      .then(response=>response.json())
      .then(data=>{
          this.setState({aer:data});
      })
      fetch(process.env.REACT_APP_API+'Kompania')
    .then(response=>response.json())
    .then((data) => {
        this.setState({are:data});
    });
  }
  
  
  
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"Stafi",{
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
              EmriMbiemri:event.target.EmriMbiemri.value,
              Ditelindja:event.target.Ditelindja.value,
              Gjinia:event.target.Gjinia.value,
              NrPersonal:event.target.NrPersonal.value,
              Shtetesia:event.target.Shtetesia.value,
              KodiPostal:event.target.KodiPostal.value,
              NrTelefonit:event.target.NrTelefonit.value,
              Roli:event.target.Roli.value,
              Kompania:event.target.Kompania.value,
              FillimiIPunes:event.target.FillimiIPunes.value,
              MbarimiIPunes:event.target.MbarimiIPunes.value
             })
         })

         .then(res=>res.json())
         .then(result=>{
             alert(result);

         },
         (error)=>{
             alert('Failed');
         })
        }


    render(){
        return (
           
          <Grid   alignItems="center" item xs={12}>
                      <h2 class="ShtoText">Shto Stafi</h2>
       <Row>
         <Col sm={9}>
           <Form onSubmit={this.handleSubmit}>
               <Form.Group controlId="EmriMbiemri">
               
                <Form.Control type="text" name="EmriMbiemri" required placeholder="Emri Mbiemri"/>
             </Form.Group>

             <Form.Group controlId="Ditelindja">
                <Form.Label>Ditelindja</Form.Label>
                <Form.Control 
                type="date"
                name="Ditelindja"
                required
                placeholder="Ditelindja"
                />
                 </Form.Group>

                 
                 <Form.Group controlId="Gjinia">
                        <Form.Label>Gjinia</Form.Label>                     
                        <Form.Control as="select" required placeholder="Gjinia"   type="text">
                                <option value="Mashkull">Mashkull</option> disabled
                                <option value="Femer">Femer</option>
                                <option value="Tjeter">Tjeter</option>                       
                        </Form.Control>
                    </Form.Group>

             <Form.Group controlId="NrPersonal">
               
                <Form.Control type="text" name="NrPersonal" required placeholder="Numri Personal"/>
             </Form.Group>

             <Form.Group controlId="Shtetesia">
               
                <Form.Control type="text" name="Shtetesia" required placeholder="Shtetesia"/>
             </Form.Group>

             <Form.Group controlId="KodiPostal">
               
                <Form.Control type="text" name="KodiPostal" required placeholder="Kodi Postal"/>
             </Form.Group>
             
             <Form.Group controlId="NumriTelefonit">
               
                <Form.Control type="text" name="NrTelefonit" required placeholder="Numri I Telefonit"/>
             </Form.Group>

             <Form.Group controlId="Roli">
                        <Form.Label>Roli</Form.Label>
                        <Form.Control as="select">
                        {this.state.aer.map(aer=>
                            <option key={aer.RoliID}>{aer.RoliEmri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Kompania">
                        <Form.Label>Kompania</Form.Label>
                        <Form.Control as="select">
                        {this.state.are.map(are=>
                            <option key={are.KompaniaID}>{are.KompaniaEmri}</option>)}
                        </Form.Control>
                    </Form.Group>


                   

             <Form.Group controlId="FillimiIPunes">
                <Form.Label>Fillimi I Punes</Form.Label>
                <Form.Control 
                type="date"
                name="FillimiIPunes"
                required
                placeholder="FillimiIPunes"
                />
                 </Form.Group>

                 <Form.Group controlId="MbarimiIPunes">
                <Form.Label>Mbarimi I Punes</Form.Label>
                <Form.Control 
                type="date"
                name="MbarimiIPunes"

                placeholder="MbarimiIPunes"
                />
                 </Form.Group>



             <Form.Group>
               <Button variant="primary" type="submit">
                 Shto Stafin
               </Button>
             </Form.Group>
           </Form>
         </Col>
       </Row>      

       </Grid>
      )
   }
}