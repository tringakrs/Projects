import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { Grid,Paper, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";


export class ShtoKafshet extends Component {
  constructor(props) {
    super(props);
    this.state={kli:[]}; 
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    fetch(process.env.REACT_APP_API+'Klienti')
  .then(response=>response.json())
  .then((data) => {
      this.setState({kli:data});
  });
}

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Kafshet", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Viti: event.target.Viti.value,
        Lloji: event.target.Lloji.value,
        Dimensioni: event.target.Dimensioni.value,
        Skadimi: event.target.Skadimi.value,
        Klienti: event.target.Klienti.value,

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
        <h2 class="ShtoText">Shto Kafshet</h2>

        <Row>
          <Col sm={11}>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="Klienti">
                        <Form.Label>Klienti</Form.Label>
                        <Form.Control as="select">
                        {this.state.kli.map(kli=>
                            <option key={kli.KlinetiID}>{kli.EmriMbiemri}</option>)}
                        </Form.Control>
                    </Form.Group>
              <Form.Group controlId="Viti">
                <Form.Control
                  type="date"
                  name="Viti"
                  required
                  placeholder="Viti"
                />
              </Form.Group>
              <Form.Group controlId="Lloji">
                <Form.Control
                  type="text"
                  name="Lloji"
                  required
                  placeholder="Lloji"
                />
              </Form.Group>
              <Form.Group controlId="Dimensioni">
                <Form.Control
                  type="text"
                  name="Dimensioni"
                  required
                  placeholder="Dimensioni"
                />
              </Form.Group>
              <Form.Group controlId="Skadimi">
                <Form.Control
                  type="date"
                  name="Skadimi"
                  required
                  placeholder="Skadimi"
                />
              </Form.Group>

              <Form.Group>
                <Button variant="primary" type="submit">
                  Shto Kafshet
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
