import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Grid, Paper } from "@material-ui/core";
import { ShtoRolin } from "./ShtoRolin";
import { EditRoli } from "./EditRoli";

export class Roli extends Component {
  constructor(props) {
    super(props);
    this.state = { rols: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API+"Roli")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ rols: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }

  deleteRoli(rid) {
    if (window.confirm("Are you sure?")) {
      fetch(process.env.REACT_APP_API+"Roli/" + rid, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const { rols, rid, rem } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <Paper elevation={5}>

                <Grid container spacing={4}>
                    <Grid item xs={2} />
                    <Grid direction="column" item xs={3}>

                        <ShtoRolin />
                    </Grid>
                    <Grid item xs={6}>

      <div>
      <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Roli ID</th>
              <th>Roli Emri</th>
              <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>

            </tr>
          </thead>
          <tbody>
            {rols.map((k) => (
              <tr key={k.RoliID}>
                <td>{k.RoliID}</td>
                <td>{k.RoliEmri}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          rid: k.RoliID,
                          rem: k.RoliEmri,
                        })
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      className="mr-2"
                      variant="danger"
                      onClick={() => this.deleteRoli(k.RoliID)}
                    >
                      Delete
                    </Button>
                  </ButtonToolbar>

                  <EditRoli
                    show={this.state.editModalShow}
                    onHide={editModalClose}
                    rid={rid}
                    rem={rem}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        
      </div>
      </Grid>
                </Grid>

            </Paper>
    );
  }
}
