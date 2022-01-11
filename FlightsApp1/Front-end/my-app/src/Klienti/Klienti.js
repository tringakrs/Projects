import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {ShtoKlientet} from './ShtoKlientet';
import {EditKlientet} from './EditKlientet';
import { Grid,Paper, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";




export class Klienti extends Component{

    constructor(props){
        super(props);
        this.state={Klienti: [], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Klienti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Klienti:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteKlienti(KlientiID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Klienti/'+KlientiID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const { Klienti, KlientiID, EmriMbiemri, Ditelindja, Gjinia, Adresa, NrPersonal, Shtetesia, KodiPostal, NrTelefonit, Email}=this.state;
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <Paper  elevation={5}>

            <Grid container ="nowrap"  >
            <Grid item xs={2}/>
               <Grid   direction="column" item xs={2}>
   
               <ShtoKlientet/>
            </Grid>
            <Grid item xs={4}>
                    
            <div>

<Table className="mt-4" striped bordered hover size="sm">
<thead>
            <tr>
              <th>KlientiID</th>
              <th>EmriMbiemri</th>
              <th>Ditelindja</th>
              <th>Gjinia</th>
              <th>Adresa</th>
              <th>NrPersonal</th>
              <th>Shtetesia</th>
              <th>KodiPostal</th>
              <th>NrTelefonit</th>
              <th>Email</th>
              <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>
            </tr>
          </thead>
    <tbody>
        {Klienti.map(k=>
            <tr Klienti={k.KlientiID}>
                <td>{k.KlientiID}</td>
                <td>{k.EmriMbiemri}</td>
                <td>{k.Ditelindja}</td>
                <td>{k.Gjinia}</td>
                <td>{k.Adresa}</td>
                <td>{k.NrPersonal}</td>
                <td>{k.Shtetesia}</td>
                <td>{k.KodiPostal}</td>
                <td>{k.NrTelefonit}</td>
                <td>{k.Email}</td>
                <td>
                <ButtonToolbar>
                    <Button className="mr-2" variant="info"
                     onClick={()=>this.setState({editModalShow:true,
                      KlientiID: k.KlientiID,
                      EmriMbiemri: k.EmriMbiemri,
                      Ditelindja: k.Ditelindja,
                      Gjinia: k.Gjinia,
                      Adresa: k.Adresa,
                      NrPersonal: k.NrPersonal,
                      Shtetesia: k.Shtetesia,
                      KodiPostal: k.KodiPostal,
                      NrTelefonit: k.NrTelefonit,
                      Email: k.Email,
                     })}>
                     Perditeso
                     </Button>

                        <Button className="mr-2" variant="danger"
                        onClick={() => this.deleteKlienti(k.KlientiID)}>
                        Delete
                        </Button>

                        <EditKlientet show={this.state.editModalShow}
                        onHide={editModalClose}
                        KlientiID={KlientiID}
                        EmriMbiemri={EmriMbiemri}
                        Ditelindja={Ditelindja}
                        Gjinia={Gjinia}
                        Adresa={Adresa}
                        NrPersonal={NrPersonal}
                        Shtetesia={Shtetesia}
                        KodiPostal={KodiPostal}
                        NrTelefonit={NrTelefonit}
                        Email={Email}
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