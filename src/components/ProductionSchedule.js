import React from 'react';
import '../App.css'
import axios from 'axios';
import { Button, Modal, Table } from 'react-bootstrap';


// read & update are covered in this component. Users 'update' arrays using properties that we not presented in the 'OrderPost' component

const url = 'https://60fddc511fa9e90017c70f9e.mockapi.io/orders';


export default class ProductionSchedule extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orders:[],
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.updateSchedule = this.updateSchedule.bind(this);
    }

    async componentDidMount() {
        let result = await axios.get(url);
        this.setState({orders: result.data});
      };

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    updateSchedule(id) {
        const article = { 
            id:this.state.id, 
            custName: this.state.custName, 
            type: this.state.type,
            qty: this.state.qty,
            material: this.state.material,
            color: this.state.color,
            stage: this.state.stage,
            dueDate: this.state.dueDate
         };
        axios.put(url + `/${this.state.id}`, article)
            .then(this.setState({article, modal: false}))
    }

    render(){
        const {id, stage, dueDate} = this.state

    return(
        <div className="container pt-5">
            <h4>Production Schedule</h4>
            <br />
        <div className="d-flex my-auto background-content">
            <Table  striped bordered hover variant="dark">
                <thead>
                    <tr className="">
                        <th>Customer</th>
                        <th>Couch Type</th>
                        <th>Quantity</th>
                        <th>Material</th>
                        <th>Color</th>
                        <th>Stage</th>
                        <th>Confirmed Due Date</th>
                        <th></th>
                    </tr>
                 </thead>
                <tbody>
                {this.state.orders.map(order =>
                    <tr key={order.id}>
                        <td>{order.custName}</td>
                        <td>{order.type}</td>
                        <td>{order.qty}</td>
                        <td>{order.material}</td>
                        <td>{order.color}</td>
                        <td> {order.stage}</td>
                        <td> {order.dueDate}</td>
                        <td><button className="btn edit-button btn-sm m-2 col"
                                onClick={(e) => this.setState({ 
                                    modal: true, 
                                    id:order.id, 
                                    custName:order.custName, 
                                    type:order.type,
                                    qty:order.qty,
                                    material:order.material,
                                    color:order.color,
                                    stage: order.stage,
                                    dueDate: order.dueDate
                                })}> 
                                Edit Schedule</button>
                            <Modal show={this.state.modal} className="modal-text">
                                <Modal.Header>
                                    <Modal.Title>Edit the Schedule</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <form>
                                    <h6 className="modal-text">Current Stage in Production</h6>
                                    <input className="m-3"
                                        type='text'
                                        name='stage'
                                        onChange= {this.changeHandler}
                                        value={stage}
                                    />
                                    <h6 className="modal-text mt-4">Date We Need to Ship Product</h6>
                                    <input className="m-3"
                                        type='date'
                                        name='dueDate'
                                        onChange= {this.changeHandler}
                                        value={dueDate}
                                    />
                                    <br />
                                </form>
                                </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={(e) => this.updateSchedule(order.id)}>
                                            Confirm Changes
                                        </Button>
                                        <Button variant="secondary" onClick={() => this.setState({modal: false})}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal> 
                        </td>
                        
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
        </div>

    )
    }

}