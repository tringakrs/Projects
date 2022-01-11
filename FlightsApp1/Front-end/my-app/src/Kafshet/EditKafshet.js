import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class EditKafshet extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Kafshet", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: event.target.id.value,
        Viti: event.target.Viti.value,
        Lloji: event.target.Lloji.value,
        Dimensioni: event.target.Dimensioni.value,
        Skadimi: event.target.Skadimi.value
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
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Perditeso Te Dhenat Bankare
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="id">
                    <Form.Label>ID e Kafshes</Form.Label>
                    <Form.Control
                      type="text"
                      name="id"
                      required
                      disabled
                      defaultValue={this.props.id}
                      placeholder="id"
                    />
                  </Form.Group>

                  <Form.Group controlId="Viti">
                    <Form.Label>Viti i Lindjes</Form.Label>
                    <Form.Control
                      type="date"
                      name="Viti"
                      required
                      defaultValue={this.props.Viti}
                      placeholder="Viti"
                    />
                  </Form.Group>

                  <Form.Group controlId="Lloji">
                    <Form.Label>Lloji</Form.Label>
                    <Form.Control
                      type="text"
                      name="Lloji"
                      required
                      defaultValue={this.props.Lloji}
                      placeholder="Lloji"
                    />
                  </Form.Group>

                  <Form.Group controlId="Dimensioni">
                    <Form.Label>Dimensioni</Form.Label>
                    <Form.Control
                      type="text"
                      name="Dimensioni"
                      required
                      defaultValue={this.props.Dimensioni}
                      placeholder="Dimensioni"
                    />
                  </Form.Group>

                  <Form.Group controlId="Skadimi">
                    <Form.Label>Skadimi</Form.Label>
                    <Form.Control
                      type="date"
                      name="Skadimi"
                      required
                      placeholder="Skadimi"
                      defaultValue={this.props.Skadimi}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Perditeso Te Dhenat e Kafshes
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
