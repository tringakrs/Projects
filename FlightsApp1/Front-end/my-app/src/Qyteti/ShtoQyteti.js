import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import { Grid,Paper, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";


export class ShtoQyteti extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"Qyteti",{
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
              ISO:event.target.ISO.value,
               Emri:event.target.Emri.value
              

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
                      <h2 class="ShtoText">Shto Qytetin</h2>
                      
       <Row>
         <Col sm={6}>
           <Form onSubmit={this.handleSubmit}>
             <Form.Group controlId="ISO">
               
                <Form.Control type="text" name="ISO" required placeholder="ISO"/>
             </Form.Group>

             <Form.Group controlId="Emri">
               
               <Form.Control type="text" name="Emri" required placeholder="Emri"/>
            </Form.Group>



             <Form.Group>
               <Button variant="primary" type="submit">
                 Shto Qyteti
               </Button>
             </Form.Group>
           </Form>
         </Col>
       </Row>
</Grid>
     
            
         
      )
   }
}