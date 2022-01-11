import React,{Component} from 'react';
import {Button, Row, Col, Form} from 'react-bootstrap';
import { Grid } from "@material-ui/core";

export class ShtoDelivery extends Component{
    constructor(props) {
        super(props);
        this.state={kli:[],aer:[],kom:[]}; 
        this.handleSubmit = this.handleSubmit.bind(this);
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
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
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
           
          <Grid   alignItems="center" item xs={9}>
                      <h2>Shto Delivery</h2>
       <Row>
         <Col sm={7}>
           <Form onSubmit={this.handleSubmit}>
           <Form.Group controlId="Klienti">
                        <Form.Label>Klienti</Form.Label>
                        <Form.Control as="select">
                        {this.state.kli.map(kli=>
                            <option key={kli.KlientiID}>{kli.EmriMbiemri}</option>)}
                        </Form.Control>
                    </Form.Group>
                 
              
                    <Form.Group controlId="Kompania">
                        <Form.Label>Kompania</Form.Label>
                        <Form.Control as="select">
                        {this.state.kom.map(kom=>
                            <option key={kom.KompaniaID}>{kom.KompaniaEmri}</option>)}
                        </Form.Control>
                    </Form.Group>

         
                    <Form.Group controlId="Aeroporti">
                        <Form.Label>Klienti</Form.Label>
                        <Form.Control as="select">
                        {this.state.aer.map(aer=>
                            <option key={aer.AeroportiID}>{aer.EmriAeroprtit}</option>)}
                        </Form.Control>
                    </Form.Group>

            <Form.Group controlId="Cmimi">
               
               <Form.Control type="money" name="Cmimi" required placeholder="Cmimi"/>
            </Form.Group>

             <Form.Group controlId="KohaENisjes">
                <Form.Label>KohaENisjes</Form.Label>
                <Form.Control 
                type="date"
                name="KohaENisjes"
                required
                placeholder="KohaENisjes"
                />
                 </Form.Group>

             <Form.Group controlId="KohaEArritjes">
                <Form.Label>KohaEArritjes</Form.Label>
                <Form.Control 
                type="date"
                name="KohaEArritjes"
                required
                placeholder="KohaEArritjes"
                />
                 </Form.Group>

              <Form.Group>
                <Button variant="primary" type="submit">
                  Shto Delivery
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
