import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditQyteti extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"Qyteti",{
             method:'PUT',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
               Emri:event.target.Emri.value,
                ISO:event.target.ISO.value,

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
            Perditeso Qytetin
         </Modal.Title>
    </Modal.Header>
    <Modal.Body>
       <Row>
         <Col sm={6}>
           <Form onSubmit={this.handleSubmit}>
             <Form.Group controlId="Emri">
                <Form.Label>Emri</Form.Label>
                <Form.Control type="text" name="Emri" required 
                defaultValue={this.props.Emri}
                placeholder="Emri"/>
             </Form.Group>

            

                 <Form.Group controlId="ISO">
                <Form.Label>ISO</Form.Label>
                <Form.Control type="text" name="ISO" required 
                disabled
                defaultValue={this.props.ISO}
                placeholder="ISO"/>
             </Form.Group>

             
             


             <Form.Group>
               <Button variant="primary" type="submit">
                 Perditeso Qytetin
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