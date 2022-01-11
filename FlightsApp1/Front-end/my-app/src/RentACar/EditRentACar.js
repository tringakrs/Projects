import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditRentACar extends Component{
    constructor(props){
        super(props);
        this.state={kli:[],kom:[],qyt:[]}; 
    
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch(process.env.REACT_APP_API+'Klienti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({kli:data});
        })
        fetch(process.env.REACT_APP_API+'Qyteti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({qyt:data});
        })
        fetch(process.env.REACT_APP_API+'KompaninaCar')
        .then(response=>response.json())
        .then(data=>{
            this.setState({kom:data});
        });
    }
    
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"RentACar",{
             method:'PUT',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
              Targat :event.target.Targat .value,
              Lloji :event.target.Lloji .value,
              Ngjyra :event.target.Ngjyra .value,
              Viti :event.target.Viti .value,
              Klienti :event.target.Klienti .value,
              KompaninaCar :event.target.KompaninaCar .value,
              PickUpLocation :event.target.PickUpLocation .value,
              PickUpDate :event.target.PickUpDate .value,
              ReturnDate :event.target.ReturnDate .value
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
            Perditeso Rent A Car
         </Modal.Title>
    </Modal.Header>
    <Modal.Body>
       <Row>
       <Col sm={9}>
           <Form onSubmit={this.handleSubmit}>
           <Form.Group controlId="Targat">
                <Form.Label>Targat</Form.Label>
                <Form.Control type="text" name="Targat" required 
                defaultValue={this.props.Targat}
                placeholder="Targat"/>
             </Form.Group>

                

             <Form.Group controlId="Lloji">
                        <Form.Label>Lloji</Form.Label>                     
                        <Form.Control as="select" type="text" name="Ngjyra" required 
                defaultValue={this.props.Ngjyra}
                placeholder="Ngjyra">
                                <option value="BMW">BMW</option>
                                <option value="Audi">Audi</option>
                                <option value="Chrysler">Chrysler</option>
                                <option value="Citroen">Citroen</option>
                                <option value="Mercedes">Mercedes</option>
                                </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Ngjyra">
                        <Form.Label>Ngjyra</Form.Label>                     
                        <Form.Control as="select" type="text" name="Ngjyra" required 
                defaultValue={this.props.Ngjyra}
                placeholder="Ngjyra">
                                <option value="Kuqe">Kuqe</option>
                                <option value="Zeze">Zeze</option>
                                <option value="Kaltert">Kaltert</option>   
                                </Form.Control>                    
                    </Form.Group>




             <Form.Group controlId="Viti">
                <Form.Label>Viti</Form.Label>
                <Form.Control type="date" name="Viti" required 
                defaultValue={this.props.Viti}
                placeholder="Viti"/>
             </Form.Group>
             <Form.Group controlId="PickUpLocation">
                        <Form.Label>Pick Up Location  </Form.Label>
                        <Form.Control as="select" defaultValue={this.props.PickUpLocation}>
                            
                        {this.state.qyt.map(qyt=>
                            <option key={qyt.ISO }>{qyt.Emri }</option>)}
                        </Form.Control>
                    </Form.Group>


             <Form.Group controlId="Klienti">
                        <Form.Label>Klienti</Form.Label>
                        <Form.Control as="select" name="Klienti"
                         required 
                    defaultValue={this.props.Klienti}
                        placeholder="Klienti" >
                        {this.state.kli.map(kli=>
                            <option key={kli.KlientiID}>{kli.EmriMbiemri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="KompaninaCar">
                        <Form.Label>Kompania Car</Form.Label>
                        <Form.Control as="select" name="KompaninaCar"
                         required 
                    defaultValue={this.props.KompaninaCar}
                        placeholder="Kompania Car" >
                        {this.state.kom.map(kom=>
                            <option key={kom.KompaninaCarID}>{kom.KompaniaEmri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="PickUpDate">
                <Form.Label>Pick Up Date </Form.Label>
                <Form.Control 
                defaultValue={this.props.PickUpDate}
                type="date"
                name="PickUpDate"
                required
                placeholder="PickUpDate"
                />
                 </Form.Group>

                 <Form.Group controlId="ReturnDate">
                <Form.Label>Return Date </Form.Label>
                <Form.Control 
                defaultValue={this.props.ReturnDate}
                type="date"
                name="ReturnDate "

                placeholder="ReturnDate "
                />
                 </Form.Group>
             

             <Form.Group>
               <Button variant="primary" type="submit">
                 Perditeso Rent A Car
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