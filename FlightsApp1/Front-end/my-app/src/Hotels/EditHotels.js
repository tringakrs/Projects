import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditHotels extends Component{
    constructor(props){
        super(props);
        this.state={are:[],kl:[]}; 
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
      fetch(process.env.REACT_APP_API+'Kompania')
      .then(response=>response.json())
      .then(data=>{
          this.setState({are:data});
      })
      fetch(process.env.REACT_APP_API+'Klienti')
    .then(response=>response.json())
    .then((data) => {
        this.setState({kl:data});
    });
  }
  
    
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"Hotels",{
             method:'PUT',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
                Emri:event.target.Emri.value,
                Dhoma:event.target.Dhoma.value,
                DataEArdhjes:event.target.DataEArdhjes.value,
                DataELargimit:event.target.DataELargimit.value,
                NrPersonave:event.target.NrPersonave.value,
                Oferta:event.target.Oferta.value,
                Cmimi:event.target.Cmimi.value,
                Klienti:event.target.Klienti.value,
                Kompanina:event.target.Kompanina.value,
                HoteliID:event.target.HoteliID.value


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
    
    <Modal.Body>
       <Row>
         <Col sm={6}>
           <Form onSubmit={this.handleSubmit}>
           <Form.Group controlId="HoteliID">
                <Form.Label>HoteliID</Form.Label>
                <Form.Control type="text" name="HoteliID" required 
                disabled
                defaultValue={this.props.HoteliID}
                placeholder="HoteliID"/>
             </Form.Group>
             <Form.Group controlId="Emri">
                <Form.Label>Emri</Form.Label>
                <Form.Control type="text" name="Emri" required 
                defaultValue={this.props.Emri}
                placeholder="Emri"/>
             </Form.Group>
             <Form.Group controlId="Dhoma">
                <Form.Label>Dhoma</Form.Label>
                <Form.Control type="text" name="Dhoma" required 
                defaultValue={this.props.Dhoma}
                placeholder="Dhoma"/>
             </Form.Group>
             <Form.Group controlId="DataEArdhjes">
                <Form.Label>DataEArdhjes</Form.Label>
                <Form.Control 
                defaultValue={this.props.DataEArdhjes}
                type="date"
                name="DataEArdhjes"
                required
                placeholder="DataEArdhjes"
                />
                 </Form.Group>

                 <Form.Group controlId="DataELargimit">
                <Form.Label>DataELargimit</Form.Label>
                <Form.Control 
                defaultValue={this.props.DataELargimit}
                type="date"
                name="DataELargimit"
                required
                placeholder="DataELargimit"
                />
                 </Form.Group>

             <Form.Group controlId="NrPersonave">
                        <Form.Label>NrPersonave</Form.Label>                     
                        <Form.Control as="select"   type="text" defaultValue={this.props.NrPersonave} placeholder="NrPersonave">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>    
                                <option value="4">4</option>    
                                 <option value="5">5</option>                       
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Oferta">
                        <Form.Label>Oferta</Form.Label>                     
                        <Form.Control as="select" defaultValue={this.props.Oferta}  type="text"placeholder="Oferta">
                                <option value="Inclusive">Inclusive</option>
                                <option value="All Inclusive">All Inclusive</option>
                                <option value="Ultra All Inclusive">Ultra All Inclusive</option>                       
                        </Form.Control>
                    </Form.Group>

             <Form.Group controlId="Cmimi">
                <Form.Label>Cmimi</Form.Label>
                <Form.Control type="text" name="Cmimi" required 
                defaultValue={this.props.Cmimi}
                placeholder="Cmimi"/>
             </Form.Group>
             
             <Form.Group controlId="Kompanina">
                        <Form.Label>Kompania</Form.Label>
                        <Form.Control defaultValue={this.props.Kompanina} as="select">
                        {this.state.are.map(are=>
                            <option key={are.KompaniaID}>{are.KompaniaEmri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Klienti">
                        <Form.Label>Klienti</Form.Label>
                        <Form.Control  defaultValue={this.props.Klienti} as="select">
                        {this.state.kl.map(kl=>
                            <option key={kl.KlientiID}>{kl.EmriMbiemri}</option>)}
                        </Form.Control>
                    </Form.Group>  


             <Form.Group>
               <Button variant="primary" type="submit">
                 Perditeso Hotels
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