import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import { Grid, Paper } from "@material-ui/core";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {ShtoPushimiPerPunetore} from './ShtoPushimiPerPunetore';
import {EditPushimiPerPunetore} from './EditPushimiPerPunetore';


export class PushimiPerPunetore extends Component{

    constructor(props){
        super(props);
        this.state={PushimiPerPunetore:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'PushimiPerPunetore')
        .then(response=>response.json())
        .then(data=>{
            this.setState({PushimiPerPunetore:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deletePushimiPerPunetore(PPID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'PushimiPerPunetore/'+PPID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {PushimiPerPunetore,PPID,FillimiIPushimit,MbarimiIPushit,Arseyja,Stafi,Kompania}=this.state;
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <Paper elevation={5}>

            <Grid container spacing={5}>
                <Grid item xs={2} />
                <Grid direction="column" item xs={4}>

                    <ShtoPushimiPerPunetore />
                </Grid>
                <Grid item xs={6}>


                <div>
                <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                        <tr>
                         <th>PPID</th>   
                        <th>Fillimi I Pushimit</th>
                        <th>Mbarimi I Pushimit</th>
                        <th>Arseyja</th>
                        <th>Stafi</th>
                        <th>Kompania</th>
                        <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {PushimiPerPunetore.map(p=>
                            <tr key={p.PPID}>
                                <td>{p.PPID}</td>
                                <td>{p.FillimiIPushimit}</td>
                                <td>{p.MbarimiIPushit}</td>
                                <td>{p.Arseyja}</td>
                                <td>{p.Stafi}</td>
                                <td>{p.Kompania}</td>
                                <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info"
                                     onClick={()=>this.setState({editModalShow:true,
                                        PPID: p.PPID,
                                        FillimiIPushimit:p.FillimiIPushimit,
                                        MbarimiIPushit:p.MbarimiIPushit,
                                        Arseyja:p.Arseyja,
                                        Stafi:p.Stafi,
                                        Kompania:p.Kompania
                                     })}>
                                     Perditeso
                                     </Button>

                                        <Button className="mr-2" variant="danger"
                                        onClick={()=>this.deletePushimiPerPunetore(p.PPID)}>
                                        Delete
                                        </Button>

                                        <EditPushimiPerPunetore show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        PPID={PPID}
                                        FillimiIPushimit={FillimiIPushimit}
                                        MbarimiIPushit={MbarimiIPushit}
                                        Arseyja={Arseyja}
                                        Stafi={Stafi}
                                        Kompania={Kompania}
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