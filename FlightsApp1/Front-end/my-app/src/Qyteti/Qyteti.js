import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {ShtoQyteti} from './ShtoQyteti';
import {EditQyteti} from './EditQyteti';
import { Grid,Paper, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";



export class Qyteti extends Component{

    constructor(props){
        super(props);
        this.state={Qyteti:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Qyteti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Qyteti:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteQyteti(ISO){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Qyteti/'+ISO,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {Qyteti,Emri,ISO}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <Paper  elevation={5}>

            <Grid container  spacing={4}>
            <Grid item xs={2}/>
               <Grid   direction="column" item xs={4}>
   
               <ShtoQyteti/>
            </Grid>
            <Grid item xs={6}>
                    
            <div>

<Table className="mt-4" striped bordered hover size="sm">
<thead>
        <tr>
        <th>ISO</th>
        <th>Emri</th>
        <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>

        </tr>
    </thead>
    <tbody>
        {Qyteti.map(Kl=>
            <tr key={Kl.ISO}>
                <td>{Kl.ISO}</td>
                <td>{Kl.Emri}</td>
                <td>
                <ButtonToolbar>
                    <Button className="mr-2" variant="info"
                     onClick={()=>this.setState({editModalShow:true,
                    Emri:Kl.Emri,
                     ISO:Kl.ISO,
                     })}>
                     Perditeso
                     </Button>

                        <Button className="mr-2" variant="danger"
                        onClick={()=>this.deleteQyteti(Kl.ISO)}>
                        Delete
                        </Button>

                        <EditQyteti show={this.state.editModalShow}
                        onHide={editModalClose}
                        Emri={Emri}
                        ISO={ISO}
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