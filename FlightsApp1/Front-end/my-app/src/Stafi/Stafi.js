import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import { Grid, Paper } from "@material-ui/core";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {ShtoStafi} from './ShtoStafi';
import {EditStafi} from './EditStafi';


export class Stafi extends Component{

    constructor(props){
        super(props);
        this.state={Stafi:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Stafi')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Stafi:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteStafi(StafiID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Stafi/'+StafiID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {Stafi,StafiID,EmriMbiemri,Ditelindja,Gjinia,NrPersonal,Shtetesia,KodiPostal,NrTelefonit, Roli,Kompania,FillimiIPunes,MbarimiIPunes}=this.state;
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <Paper elevation={5}>

            <Grid container spacing={3}>
                <Grid item xs={2} />
                <Grid direction="column" item xs={2}>

                    <ShtoStafi />
                </Grid>
                <Grid item xs={6}>


                <div>
                <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                        <tr>
                        <th>Emri Mbiemri</th>
                        <th>Ditelindja</th>
                        <th>Gjinia</th>      
                        <th>NrTelefonit</th>    
                        <th>Numri Personal</th>
                        <th>Roli</th>
                        <th>Kompania</th>
                        <th>Fillimi I Punes</th>
                        <th>Mbarimi I Punes</th>
                        <th>StafiID</th>
                        <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Stafi.map(s=>
                            <tr key={s.StafiID}>
                                <td>{s.EmriMbiemri}</td>
                                <td>{s.Ditelindja}</td>
                                <td>{s.Gjinia}</td>
                                <td>{s.NrTelefonit}</td>
                                <td>{s.NrPersonal}</td>
                                <td>{s.Roli}</td>
                                <td>{s.Kompania}</td>
                                <td>{s.FillimiIPunes}</td>
                                <td>{s.MbarimiIPunes}</td>                                       
                                <td>{s.StafiID}</td>

                                <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info"
                                     onClick={()=>this.setState({editModalShow:true,
                                        StafiID: s.StafiID,
                                        EmriMbiemri:s.EmriMbiemri,
                                        Ditelindja:s.Ditelindja,
                                        Gjinia:s.Gjinia,
                                        NrPersonal:s.NrPersonal,
                                        Shtetesia:s.Shtetesia,
                                        KodiPostal:s.KodiPostal,
                                        NrTelefonit:s.NrTelefonit,
                                        Roli:s.Roli,
                                        Kompania:s.Kompania,
                                        FillimiIPunes:s.FillimiIPunes,
                                        MbarimiIPunes:s.MbarimiIPunes,
                                     })}>
                                     Perditeso
                                     </Button>

                                        <Button className="mr-2" variant="danger"
                                        onClick={()=>this.deleteStafi(s.StafiID)}>
                                        Delete
                                        </Button>

                                        <EditStafi show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        StafiID={StafiID}
                                        EmriMbiemri={EmriMbiemri}
                                        Ditelindja={Ditelindja}
                                        Gjinia={Gjinia}
                                        NrPersonal={NrPersonal}
                                        Shtetesia={Shtetesia}
                                        KodiPostal={KodiPostal}
                                        NrTelefonit={NrTelefonit}
                                        Roli={Roli}
                                        Kompania={Kompania}                                                                                                                     
                                        FillimiIPunes={FillimiIPunes}
                                        MbarimiIPunes={MbarimiIPunes}
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