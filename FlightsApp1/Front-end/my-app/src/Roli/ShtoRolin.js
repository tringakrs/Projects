import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { Grid,Paper} from "@material-ui/core";

export class ShtoRolin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("handleSubmit");
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API+"Roli", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        RoliEmri: event.target.RoliEmri.value,
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
      <Grid   alignItems="center" item xs={6}>
                      <h2 class="ShtoText">Shto Rolin</h2>
            <Row>
              <Col sm={10}>
                
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="RoliEmri">
                    <Form.Label>Roli</Form.Label>
                    <Form.Control
                      type="text"
                      name="RoliEmri"
                      required
                      placeholder="RoliEmri"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Add Rolin
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            </Grid>
      
    );
  }
}
