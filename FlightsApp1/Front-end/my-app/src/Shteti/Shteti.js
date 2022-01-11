import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {ShtoShtetin} from './ShtoShtetin';
import {EditShteti} from './EditShteti';
import { Grid,Paper, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";



export class Shteti extends Component{

    constructor(props){
        super(props);
        this.state={Shteti:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Shteti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Shteti:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteShteti(ShtetiCode){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Shteti/'+ShtetiCode,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {Shteti,ShtetiCode,ShtetiEmri,Qyteti}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <Paper  elevation={5}>

            <Grid container  spacing={4}>
            <Grid item xs={2}/>
               <Grid   direction="column" item xs={4}>
   
               <ShtoShtetin/>
            </Grid>
            <Grid item xs={6}>
                    
            <div>

<Table className="mt-4" striped bordered hover size="sm">
<thead>
        <tr>
        <th>ShtetiCode</th>
        <th>ShtetiEmri</th>
        <th>Qyteti</th>
        <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>
        </tr>
    </thead>
    <tbody>
        {Shteti.map(sh=>
            <tr key={sh.ShtetiCode}>
                <td>{sh.ShtetiCode}</td>
                <td>{sh.ShtetiEmri}</td>
                <td>{sh.Qyteti}</td>
                <td>
                <ButtonToolbar>
                    <Button className="mr-2" variant="info"
                     onClick={()=>this.setState({editModalShow:true,
                        ShtetiCode:sh.ShtetiCode,
                        ShtetiEmri:sh.ShtetiEmri,
                        Qyteti:sh.Qyteti,
                     })}>
                     Perditeso
                     </Button>

                        <Button className="mr-2" variant="danger"
                        onClick={()=>this.deleteShteti(sh.ShtetiCode)}>
                        Delete
                        </Button>

                        <EditShteti show={this.state.editModalShow}
                        onHide={editModalClose}
                        ShtetiCode={ShtetiCode}
                        ShtetiEmri={ShtetiEmri}
                        Qyteti={Qyteti}
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