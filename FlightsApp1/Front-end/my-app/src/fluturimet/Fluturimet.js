import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddFluModal } from "./AddFluModal";
import { EditFluModal } from "./EditFluModal";
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

export class Fluturimet extends Component {
  constructor(props) {
    super(props);
    this.state = { flus: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Fluturimet")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ flus: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteFluturimet(FluturimetID) {
    if (window.confirm("Are you sure?")) {
      fetch(process.env.REACT_APP_API + "Fluturimet/" + FluturimetID, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const { flus, FluturimetID, Stafi, Kompania, VendiNisjes, VendiZbritjes, DataNisjesOra, Cmimiet} = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <Paper elevation={5}>
        <Grid container spacing={4}>
          <Grid item xs={2} />
          <Grid direction="column" item xs={3}>
            <AddFluModal />
          </Grid>
          <Grid item xs={6}>
            <div>
              <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>FluturimetID</th>
                    <th>Stafi</th>
                    <th>Kompania</th>
                    <th>VendiNisjes</th>
                    <th>VendiZbritjes</th>
                    <th>DataNisjesOra</th>
                    <th>Cmimiet</th>
                    <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>


                  </tr>
                </thead>
                <tbody>
                  {flus.map((flu) => (
                    <tr key={flu.FluturimetID}>
                      <td>{flu.FluturimetID}</td>
                      <td>{flu.Stafi}</td>
                      <td>{flu.Kompania}</td>
                      <td>{flu.VendiNisjes}</td>
                      <td>{flu.VendiZbritjes}</td>
                      <td>{flu.DataNisjesOra}</td>
                      <td>{flu.Cmimiet}</td>
                      <td>
                        <ButtonToolbar>
                          <Button
                            className="mr-2"
                            variant="info"
                            onClick={() =>
                              this.setState({
                                editModalShow: true,
                                FluturimetID: flu.FluturimetID,
                                Stafi: flu.Stafi,
                                Kompania: flu.Kompania,
                                VendiNisjes: flu.VendiNisjes,
                                VendiZbritjes: flu.VendiZbritjes,
                                DataNisjesOra: flu.DataNisjesOra,
                                Cmimiet: flu.Cmimiet,
                              })
                            }
                          >
                            Perditeso
                          </Button>

                          <Button
                            className="mr-2"
                            variant="danger"
                            onClick={() => this.deleteFluturimet(flu.FluturimetID)}
                          >
                            Delete
                          </Button>

                          <EditFluModal
                            show={this.state.editModalShow}
                            onHide={editModalClose}
                            FluturimetID={FluturimetID}
                            Stafi={Stafi}
                            Kompania={Kompania}
                            VendiNisjes={VendiNisjes}
                            VendiZbritjes={VendiZbritjes}
                            DataNisjesOra={DataNisjesOra}
                            Cmimiet={Cmimiet}
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
