import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Grid, Paper } from "@material-ui/core";
import { Button, ButtonToolbar } from 'react-bootstrap';
import { ShtoKompani } from './ShtoKompani';
import { EditKompania } from './EditKompania';


export class Kompania extends Component {

    constructor(props) {
        super(props);
        this.state = { Kompania: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Kompania')
            .then(response => response.json())
            .then(data => {
                this.setState({ Kompania: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteKompania(KompaniaID) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'Kompania/' + KompaniaID, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { Kompania,KompaniaEmri, NrTelefonit, Email, Adresa, Qyteti, Shteti, KodiPostal, KompaniaID } = this.state;
        let editModalClose = () => this.setState({ editModalShow: false });
        return (

            <Paper elevation={5}>

                <Grid container spacing={12}>
                    <Grid item xs={2} />
                    <Grid direction="column" item xs={3}>

                        <ShtoKompani />
                    </Grid>

                    <Grid item xs={6}>

                        <div>
                        <Table className="mt-4" striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>KompaniaEmri</th>
                                        <th>NrTelefonit</th>
                                        <th>Email</th>
                                        <th>Adresa</th>
                                        <th>Qyteti</th>
                                        <th>Shteti</th>
                                        <th>KodiPostal</th>
                                        <th>KompaniaID</th>
                                        <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Kompania.map(Kl => (
                                        <tr key={Kl.KompaniaID}>
                                            <td>{Kl.KompaniaEmri}</td>
                                            <td>{Kl.NrTelefonit}</td>
                                            <td>{Kl.Email}</td>
                                            <td>{Kl.Adresa}</td>
                                            <td>{Kl.Qyteti}</td>
                                            <td>{Kl.Shteti}</td>
                                            <td>{Kl.KodiPostal}</td>
                                            <td>{Kl.KompaniaID}</td>
                                            <td>
                                                <ButtonToolbar>
                                                    <Button className="mr-2" variant="info"
                                                        onClick={() => this.setState({
                                                            editModalShow: true,  
                                                            KompaniaEmri: Kl.KompaniaEmri,                                                         
                                                            NrTelefonit: Kl.NrTelefonit,
                                                            Email: Kl.Email,
                                                            Adresa: Kl.Adresa,
                                                            Qyteti: Kl.Qyteti,
                                                            Shteti: Kl.Shteti,
                                                            KodiPostal: Kl.KodiPostal,
                                                            KompaniaID: Kl.KompaniaID,
                                                        })}>
                                                        Perditeso
                                                    </Button>

                                                    <Button className="mr-2" variant="danger"
                                                        onClick={() => this.deleteKompania(Kl.KompaniaID)}>
                                                        Delete
                                                    </Button>

                                                    <EditKompania show={this.state.editModalShow}
                                                        onHide={editModalClose}
                                                        KompaniaEmri={KompaniaEmri}
                                                        NrTelefonit={NrTelefonit}
                                                        Email={Email}
                                                        Adresa={Adresa}
                                                        Qyteti={Qyteti}
                                                        Shteti={Shteti}
                                                        KodiPostal={KodiPostal}
                                                        KompaniaID={KompaniaID}
                                                    />

                                                </ButtonToolbar>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </Table>

                        </div>
                    </Grid>
                    <Grid item xs={1} />

                </Grid>

            </Paper>
        )
    }
}