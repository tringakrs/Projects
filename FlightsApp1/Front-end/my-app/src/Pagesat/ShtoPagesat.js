import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import { Grid,Paper, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";


export class ShtoPagesat extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"Pagesat",{
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
               Booking:event.target.Booking.value
              

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
                      <h2 class="ShtoText">Shto Pagesat</h2>
                      
       <Row>
         <Col sm={6}>
           <Form onSubmit={this.handleSubmit}>
             <Form.Group controlId="Booking">
               
               <Form.Control type="text" name="Booking" required placeholder="Booking"/>
            </Form.Group>



             <Form.Group>
               <Button variant="primary" type="submit">
                 Shto Pagesat
               </Button>
             </Form.Group>
           </Form>
         </Col>
       </Row>
</Grid>
     
            
         
      )
   }
}