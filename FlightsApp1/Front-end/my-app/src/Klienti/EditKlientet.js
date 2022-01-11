import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditKlientet extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Klienti',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               KlientiID: event.target.KlientiID.value,
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

                 <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                     <Modal.Header closeButton>
                         <Modal.Title id="contained-modal-title-vcenter">
                         Perditeso Klientin
                         </Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                     <Row>
                         <Col sm={6}>
                             <Form onSubmit={this.handleSubmit}>
                                 <Form.Group controlId="KlientiID">
                                     <Form.Label>Klienti Id</Form.Label>
                                     <Form.Control type="text" name="KlientiID" required
                                     disabled defaultValue={this.props.KlientiID} placeholder="KlientiID"/>
                                 </Form.Group>

                                 <Form.Group controlId="EmriMbiemri">
                                     <Form.Label>Emri Mbiemri</Form.Label>
                                     <Form.Control type="text" name="EmriMbiemri" required
                                     defaultValue={this.props.EmriMbiemri} placeholder="EmriMbiemri"/>
                                 </Form.Group>

                                 <Form.Group controlId="Ditelindja">
                                 <Form.Label>Ditelindja</Form.Label>
                                 <Form.Control 
                                 type="dateTime"
                                 name="Ditelindja"
                                 required
                                 placeholder="Ditelindja"
                                 defaultValue={this.props.Ditelindja}
                                 />
                                 </Form.Group>

                                 <Form.Group controlId="Gjinia">
                                    <Form.Label>Gjinia</Form.Label>                     
                                    <Form.Control as="select"   
                                    type="text"
                                    defaultValue={this.props.Gjinia} 
                                    placeholder="NrPersonave">
                                            <option value="Mashkull">Mashkull</option>
                                            <option value="Femer">Femer</option>
                                            <option value="Tjeter">Tjeter</option>                         
                                    </Form.Control>
                                </Form.Group>

                                 <Form.Group controlId="Adresa">
                                     <Form.Label>Adresa</Form.Label>
                                     <Form.Control type="text" name="Adresa" required
                                     defaultValue={this.props.Adresa} placeholder="Adresa"/>
                                 </Form.Group>

                                 <Form.Group controlId="NrPersonal">
                                     <Form.Label>NrPersonal</Form.Label>
                                     <Form.Control type="text" name="NrPersonal" required
                                     defaultValue={this.props.NrPersonal} placeholder="NrPersonal"/>
                                 </Form.Group>

                                 <Form.Group controlId="Shtetesia">
                                     <Form.Label>Shtetesia</Form.Label>
                                     <Form.Control type="text" name="Shtetesia" required
                                     defaultValue={this.props.Shtetesia} placeholder="Shtetesia"/>
                                 </Form.Group>

                                 <Form.Group controlId="KodiPostal">
                                     <Form.Label>KodiPostal</Form.Label>
                                     <Form.Control type="text" name="KodiPostal" required
                                     defaultValue={this.props.KodiPostal} placeholder="KodiPostal"/>
                                 </Form.Group>

                                 <Form.Group controlId="NrTelefonit">
                                     <Form.Label>NrTelefonit</Form.Label>
                                     <Form.Control type="text" name="NrTelefonit" required
                                     defaultValue={this.props.NrTelefonit} placeholder="NrTelefonit"/>
                                 </Form.Group>

                                 <Form.Group controlId="Email">
                                     <Form.Label>Email</Form.Label>
                                     <Form.Control type="text" name="Email" required
                                     defaultValue={this.props.Email} placeholder="Email"/>
                                 </Form.Group>

                                 <Form.Group>
                                     <Button variant="primary" type="submit">
                                     Perditeso Klientin
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