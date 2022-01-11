import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditStafi extends Component{
  constructor(props){
    super(props);
    this.state={rol:[],kom:[]}; 

    this.handleSubmit=this.handleSubmit.bind(this);
}
componentDidMount(){
    fetch(process.env.REACT_APP_API+'Roli')
    .then(response=>response.json())
    .then(data=>{
        this.setState({rol:data});
    })
    fetch(process.env.REACT_APP_API+'Kompania')
  .then(response=>response.json())
  .then((data) => {
      this.setState({kom:data});
  });
}
  
     handleSubmit(event){
         event.preventDefault();
         fetch(process.env.REACT_APP_API+"Stafi",{
             method:'PUT',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
              EmriMbiemri:event.target.EmriMbiemri.value,
              Ditelindja:event.target.Ditelindja.value,
              Gjinia:event.target.Gjinia.value,
              NrPersonal:event.target.NrPersonal.value,
              Shtetesia:event.target.Shtetesia.value,
              KodiPostal:event.target.KodiPostal.value,
              NrTelefonit:event.target.NrTelefonit.value,
              Roli:event.target.Roli.value,
              Kompania:event.target.Kompania.value,
              FillimiIPunes:event.target.FillimiIPunes.value,
              MbarimiIPunes:event.target.MbarimiIPunes.value
             })
         })

         .then(res=>res.json())
         .then(result=>{
             alert(result);

         },
         (error)=>{
             alert('Failed');
         })
        }


    render(){
        return (
            <div className="container">

<Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
            Perditeso Stafi
         </Modal.Title>
    </Modal.Header>
    <Modal.Body>
       <Row>
         <Col sm={6}>
           <Form onSubmit={this.handleSubmit}>
           <Form.Group controlId="EmriMbiemri">
                <Form.Label>Emri Mbiemri</Form.Label>
                <Form.Control type="text" name="EmriMbiemri" required 
                defaultValue={this.props.EmriMbiemri}
                placeholder="EmriMbiemri"/>
             </Form.Group>

            <Form.Group  controlId="Ditelindja">
               <Form.Label>Ditelindja</Form.Label>
               <Form.Control 
                defaultValue={this.props.dtl} placeholder="Ditelindja"
               type="date"
               name="Ditelindja"
               required
               placeholder="Ditelindja"
               />
                </Form.Group>

                
                <Form.Group controlId="Gjinia">
                                    <Form.Label>Gjinia</Form.Label>                     
                                    <Form.Control as="select"   
                                    type="text"
                                    defaultValue={this.props.Gjinia} 
                                    placeholder="NrPersonave">
                                            <option value="Mashkull">Mashkull</option>
                                            <option value="Femer">Femer</option>
                                            <option value="Tjeter">Tjeter</option>                         
                                    </Form.Control>
                                </Form.Group>

             <Form.Group controlId="NrPersonal">
                <Form.Label>Numri Personal</Form.Label>
                <Form.Control type="text" name="NrPersonal" required 
                defaultValue={this.props.NrPersonal}
                placeholder="Numri Personal"/>
             </Form.Group>

             <Form.Group controlId="Shtetesia">
                <Form.Label>Shtetesia</Form.Label>
                <Form.Control type="text" name="Shtetesia" required 
                defaultValue={this.props.Shtetesia}
                placeholder="Shtetesia"/>
             </Form.Group>

             <Form.Group controlId="KodiPostal">
                <Form.Label>Kodi Postal</Form.Label>
                <Form.Control type="text" name="KodiPostal" required 
                defaultValue={this.props.KodiPostal}
                placeholder="KodiPostal"/>
             </Form.Group>
            
             <Form.Group controlId="NrTelefonit">
                <Form.Label>NrTelefonit</Form.Label>
                <Form.Control type="text" name="NrTelefonit" required 
                defaultValue={this.props.NrTelefonit}
                placeholder="NrTelefonit"/>
             </Form.Group>

             <Form.Group controlId="Roli">
                        <Form.Label>Roli</Form.Label>
                        <Form.Control as="select" name="Roli"
                          
                    defaultValue={this.props.Roli}
                        placeholder="Roli" >
                        {this.state.rol.map(rol=>
                            <option key={rol.RoliID}>{rol.RoliEmri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Kompania">
                        <Form.Label>Kompania</Form.Label>
                        <Form.Control as="select" name="Kompania"  
                defaultValue={this.props.Kompania}
                placeholder="Kompania">
                        {this.state.kom.map(kom=>
                            <option key={kom.KompaniaID}>{kom.KompaniaEmri}</option>)}
                        </Form.Control>
                    </Form.Group>

            <Form.Group controlId="FillimiIPunes">
               <Form.Label>Fillimi I Punes</Form.Label>
               <Form.Control 
               type="date"
               name="FillimiIPunes"
               required
               placeholder="FillimiIPunes"
               />
                </Form.Group>

                <Form.Group controlId="MbarimiIPunes">
               <Form.Label>Mbarimi I Punes</Form.Label>
               <Form.Control 
               type="date"
               name="MbarimiIPunes"

               placeholder="MbarimiIPunes"
               />
                </Form.Group>

             <Form.Group>
               <Button variant="primary" type="submit">
                 Perditeso Stafin
               </Button>
             </Form.Group>
           </Form>
         </Col>
       </Row>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>          
            
          </div>
      )
      
   }
}