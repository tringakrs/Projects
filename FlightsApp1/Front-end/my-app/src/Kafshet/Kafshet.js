import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { ShtoKafshet } from "./ShtoKafshet";
import { EditKafshet } from "./EditKafshet";
import { Grid,Paper, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";


export class Kafshet extends Component {
  constructor(props) {
    super(props);
    this.state = { kafs: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Kafshet")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ kafs: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteKafshet(id) {
    if (window.confirm("Are you sure?")) {
      fetch(process.env.REACT_APP_API + "Kafshet/" + id, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const { kafs, id, Viti, Lloji, Dimensioni, Skadimi } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <Paper elevation={5}>
        <Grid container spacing={4}>
          <Grid item xs={2} />
          <Grid direction="column" item xs={3}>
            <ShtoKafshet />
          </Grid>
          <Grid item xs={6}>
            <div>
              <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Lloji</th>
                    <th>Dimensioni</th>
                    <th>Viti</th>
                    <th>Skadimi</th>
                    <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>
                  </tr>
                </thead>
                <tbody>
                  {kafs.map((kaf) => (
                    <tr key={kaf.id}>
                      <td>{kaf.id}</td>
                      <td>{kaf.Lloji}</td>
                      <td>{kaf.Dimensioni}</td>
                      <td>{kaf.Viti}</td>
                      <td>{kaf.Skadimi}</td>
                      <td>
                        <ButtonToolbar>
                          <Button
                            className="mr-2"
                            variant="info"
                            onClick={() =>
                              this.setState({
                                editModalShow: true,
                                id: kaf.id,
                                Viti: kaf.Viti,
                                Lloji: kaf.Lloji,
                                Dimensioni: kaf.Dimensioni,
                                Skadimi: kaf.Skadimi
                              })
                            }
                          >
                            Perditeso
                          </Button>

                          <Button
                            className="mr-2"
                            variant="danger"
                            onClick={() => this.deleteKafshet(kaf.id)}
                          >
                            Delete
                          </Button>

                          <EditKafshet
                            show={this.state.editModalShow}
                            onHide={editModalClose}
                            id={id}
                            Viti={Viti}
                            Lloji={Lloji}
                            Dimensioni={Dimensioni}
                            Skadimi={Skadimi}
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
