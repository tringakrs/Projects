import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditShteti extends Component{
  constructor(props){
    super(props);
    this.state={qyt:[]}; 

    this.handleSubmit=this.handleSubmit.bind(this);
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
             method:'PUT',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
                ShtetiCode:event.target.ShtetiCode.value,
                ShtetiEmri:event.target.ShtetiEmri.value,
                Qyteti:event.target.Qyteti.value
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
            Perditeso Shtetin
         </Modal.Title>
    </Modal.Header>
    <Modal.Body>
       <Row>
         <Col sm={6}>
           <Form onSubmit={this.handleSubmit}>
             <Form.Group controlId="ShtetiCode">
                <Form.Label>Kodi Shteteror</Form.Label>
                <Form.Control type="text" name="ShtetiCode" required 
                defaultValue={this.props.ShtetiCode}
                placeholder="Kodi shteteror"/>
             </Form.Group>

            

                 <Form.Group controlId="ShtetiEmri">
                <Form.Label>ShtetiEmri</Form.Label>
                <Form.Control type="text" name="ShtetiEmri" required 
                defaultValue={this.props.ShtetiEmri}
                placeholder="ShtetiEmri"/>
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

             
             


             <Form.Group>
               <Button variant="primary" type="submit">
                 Perditeso Shtetin
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