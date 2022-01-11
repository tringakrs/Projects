import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import { Grid ,Paper} from "@material-ui/core";

export class ShtoKlientiBanka extends Component{
  constructor(props) {
    super(props);
    this.state={kli:[]}; 
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    fetch(process.env.REACT_APP_API+'Klienti')
  .then(response=>response.json())
  .then((data) => {
      this.setState({kli:data});
  });
}
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"KlientiBanka",{
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
                Klienti:event.target.Klienti.value,
                CardNumber:event.target.CardNumber.value,
                CardType:event.target.CardType.value,
                ExpiryDate:event.target.ExpiryDate.value,
                SecurityCode:event.target.SecurityCode.value,
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

              <Grid item xs={6}>
                      <h2 class="ShtoText">Shto Te Dhenat Bankare</h2>

       <Row>
         <Col sm={11}>
           <Form onSubmit={this.handleSubmit}>
           <Form.Group controlId="Klienti">
                        <Form.Label>Klienti</Form.Label>
                        <Form.Control as="select">
                        {this.state.kli.map(kli=>
                            <option key={kli.KlinetiID}>{kli.EmriMbiemri}</option>)}
                        </Form.Control>
                    </Form.Group>

             <Form.Group controlId="CardNumber">
               
                <Form.Control type="text" name="CardNumber" required placeholder="Card Number"/>
             </Form.Group>

             <Form.Group controlId="CardType">
                        <Form.Label>Card Type</Form.Label>                     
                        <Form.Control as="select"   type="text">
                                <option value="Master Cards">Credit Cards</option>
                                <option value="Visa Cards">Debit Cards</option>
                                <option value="Tjeter">Tjeter</option>                       
                        </Form.Control>
                    </Form.Group>

             <Form.Group controlId="ExpiryDate">
                <Form.Label>Ditelindja</Form.Label>
                <Form.Control 
                type="date"
                name="ExpiryDate"
                required
                placeholder="Expiry Date"
                />
                 </Form.Group>

             <Form.Group controlId="SecurityCode">
                
                <Form.Control type="number" name="SecurityCode" required placeholder="Security Code"/>
             </Form.Group>

             <Form.Group>
               <Button variant="primary" type="submit">
                 Shto Te Dhenat Bankare
               </Button>
             </Form.Group>
           </Form>
         </Col>
       </Row>
          
       </Grid>

      )
   }
}