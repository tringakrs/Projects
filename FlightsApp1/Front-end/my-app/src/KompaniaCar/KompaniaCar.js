import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Grid, Paper } from "@material-ui/core";
import { Button, ButtonToolbar } from 'react-bootstrap';
import { ShtoKompaniaCar } from './ShtoKompaniaCar';
import { EditKompaniaCar } from './EditKompaniaCar';


export class KompaniaCar extends Component {

    constructor(props) {
        super(props);
        this.state = { KompaniaCar: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'KompaniaCar')
            .then(response => response.json())
            .then(data => {
                this.setState({ KompaniaCar: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteKompaniaCar(KompaniaCarID) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'KompaniaCar/' + KompaniaCarID, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { KompaniaCar ,KompaniaCarID,KompaniaEmri, NrTelefonit, Email, Adresa, Qyteti, Shteti, KodiPostal} = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (

            <Paper elevation={5}>

                <Grid container spacing={4}>
                    <Grid item xs={2} />
                    <Grid direction="column" item xs={4}>

                        <ShtoKompaniaCar />
                    </Grid>
                    <Grid item xs={6}>

                        <div>
                            <Table className="mt-4" striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>KompaniaCarID</th>
                                        <th>KompaniaEmri</th>
                                        <th>NrTelefonit</th>
                                        <th>Email</th>
                                        <th>Adresa</th>
                                        <th>Qyteti</th>
                                        <th>Shteti</th>
                                        <th>KodiPostal</th>
                                        <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {KompaniaCar.map(Kl =>
                                        <tr key={Kl.KompaniaCarID}>
                                            <td>{Kl.KompaniaCarID}</td>
                                            <td>{Kl.KompaniaEmri}</td>
                                            <td>{Kl.NrTelefonit}</td>
                                            <td>{Kl.Email}</td>
                                            <td>{Kl.Adresa}</td>
                                            <td>{Kl.Qyteti}</td>
                                            <td>{Kl.Shteti}</td>
                                            <td>{Kl.KodiPostal}</td>
                                            <td>
                                                <ButtonToolbar>
                                                    <Button className="mr-2" variant="info"
                                                        onClick={() => this.setState({
                                                            editModalShow: true,
                                                            KompaniaCarID: Kl.KompaniaCarID,
                                                            KompaniaEmri: Kl.KompaniaEmri,
                                                            NrTelefonit: Kl.NrTelefonit,
                                                            Email: Kl.Email,
                                                            Adresa: Kl.Adresa,
                                                            Qyteti: Kl.Qyteti,
                                                            Shteti: Kl.Shteti,
                                                            KodiPostal: Kl.KodiPostal,
                                                        })}>
                                                        Perditeso
                                                    </Button>

                                                    <Button className="mr-2" variant="danger"
                                                        onClick={() => this.deleteKompaniaCar(Kl.KompaniaCarID)}>
                                                        Delete
                                                    </Button>

                                                    <EditKompaniaCar show={this.state.editModalShow}
                                                        onHide={editModalClose}
                                                        KompaniaCarID={KompaniaCarID}
                                                        KompaniaEmri={KompaniaEmri}
                                                        NrTelefonit={NrTelefonit}
                                                        Email={Email}
                                                        Adresa={Adresa}
                                                        Qyteti={Qyteti}
                                                        Shteti={Shteti}
                                                        KodiPostal={KodiPostal}
                                                    />

                                                </ButtonToolbar>
                                            </td>
                                        </tr>)}
                                </tbody>
                            </Table>

                        </div>
                    </Grid>
                </Grid>

            </Paper>
        )
    }
}