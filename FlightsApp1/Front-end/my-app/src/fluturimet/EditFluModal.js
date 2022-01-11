import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class EditFluModal extends Component {
  constructor(props){
    super(props);
    this.state={kom:[],sta:[],vz:[],qyt:[]}; 

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
      fetch(process.env.REACT_APP_API+'Qyteti')
      .then(response=>response.json())
      .then(data=>{
          this.setState({qyt:data});
      })
      fetch(process.env.REACT_APP_API+'Qyteti')
      .then(response=>response.json())
      .then(data=>{
          this.setState({vz:data});
      });

  });
}

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Fluturimet", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FluturimetID: event.target.FluturimetID.value,
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
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Perditeso Fluturimet
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="FluturimetID">
                    <Form.Label>FluturimetID</Form.Label>
                    <Form.Control
                      type="text"
                      name="FluturimetID"
                      required
                      disabled
                      defaultValue={this.props.FluturimetID}
                      placeholder="FluturimetID"
                    />
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

                  <Form.Group controlId="VendiNisjes">
                        <Form.Label>VendiNisjes</Form.Label>
                        <Form.Control as="select" name="VendiNisjes"
                         required 
                    defaultValue={this.props.VendiNisjes}
                        placeholder="VendiNisjes" >
                        {this.state.qyt.map(qyt=>
                            <option key={qyt.ISO}>{qyt.Emri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="VendiZbritjes">
                        <Form.Label>VendiZbritjes</Form.Label>
                        <Form.Control as="select" name="VendiZbritjes"
                         required 
                    defaultValue={this.props.VendiZbritjes}
                        placeholder="VendiZbritjes" >
                        {this.state.vz.map(vz=>
                            <option key={vz.ISO}>{vz.Emri}</option>)}
                        </Form.Control>
                    </Form.Group>

                  <Form.Group controlId="DataNisjesOra">
                    <Form.Label>DataNisjesOra</Form.Label>
                    <Form.Control
                      type="text"
                      name="DataNisjesOra"
                      required
                      defaultValue={this.props.DataNisjesOra}
                      placeholder="DataNisjesOra"
                    />
                  </Form.Group>

                  <Form.Group controlId="Cmimiet">
                    <Form.Label>Cmimet</Form.Label>
                    <Form.Control
                      type="text"
                      name="Cmimiet"
                      required
                      defaultValue={this.props.Cmimiet}
                      placeholder="Cmimiet"
                    />
                  </Form.Group>
                  <Form.Group>

                    <Button variant="primary" type="submit">
                      Perditeso Fluturimet
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
