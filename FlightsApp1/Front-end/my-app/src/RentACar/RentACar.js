import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import { Grid, Paper } from "@material-ui/core";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {ShtoRentACar} from './ShtoRentACar';
import {EditRentACar} from './EditRentACar';


export class RentACar extends Component{

    constructor(props){
        super(props);
        this.state={RentACar:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'RentACar')
        .then(response=>response.json())
        .then(data=>{
            this.setState({RentACar:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteRentACar(MakinaID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'RentACar/' +MakinaID, {
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {RentACar,Targat,Lloji,Ngjyra,Viti,Klienti,PickUpLocation,KompaninaCar,PickUpDate, ReturnDate,MakinaID}=this.state;
        let editModalClose=()=>this.setState({editModalShow:false});
        return(

            <Paper elevation={5}>

            <Grid container spacing={3}>
                <Grid item xs={2} />
                <Grid direction="column" item xs={3}>

                    <ShtoRentACar />
                </Grid>
                <Grid item xs={6}>


                <div>
                <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                        <tr>
                        <th>MakinaID</th>
                        <th>Targat</th>
                        <th>Lloji</th>      
                        <th>Ngjyra</th>    
                        <th>Viti</th>
                        <th>Klienti</th>
                        <th>KompaninaCar</th>
                        <th>PickUpLocation</th>
                        <th>PickUpDate</th>
                        <th>ReturnDate</th>
                        <th><img className="pencilphoto"src="http://localhost:3000/Pencil.png"/></th>

                        </tr>
                    </thead>
                    <tbody>
                        {RentACar.map(Rac=>
                            <tr key={Rac.MakinaID}>
                                <td>{Rac.MakinaID}</td>
                                <td>{Rac.Targat}</td>
                                <td>{Rac.Lloji}</td>
                                <td>{Rac.Ngjyra}</td>
                                <td>{Rac.Viti}</td>
                                <td>{Rac.Klienti}</td>
                                <td>{Rac.KompaninaCar}</td>
                                <td>{Rac.PickUpLocation}</td>
                                <td>{Rac.PickUpDate}</td>
                                <td>{Rac.ReturnDate}</td>                                       

                                <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info"
                                     onClick={()=>this.setState({editModalShow:true,
                                        MakinaID: Rac.MakinaID,
                                        Targat:Rac.Targat,
                                        Lloji:Rac.Lloji,
                                        Ngjyra:Rac.Ngjyra,
                                        Viti:Rac.Viti,
                                        Klienti:Rac.Klienti,                                      
                                        KompaninaCar:Rac.NrTelefonit,
                                        PickUpLocation :Rac.PickUpLocation ,
                                        PickUpDate :Rac.PickUpDate ,
                                        ReturnDate  :Rac.ReturnDate ,
                                       
                                     })}>
                                     Perditeso
                                     </Button>

                                        <Button className="mr-2" variant="danger"
                                        onClick={()=>this.deleteRentACar(Rac.MakinaID)}>
                                        Delete
                                        </Button>

                                        <EditRentACar show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        MakinaID={MakinaID}
                                        Targat={Targat}
                                        Lloji={Lloji}
                                        Ngjyra={Ngjyra}
                                        Viti={Viti}
                                        Klienti={Klienti}
                                        KompaninaCar={KompaninaCar}
                                        PickUpLocation={PickUpLocation}
                                        PickUpDate={PickUpDate}
                                        ReturnDate={ReturnDate}                                                                                                                     
                                        />

                                    </ButtonToolbar>
                                    </td>
                            </tr>)}
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