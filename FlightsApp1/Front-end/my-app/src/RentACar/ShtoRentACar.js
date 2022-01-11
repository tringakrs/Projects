import React,{Component} from 'react';
import {Button, Row, Col, Form} from 'react-bootstrap';
import { Grid } from "@material-ui/core";

export class ShtoRentACar extends Component{
    constructor(props){
        super(props);
        this.state={qyt:[],kli:[],kom:[]}; 
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
      fetch(process.env.REACT_APP_API+'Qyteti')
      .then(response=>response.json())
      .then(data=>{
          this.setState({qyt:data});
      })
      fetch(process.env.REACT_APP_API+'Klienti')
      .then(response=>response.json())
      .then(data=>{
          this.setState({kli:data});
      })
      fetch(process.env.REACT_APP_API+'KompaniaCar')
    .then(response=>response.json())
    .then((data) => {
        this.setState({kom:data});
    });
  }
  
  
  
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"RentACar",{
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
              Targat:event.target.Targat.value,
              Lloji:event.target.Lloji.value,
              Ngjyra:event.target.Ngjyra.value,
              Viti:event.target.Viti.value,
              Klienti:event.target.Klienti.value,
              KompaninaCar:event.target.KompaninaCar.value,
              PickUpLocation:event.target.PickUpLocation.value,
              PickUpDate:event.target.PickUpDate.value,
              ReturnDate:event.target.ReturnDate.value
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
           
          <Grid   alignItems="center" item xs={12}>
                      <h2 class="ShtoText">Shto RentACar</h2>
       <Row>
         <Col sm={7}>
           <Form onSubmit={this.handleSubmit}>
               <Form.Group controlId="Targat">
               
                <Form.Control type="text" name="Targat" required placeholder="Targat"/>
             </Form.Group>
          
             <Form.Group controlId="Lloji">
                        <Form.Label>Lloji</Form.Label>                     
                        <Form.Control as="select"   type="text">
                                <option value="BMW">BMW</option>
                                <option value="Audi">Audi</option>
                                <option value="Chrysler">Chrysler</option>
                                <option value="Citroen">Citroen</option>
                                <option value="Mercedes">Mercedes</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Ngjyra">
                        <Form.Label>Ngjyra</Form.Label>                     
                        <Form.Control as="select"   type="text">
                                <option value="Kuqe">Kuqe</option>
                                <option value="Zeze">Zeze</option>
                                <option value="Kaltert">Kaltert</option>                       
                        </Form.Control>
                    </Form.Group>

             <Form.Group controlId="Viti">
                <Form.Label>Viti</Form.Label>
                <Form.Control 
                type="date"
                name="Viti"
                required
                placeholder="Viti"
                />
                 </Form.Group>

             
            
             <Form.Group controlId="PickUpLocation">
                        <Form.Label>Pick Up Location  </Form.Label>
                        <Form.Control as="select">
                        {this.state.qyt.map(qyt=>
                            <option key={qyt.ISO }>{qyt.Emri }</option>)}
                        </Form.Control>
                    </Form.Group>

             <Form.Group controlId="Klienti">
                        <Form.Label>Klienti </Form.Label>
                        <Form.Control as="select">
                        {this.state.kli.map(kli=>
                            <option key={kli.KlientiID}>{kli.EmriMbiemri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="KompaninaCar">
                        <Form.Label>KompaniaCar </Form.Label>
                        <Form.Control as="select">
                        {this.state.kom.map(kom=>
                            <option key={kom.KompaniaCarID}>{kom.KompaniaEmri }</option>)}
                        </Form.Control>
                    </Form.Group>


                   

             <Form.Group controlId="PickUpDate">
                <Form.Label>Pick Up Date </Form.Label>
                <Form.Control 
                type="date"
                name="PickUpDate"
                required
                placeholder="PickUpDate"
                />
                 </Form.Group>

                 <Form.Group controlId="ReturnDate">
                <Form.Label>Return Date </Form.Label>
                <Form.Control 
                type="date"
                name="ReturnDate "

                placeholder="ReturnDate "
                />
                 </Form.Group>



             <Form.Group>
               <Button variant="primary" type="submit">
                 Shto Rent A Car
               </Button>
             </Form.Group>
           </Form>
         </Col>
       </Row>      

       </Grid>
      )
   }
}