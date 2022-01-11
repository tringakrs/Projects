import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import { Grid,Paper, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";


export class ShtoKlientet extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"Klienti",{
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
               EmriMbiemri: event.target.EmriMbiemri.value,
               Ditelindja: event.target.Ditelindja.value,
               Gjinia: event.target.Gjinia.value,
               Adresa: event.target.Adresa.value,
               NrPersonal: event.target.NrPersonal.value,
               Shtetesia: event.target.Shtetesia.value,
               KodiPostal: event.target.KodiPostal.value,
               NrTelefonit: event.target.NrTelefonit.value,
               Email: event.target.Email.value
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
            

                  <Grid   alignItems="center" item xs={6}>
                      <h2 class="ShtoText">Shto Klientet</h2>
                      
       <Row>
         <Col sm={13}>
           <Form onSubmit={this.handleSubmit}>
             <Form.Group controlId="EmriMbiemri">
               
                <Form.Control type="text" name="EmriMbiemri"
                 required placeholder="Emri dhe Mbiemri"/>
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
                        <Form.Control as="select"   type="text">
                                <option value="Mashkull">Mashkull</option>
                                <option value="Femer">Femer</option>
                                <option value="Tjeter">Tjeter</option>                       
                        </Form.Control>
                    </Form.Group>
                    
                           <Form.Group controlId="Adresa">

                              <Form.Control type="text" name="Adresa" required placeholder="Adresa" />
                           </Form.Group>

                           <Form.Group controlId="NrPersonal">

                              <Form.Control type="text" name="NrPersonal" required placeholder="Nr. Personal" />
                           </Form.Group>

                           <Form.Group controlId="Shtetesia">

                              <Form.Control type="text" name="Shtetesia" required placeholder="Shtetesia" />
                           </Form.Group>

                           <Form.Group controlId="KodiPostal">

                              <Form.Control type="text" name="KodiPostal" required placeholder="Kodi Postal" />
                           </Form.Group>

                           <Form.Group controlId="NrTelefonit">

                              <Form.Control type="text" name="NrTelefonit" required placeholder="Nr. i Telefonit" />
                           </Form.Group>

                           <Form.Group controlId="Email">

                              <Form.Control type="text" name="Email" required placeholder="Email" />
                           </Form.Group>



             <Form.Group>
               <Button variant="primary" type="submit">
                 Shto Klientin
               </Button>
             </Form.Group>
           </Form>
         </Col>
       </Row>
</Grid>
     
            
         
      )
   }
}