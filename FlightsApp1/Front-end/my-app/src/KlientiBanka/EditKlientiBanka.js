import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditKlientiBanka extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"KlientiBanka",{
             method:'PUT',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
              KlientiBankaID:event.target.KlientiBankaID.value,
               Klienti:event.target.Klienti.value,
               CardNumber:event.target.CardNumber.value,
               CardType:event.target.CardType.value,
               ExpiryDate:event.target.ExpiryDate.value,
               SecurityCode:event.target.SecurityCode.value
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
            <div className="container">

<Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
            Perditeso Te Dhenat Bankare
         </Modal.Title>
    </Modal.Header>
    <Modal.Body>
       <Row>
         <Col sm={6}>
           <Form onSubmit={this.handleSubmit}>
             <Form.Group controlId="KlientiBankaID">
                <Form.Label>Klienti Banka ID</Form.Label>
                <Form.Control type="text" name="KlientiBankaID" required 
                disabled
                defaultValue={this.props.KlientiBankaID}
                placeholder="KlientiBankaID"/>
             </Form.Group>

             <Form.Group controlId="Klienti">
                    <Form.Label>Klienti</Form.Label>
                    <Form.Control
                      type="text"
                      name="Klienti"
                      required
                      defaultValue={this.props.VendiNisjes}
                      placeholder="Klienti"
                    />
                  </Form.Group>

             <Form.Group controlId="CardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" name="CardNumber" required 
                defaultValue={this.props.CardNumber}
                placeholder="CardNumber"/>
             </Form.Group>

                 <Form.Group controlId="CardType">
                <Form.Label>Card Type</Form.Label>
                <Form.Control type="text" name="CardType" required 
                defaultValue={this.props.CardType}
                placeholder="Card Type"/>
             </Form.Group>

             <Form.Group controlId="ExpiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control 
                        type="date"
                        name="ExpiryDate"
                        required
                        placeholder="Expiry Date"
                        defaultValue={this.props.ExpiryDate}
                        />
                    </Form.Group>

             <Form.Group controlId="SecurityCode">
                <Form.Label>SecurityCode</Form.Label>
                <Form.Control type="text" name="SecurityCode" required 
                defaultValue={this.props.SecurityCode}
                placeholder="Security Code"/>
             </Form.Group>

             <Form.Group>
               <Button variant="primary" type="submit">
                 Perditeso Te Dhenat Bankare
               </Button>
             </Form.Group>
           </Form>
         </Col>
       </Row>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>          
            
          </div>
      )
   }
}