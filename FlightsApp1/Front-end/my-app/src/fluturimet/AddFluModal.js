import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import {Grid,Paper} from "@material-ui/core";


export class AddFluModal extends Component {
  constructor(props) {
    super(props);
    this.state={sta:[],qyt:[],kom:[]}; 
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    fetch(process.env.REACT_APP_API+'Stafi')
    .then(response=>response.json())
    .then(data=>{
        this.setState({sta:data});
    })
    fetch(process.env.REACT_APP_API+'Qyteti')
    .then(response=>response.json())
    .then(data=>{
        this.setState({qyt:data});
    })
    fetch(process.env.REACT_APP_API+'Kompania')
  .then(response=>response.json())
  .then((data) => {
      this.setState({kom:data});
  });
}

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Fluturimet", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Stafi: event.target.Stafi.value,
        Kompania: event.target.Kompania.value,
        VendiNisjes: event.target.VendiNisjes.value,
        VendiZbritjes: event.target.VendiZbritjes.value,
        DataNisjesOra: event.target.DataNisjesOra.value,
        Cmimiet: event.target.Cmimiet.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    return (
      <Grid alignItems="center" item xs={6}>
        <h2 class="ShtoText">Shto Fluturimet</h2>

        <Row>
          <Col sm={12}>
            <Form onSubmit={this.handleSubmit}>
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

         
                <Form.Group controlId="VendiNisjes">
                        <Form.Label>VendiNisjes</Form.Label>
                        <Form.Control as="select">
                        {this.state.qyt.map(qyt=>
                            <option key={qyt.ISO}>{qyt.Emri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="VendiZbritjes">
                        <Form.Label>VendiZbritjes</Form.Label>
                        <Form.Control as="select">
                        {this.state.qyt.map(qyt=>
                            <option key={qyt.ISO}>{qyt.Emri}</option>)}
                        </Form.Control>
                    </Form.Group>
              <Form.Group controlId="DataNisjesOra">
                <Form.Label>Data e Nisjes dhe Ora</Form.Label>
                <Form.Control
                  type="date"
                  name="DataNisjesOra"
                  required
                  placeholder="DataNisjesOra"
                />
              </Form.Group>
              <Form.Group controlId="Cmimiet">
                <Form.Label>Cmimet</Form.Label>
                <Form.Control
                  type="text"
                  name="Cmimiet"
                  required
                  placeholder="Cmimet"
                />
              </Form.Group>
              <Form.Group>
                <Button variant="primary" type="submit">
                  Shto Fluturimet
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
