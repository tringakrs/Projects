import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditKompania extends Component{
    constructor(props){
        super(props);
        this.state={qyt:[],shte:[]}; 

        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch(process.env.REACT_APP_API+'Qyteti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({qyt:data});
        })
        fetch(process.env.REACT_APP_API+'Shteti')
      .then(response=>response.json())
      .then((data) => {
          this.setState({shte:data});
      });
    }
   
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"Kompania",{
             method:'PUT',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
              KompaniaEmri:event.target.KompaniaEmri.value,
               NrTelefonit:event.target.NrTelefonit.value,
               Email:event.target.Email.value,
               Adresa:event.target.Adresa.value,
               Qyteti:event.target.Qyteti.value,
               Shteti:event.target.Shteti.value,
               KodiPostal:event.target.KodiPostal.value,
               KompaniaID:event.target.KompaniaID.value


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
           <Form.Group controlId="KompaniaID">
                <Form.Label>KompaniaID</Form.Label>
                <Form.Control type="text" name="KompaniaID" required 
                disabled
                defaultValue={this.props.KompaniaID}
                placeholder="KompaniaID"/>
             </Form.Group>
             
             <Form.Group controlId="KompaniaEmri">
                <Form.Label>KompaniaEmri</Form.Label>
                <Form.Control type="text" name="KompaniaEmri" required 
                defaultValue={this.props.KompaniaEmri}
                placeholder="KompaniaEmri"/>
             </Form.Group>

             <Form.Group controlId="NrTelefonit">
                <Form.Label>NrTelefonit</Form.Label>
                <Form.Control type="text" name="NrTelefonit" required 
                defaultValue={this.props.NrTelefonit}
                placeholder="NrTelefonit"/>
             </Form.Group>

             <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="Email" required 
                defaultValue={this.props.Email}
                placeholder="Email"/>
             </Form.Group>

             <Form.Group controlId="Adresa">
                <Form.Label>Adresa</Form.Label>
                <Form.Control type="text" name="Adresa" required 
                defaultValue={this.props.Adresa}
                placeholder="Adresa"/>
             </Form.Group>

             <Form.Group controlId="Qyteti">
                        <Form.Label>Qyteti</Form.Label>
                        <Form.Control as="select" name="Qyteti"
                         required 
                    defaultValue={this.props.Qyteti}
                        placeholder="Qyteti" >
                        {this.state.qyt.map(qyt=>
                            <option key={qyt.ISO}>{qyt.Emri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Shteti">
                        <Form.Label>Shteti</Form.Label>
                        <Form.Control as="select" name="Shteti" required 
                defaultValue={this.props.Shteti}
                placeholder="Shteti">
                        {this.state.shte.map(shte=>
                            <option key={shte.ShtetiCode}>{shte.ShtetiEmri}</option>)}
                        </Form.Control>
                    </Form.Group>

             
            
             <Form.Group controlId="KodiPostal">
                <Form.Label>KodiPostal</Form.Label>
                <Form.Control type="text" name="KodiPostal" required 
                defaultValue={this.props.KodiPostal}
                placeholder="KodiPostal"/>
             </Form.Group>   


             <Form.Group>
               <Button variant="primary" type="submit">
                 Perditeso Kompanite
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