import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import { Grid, Paper } from "@material-ui/core";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {ShtoKlientiBanka} from './ShtoKlientiBanka';
import {EditKlientiBanka} from './EditKlientiBanka';



export class KlientiBanka extends Component{

    constructor(props){
        super(props);
        this.state={KlientiBanka:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'KlientiBanka')
        .then(response=>response.json())
        .then(data=>{
            this.setState({KlientiBanka:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteKlientiBanka(KlientiBankaID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'KlientiBanka/'+KlientiBankaID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {KlientiBanka,Klienti,CardNumber,CardType,ExpiryDate,SecurityCode,KlientiBankaID}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <Paper elevation={5}>

            <Grid container spacing={4}>
                <Grid item xs={2} />
                <Grid direction="column" item xs={3}>

                    <ShtoKlientiBanka />
                </Grid>
                <Grid item xs={6}>

            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                        <tr>
                        <th>Klienti ID</th>
                        <th>Klienti</th>
                        <th>Card Number</th>
                        <th>Card Type</th>
                        <th>Expiry Date</th>
                        <th>Security Code</th>
                        <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {KlientiBanka.map(kb=>
                            <tr key={kb.KlientiBankaID}>
                                <td>{kb.KlientiBankaID}</td>
                                <td>{kb.Klienti}</td>
                                <td>{kb.CardNumber}</td>
                                <td>{kb.CardType}</td>
                                <td>{kb.ExpiryDate}</td>
                                <td>{kb.SecurityCode}</td>
                                <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info"
                                     onClick={()=>this.setState({editModalShow:true,
                                        KlientiBankaID:kb.KlientiBankaID,
                                        KLienti:kb.KLienti,
                                        CardNumber:kb.CardNumber,
                                        CardType:kb.CardType,
                                        ExpiryDate:kb.ExpiryDate,
                                        SecurityCode:kb.SecurityCode,})}>
                                     Perditeso
                                     </Button>

                                        <Button className="mr-2" variant="danger"
                                        onClick={()=>this.deleteKlientiBanka(kb.KlientiBankaID)}>
                                        Delete
                                        </Button>

                                        <EditKlientiBanka show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        KlientiBankaID={KlientiBankaID}
                                        Klienti={Klienti}
                                        CardNumber={CardNumber}
                                        CardType={CardType}
                                        ExpiryDate={ExpiryDate}
                                        SecurityCode={SecurityCode}/>

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