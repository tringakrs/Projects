import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import { Grid, Paper } from "@material-ui/core";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {ShtoDelivery} from './ShtoDelivery';
import {EditDelivery} from './EditDelivery';


export class Delivery extends Component{

    constructor(props){
        super(props);
        this.state={Delivery:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Delivery')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Delivery:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDelivery(DeliveryID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Delivery'+DeliveryID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {Delivery,Klienti,Aeroporti,Cmimi,KohaENisjes,KohaEArritjes,Kompania,DeliveryID}=this.state;
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <Paper elevation={5}>

            <Grid container spacing={3}>
                <Grid item xs={2} />
                <Grid direction="column" item xs={4}>

                    <ShtoDelivery />
                </Grid>
                <Grid item xs={6}>


                <div>
                <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                        <tr>
                        <th>DeliveryID</th>
                        <th>Klienti</th>
                        <th>Aeroporti</th>
                        <th>Cmimi</th>
                        <th>Koha E Nisjes</th>
                        <th>Koha E Arritjes</th>
                        <th>Kompania</th>
                        <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>

                        </tr>
                    </thead>
                    <tbody>
                        {Delivery.map(d=> (
                            <tr key={d.DeliveryID}>
                                <td>{d.DeliveryID}</td>
                                <td>{d.Klienti}</td>
                                <td>{d.Aeroporti}</td>
                                <td>{d.Cmimi}</td>
                                <td>{d.KohaENisjes}</td>
                                <td>{d.KohaEArritjes}</td>
                                <td>{d.Kompania}</td>
                                <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info"
                                     onClick={()=>this.setState({editModalShow:true,
                                        DeliveryID: d.DeliveryID,
                                        Klienti:d.Klienti,
                                        Aeroporti:d.Aeroporti,
                                        Cmimi:d.Cmimi,
                                        KohaENisjes:d.KohaENisjes,
                                        KohaEArritjes:d.KohaEArritjes,
                                        Kompania:d.Kompania,
                                     })}>
                                     Perditeso
                                     </Button>

                                        <Button className="mr-2" variant="danger"
                                        onClick={()=>this.deleteDelivery(d.DeliveryID)}>
                                        Delete
                                        </Button>

                                        <EditDelivery show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        DeliveryID={DeliveryID}
                                        Klienti={Klienti}
                                        Aeroporti={Aeroporti}
                                        Cmimi={Cmimi}
                                        KohaENisjes={KohaENisjes}
                                        KohaEArritjes={KohaEArritjes}
                                        Kompania={Kompania}
                                        />

                                    </ButtonToolbar>
                                    </td>
                            </tr>))}
                    </tbody>
                    
                </Table>


            </div>


                </Grid>

                <Grid item xs={2}/>

                </Grid>

                

            </Paper>

            
        )
    }
}