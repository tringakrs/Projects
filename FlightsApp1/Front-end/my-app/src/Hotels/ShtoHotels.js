import React,{Component} from 'react';
import {Button, Row, Col, Form,Image} from 'react-bootstrap';
import { Grid } from "@material-ui/core";


export class ShtoHotels extends Component{
   constructor(props) {
      super(props);
      this.state={are:[],kl:[]}; 
      this.handleSubmit = this.handleSubmit.bind(this);
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
             method:'POST',
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
              Kompanina:event.target.Kompanina.value


              
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

<Grid   alignItems="center" item xs={6}>
                      <h2 class="ShtoText">Shto Hotelin</h2>
       <Row>
         <Col sm={11}>
           <Form onSubmit={this.handleSubmit}>
           <Form.Group controlId="Emri">              
                <Form.Control type="text" name="Emri" required placeholder="Emri"/>
             </Form.Group>

            <Form.Group controlId="Dhoma">               
               <Form.Control type="text" name="Dhoma" required placeholder="Dhoma"/>
            </Form.Group>

            <Form.Group controlId="DataEArdhjes">
                <Form.Label>DataEArdhjes</Form.Label>
                <Form.Control 
                type="date"
                name="DataEArdhjes"
                required
                placeholder="DataEArdhjes"
                />
                 </Form.Group>

                 <Form.Group controlId="DataELargimit">
                <Form.Label>DataELargimit</Form.Label>
                <Form.Control 
                type="date"
                name="DataELargimit"
                required
                placeholder="DataELargimit"
                />
                 </Form.Group>
   
            <Form.Group controlId="NrPersonave">
                        <Form.Label>NrPersonave</Form.Label>                     
                        <Form.Control as="select"   type="text"placeholder="NrPersonave">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>    
                                <option value="4">4</option>    
                                 <option value="5">5</option>                       
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Oferta">
                        <Form.Label>Oferta</Form.Label>                     
                        <Form.Control as="select"   type="text"placeholder="Oferta">
                                <option value="Inclusive">Inclusive</option>
                                <option value="All Inclusive">All Inclusive</option>
                                <option value="Ultra All Inclusive">Ultra All Inclusive</option>                       
                        </Form.Control>
                    </Form.Group>
            
           

            <Form.Group controlId="Cmimi">         
               <Form.Control type="text" name="Cmimi" required placeholder="Cmimi"/>
            </Form.Group>

            <Form.Group controlId="Kompanina">
                        <Form.Label>Kompania</Form.Label>
                        <Form.Control as="select">
                        {this.state.are.map(are=>
                            <option key={are.KompaniaID}>{are.KompaniaEmri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Klienti">
                        <Form.Label>Klienti</Form.Label>
                        <Form.Control as="select">
                        {this.state.kl.map(kl=>
                            <option key={kl.KlientiID}>{kl.EmriMbiemri}</option>)}
                        </Form.Control>
                    </Form.Group>

             <Form.Group>
               <Button variant="primary" type="submit">
                 Shto Hotels
               </Button>
             </Form.Group>
           </Form>
         </Col>
        
        
       </Row>
       </Grid>
            
      )
   }
}