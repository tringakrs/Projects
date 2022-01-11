import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Grid, Paper } from "@material-ui/core";
import { Button, ButtonToolbar } from 'react-bootstrap';
import { ShtoHotels } from './ShtoHotels';
import { EditHotels } from './EditHotels';


export class Hotels extends Component {

    constructor(props) {
        super(props);
        this.state = { Hotels: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Hotels')
            .then(response => response.json())
            .then(data => {
                this.setState({ Hotels: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteHotels(HoteliID) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'Hotels/' + HoteliID, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { Hotels,Emri, Dhoma, DataEArdhjes, DataELargimit, NrPersonave, Oferta, Cmimi,Klienti,Kompanina,HoteliID } = this.state;
        let editModalClose = () => this.setState({ editModalShow: false });
        return (

            <Paper elevation={5}>

                <Grid container spacing={12}>
                    <Grid item xs={2} />
                    <Grid direction="column" item xs={3}>

                        <ShtoHotels />
                    </Grid>

                    <Grid item xs={6}>

                        <div>
                        <Table className="mt-4" striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Emri</th>
                                        <th>Dhoma</th>
                                        <th>DataEArdhjes</th>
                                        <th>DataELargimit</th>
                                        <th>NrPersonave</th>
                                        <th>Oferta</th>
                                        <th>Cmimi</th>
                                        <th>Klienti</th>
                                        <th>Kompania</th>
                                        <th>HoteliID</th>
                                        <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Hotels.map(Kl => (
                                        <tr key={Kl.HoteliID}>
                                            <td>{Kl.Emri}</td>
                                            <td>{Kl.Dhoma}</td>
                                            <td>{Kl.DataEArdhjes}</td>
                                            <td>{Kl.DataELargimit}</td>
                                            <td>{Kl.NrPersonave}</td>
                                            <td>{Kl.Oferta}</td>
                                            <td>{Kl.Cmimi}</td>
                                            <td>{Kl.Klienti}</td>
                                            <td>{Kl.Kompanina}</td>
                                            <td>{Kl.HoteliID}</td>
                                            <td>
                                                <ButtonToolbar>
                                                    <Button className="mr-2" variant="info"
                                                        onClick={() => this.setState({
                                                            editModalShow: true,  
                                                            Emri: Kl.Emri,                                                         
                                                            Dhoma: Kl.Dhoma,
                                                            DataEArdhjes: Kl.DataEArdhjes,
                                                            DataELargimit: Kl.DataELargimit,
                                                            NrPersonave: Kl.NrPersonave,
                                                            Oferta: Kl.Oferta,
                                                            Cmimi: Kl.Cmimi,
                                                            Klienti: Kl.Klienti,
                                                            Kompanina: Kl.Kompanina,
                                                            HoteliID: Kl.HoteliID,
                                                        })}>
                                                        Perditeso
                                                    </Button>

                                                    <Button className="mr-2" variant="danger"
                                                        onClick={() => this.deleteHotels(Kl.HoteliID)}>
                                                        Delete
                                                    </Button>

                                                    <EditHotels show={this.state.editModalShow}
                                                        onHide={editModalClose}
                                                        Emri={Emri}
                                                        Dhoma={Dhoma}
                                                        DataEArdhjes={DataEArdhjes}
                                                        DataELargimit={DataELargimit}
                                                        NrPersonave={NrPersonave}
                                                        Oferta={Oferta}
                                                        Cmimi={Cmimi}
                                                        Klienti={Klienti}
                                                        Kompanina={Kompanina}
                                                        HoteliID={HoteliID}
                                                    />

                                                </ButtonToolbar>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </Table>

                        </div>
                    </Grid>

                </Grid>

            </Paper>
        )
    }
}