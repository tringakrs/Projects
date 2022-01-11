import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { ShtoPagesat } from "./ShtoPagesat";
import { EditPagesat } from "./EditPagesat";
import {
  Grid,
  Paper,
  TextField,
  withStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

export class Pagesat extends Component {
  constructor(props) {
    super(props);
    this.state = { pags: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Pagesat")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pags: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteQyteti(id) {
    if (window.confirm("Are you sure?")) {
      fetch(process.env.REACT_APP_API + "Pagesat/" + id, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const { pags, Booking, id } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <Paper elevation={5}>
        <Grid container spacing={4}>
          <Grid item xs={2} />
          <Grid direction="column" item xs={4}>
            <ShtoPagesat />
          </Grid>
          <Grid item xs={6}>
            <div>
              <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Booking</th>
                    <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>

                  </tr>
                </thead>
                <tbody>
                  {pags.map((pag) => (
                    <tr key={pag.id}>
                      <td>{pag.id}</td>
                      <td>{pag.Booking}</td>
                      <td>
                        <ButtonToolbar>
                          <Button
                            className="mr-2"
                            variant="info"
                            onClick={() =>
                              this.setState({
                                editModalShow: true,
                                Booking: pag.Booking,
                                id: pag.id,
                              })
                            }
                          >
                            Perditeso
                          </Button>

                          <Button className="mr-2"  variant="danger"
                            onClick={() => this.deletePagesat(pag.id)}
                          >
                            Delete
                          </Button>

                          <EditPagesat
                            show={this.state.editModalShow}
                            onHide={editModalClose}
                            Booking={Booking}
                            id={id}
                          />
                        </ButtonToolbar>
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
