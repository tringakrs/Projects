import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditPushimiPerPunetore extends Component{
    constructor(props){
        super(props);
        this.state={kom:[],sta:[]}; 

        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch(process.env.REACT_APP_API+'Stafi')
        .then(response=>response.json())
        .then(data=>{
            this.setState({sta:data});
        })
        fetch(process.env.REACT_APP_API+'Kompania')
      .then(response=>response.json())
      .then((data) => {
          this.setState({kom:data});
      });
    }
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"PushimiPerPunetore",{
             method:'PUT',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
                PPID:event.target.PPID.value,
                FillimiIPushimit:event.target.FillimiIPushimit.value,
                MbarimiIPushit:event.target.MbarimiIPushit.value,
                Arseyja:event.target.Arseyja.value,
                Stafi:event.target.Stafi.value,
                Kompania:event.target.Kompania.value

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
                 <Form.Group controlId="PPID">
                <Form.Label>DeliveryID</Form.Label>
                <Form.Control type="text" name="PPID" required 
                disabled
                defaultValue={this.props.PPID}
                placeholder="PPID"/>
             </Form.Group>

             <Form.Group controlId="FillimiIPushimit">
              <Form.Label>FillimiIPushimit</Form.Label>
               <Form.Control 
                type="dateTime"
                 name="FillimiIPushimit"
                 required
                 placeholder="FillimiIPushimit"
                defaultValue={this.props.FillimiIPushimit}/>
                 </Form.Group>

              <Form.Group controlId="MbarimiIPushit">
               <Form.Label>MbarimiIPushimit</Form.Label>
                <Form.Control 
                  type="dateTime"
                  name="MbarimiIPushit"
                  required
                   placeholder="MbarimiIPushimit"
                   defaultValue={this.props.MbarimiIPushit}/>
                    </Form.Group>

             <Form.Group controlId="Arseyja">
                <Form.Label>Fillimi I Pushimit</Form.Label>
                <Form.Control type="text" name="Arseyja" required 
                defaultValue={this.props.Arseyja}
                placeholder="Arseyja"/>
             </Form.Group>

             <Form.Group controlId="Stafi">
                        <Form.Label>Stafi</Form.Label>
                        <Form.Control as="select">
                        {this.state.sta.map(sta=>
                            <option key={sta.StafiID}>{sta.EmriMbiemri}</option>)}
                        </Form.Control>
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