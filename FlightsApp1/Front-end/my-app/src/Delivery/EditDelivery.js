import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditDelivery extends Component{
    constructor(props){
        super(props);
        this.state={kli:[],aer:[],kom:[]}; 
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
    
        fetch(process.env.REACT_APP_API+'Klienti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({kli:data});
        })
        fetch(process.env.REACT_APP_API+'Aeroporti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({aer:data});
        })
        fetch(process.env.REACT_APP_API+'Kompania')
      .then(response=>response.json())
      .then((data) => {
          this.setState({kom:data});
    
      });
    }
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"Delivery",{
             method:'PUT',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
                DeliveryID:event.target.DeliveryID.value,
                Klienti:event.target.Klienti.value,
                Aeroporti:event.target.Aeroporti.value,
                Cmimi:event.target.Cmimi.value,
                KohaENisjes:event.target.KohaENisjes.value,
                KohaEArritjes:event.target.KohaEArritjes.value,
                Kompania:event.target.Kompania.value,
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
            Perditeso Delivery
         </Modal.Title>
    </Modal.Header>
    <Modal.Body>
       <Row>
         <Col sm={6}>
           <Form onSubmit={this.handleSubmit}>
                 <Form.Group controlId="DeliveryID">
                <Form.Label>DeliveryID</Form.Label>
                <Form.Control type="text" name="DeliveryID" required 
                disabled
                defaultValue={this.props.DeliveryID}
                placeholder="DeliveryID"/>
             </Form.Group>

             <Form.Group controlId="Klienti">
                        <Form.Label>Klienti</Form.Label>
                        <Form.Control as="select">
                        {this.state.kli.map(kli=>
                            <option key={kli.KlientiID}>{kli.EmriMbiemri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Aeroporti">
                        <Form.Label>Aeroporti</Form.Label>
                        <Form.Control as="select">
                        {this.state.aer.map(aer=>
                            <option key={aer.AeroportiID}>{aer.EmriAeroprtit}</option>)}
                        </Form.Control>
                    </Form.Group>

             <Form.Group controlId="Cmimi">
                <Form.Label>Cmimi</Form.Label>
                <Form.Control type="text" name="Cmimi" required 
                defaultValue={this.props.Cmimi}
                placeholder="Cmimi"/>
             </Form.Group>

             <Form.Group controlId="KohaENisjes">
                <Form.Label>Koha E Nisjes</Form.Label>
                <Form.Control type="text" name="KohaENisjes" required 
                defaultValue={this.props.KohaENisjes}
                placeholder="Koha E Nisjes"/>
             </Form.Group>

             <Form.Group controlId="KohaEArritjes">
                <Form.Label>Koha E Arritjes</Form.Label>
                <Form.Control type="text" name="Koha E Arritjes" required 
                defaultValue={this.props.KohaEArritjes}
                placeholder="Koha E Arritjes"/>
             </Form.Group>

             <Form.Group controlId="Kompania">
                        <Form.Label>Kompania</Form.Label>
                        <Form.Control as="select">
                        {this.state.kom.map(kom=>
                            <option key={kom.KompaniaID}>{kom.KompaniaEmri}</option>)}
                        </Form.Control>
                    </Form.Group>

             <Form.Group>
               <Button variant="primary" type="submit">
                 Perditeso Delivery
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