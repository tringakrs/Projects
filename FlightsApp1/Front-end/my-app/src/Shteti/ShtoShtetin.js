import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import { Grid,Paper, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";


export class ShtoShtetin extends Component{
  constructor(props) {
    super(props);
    this.state={qyt:[]}; 
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){

    fetch(process.env.REACT_APP_API+'Qyteti')
    .then(response=>response.json())
    .then(data=>{
        this.setState({qyt:data});

  });
}
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"Shteti",{
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
                ShtetiCode:event.target.ShtetiCode.value,
                ShtetiEmri:event.target.ShtetiEmri.value,
                Qyteti:event.target.Qyteti.value,

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
                      <h2 class="ShtoText">Shto Shtetin</h2>
                      
       <Row>
         <Col sm={6}>
           <Form onSubmit={this.handleSubmit}>
             <Form.Group controlId="ShtetiCode">
               <Form.Control type="text" name="ShtetiCode" required placeholder="Kodi shteteror"/>
             </Form.Group>

             <Form.Group controlId="ShtetiEmri">
               <Form.Control type="text" name="ShtetiEmri" required placeholder="Shteti"/>
            </Form.Group>

            <Form.Group controlId="Qyteti">
                        <Form.Label>Qyteti</Form.Label>
                        <Form.Control as="select">
                        {this.state.qyt.map(qyt=>
                            <option key={qyt.ISO}>{qyt.Emri}</option>)}
                        </Form.Control>
                    </Form.Group>

             <Form.Group>
               <Button variant="primary" type="submit">
                 Shto Shtetin
               </Button>
             </Form.Group>
           </Form>
         </Col>
       </Row>
</Grid>
     
            
         
      )
   }
}