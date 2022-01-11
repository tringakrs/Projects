import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditRoli extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+"Roli",{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                RoliID:event.target.RoliID.value,
                RoliEmri:event.target.RoliEmri.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    render() {
        
        return (
            <div className="container">

                 <Modal {...this.props} size="lg" 
                 aria-labelledby="contained-modal-title-vcenter" 
                 centered>
                     <Modal.Header closeButton>
                         <Modal.Title id="contained-modal-title-vcenter">
                         Edit Rolin
                         </Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                     <Row>
                         <Col sm={6}>
                             <Form onSubmit={this.handleSubmit}>
                                 <Form.Group controlId="RoliID">
                                     <Form.Label>Roli Id</Form.Label>
                                     <Form.Control type="text" name="RoliID" required
                                     disabled defaultValue={this.props.rid} placeholder="RoliID"/>
                                 </Form.Group>
                                 <Form.Group controlId="RoliEmri">
                                     <Form.Label>Roli Emri</Form.Label>
                                     <Form.Control type="text" name="RoliEmri" required
                                     defaultValue={this.props.rem} placeholder="RoliEmri"/>
                                 </Form.Group>
                                 <Form.Group>
                                     <Button variant="primary" type="submit">
                                     Update Rolin
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