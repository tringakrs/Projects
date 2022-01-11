import React,{Component} from 'react';
import {Button, Row, Col, Form,Image} from 'react-bootstrap';
import { Grid } from "@material-ui/core";


export class ShtoKompani extends Component{
   constructor(props) {
      super(props);
      this.state={qyt:[],shte:[]}; 
      this.handleSubmit = this.handleSubmit.bind(this);
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
             method:'POST',
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
                      <h2 class="ShtoText">Shto Kompani</h2>
       <Row>
         <Col sm={11}>
           <Form onSubmit={this.handleSubmit}>
           <Form.Group controlId="KompaniaEmri">              
                <Form.Control type="text" name="KompaniaEmri" required placeholder="KompaniaEmri"/>
             </Form.Group>

            <Form.Group controlId="NrTelefonit">               
               <Form.Control type="text" name="NrTelefonit" required placeholder="NrTelefonit"/>
            </Form.Group>

            <Form.Group controlId="Email">              
               <Form.Control type="text" name="Email" required placeholder="Email"/>
            </Form.Group>

            <Form.Group controlId="Adresa">         
               <Form.Control type="text" name="Adresa" required placeholder="Adresa"/>
            </Form.Group>

            <Form.Group controlId="Qyteti">
                        <Form.Label>Qyteti</Form.Label>
                        <Form.Control as="select">
                        {this.state.qyt.map(qyt=>
                            <option key={qyt.ISO}>{qyt.Emri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Shteti">
                        <Form.Label>Shteti</Form.Label>
                        <Form.Control as="select">
                        {this.state.shte.map(shte=>
                            <option key={shte.ShtetiCode}>{shte.ShtetiEmri}</option>)}
                        </Form.Control>
                    </Form.Group>

            <Form.Group controlId="KodiPostal">              
               <Form.Control type="text" name="KodiPostal" required placeholder="KodiPostal"/>
            </Form.Group>

             <Form.Group>
               <Button variant="primary" type="submit">
                 Shto Kompani
               </Button>
             </Form.Group>
           </Form>
         </Col>
        
        
       </Row>
       </Grid>
            
      )
   }
}