import React from 'react';
import axios from 'axios';
import { Button, Modal, Table} from 'react-bootstrap';

const url = 'https://60fddc511fa9e90017c70f9e.mockapi.io/inventory'

export default class InventoryFetch extends React.Component {
    state = {
      inventory: [],
      modal: false
    }

// READ: function

    async componentDidMount() {
      let result = await axios.get(url);
      this.setState({inventory: result.data});
    }

// DELETE: function 

    deleteReminder(id, e){
      axios.delete(url + `/${id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
    
          const inventory = this.state.inventory.filter(inv => inv.id !== id);
          this.setState({inventory});
        })
    
    }

    changeHandler = (e) => {
      this.setState({[e.target.name]:e.target.value})
    }

// UPDATE: function

    updateInventory(id) {
      const article = { 
        id:this.state.id, 
        name: this.state.name, 
        price: this.state.price,
        qty: this.state.qty,
        reorder: this.state.reorder,
       };
      axios.put(url + `/${this.state.id}`, article)
          .then(response => this.setState({article, modal: false}))
  }

// READ, UPDATE, DELETE commands are all in the render section
    render() {
      const {id, name, price, qty, reorder} = this.state;
    return (
      <div className="container pt-5">
        <h4>Inventory Tracker</h4>
        <br />
        <div className="d-flex my-auto background-content">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>In Stock</th>
                        <th>Reorder Time In Days</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.inventory.map(inv =>
                        <tr key={inv.id}>
                            <td>{inv.id}</td>
                            <td>{inv.name}</td>
                            <td>{inv.price}</td>
                            <td>{inv.qty}</td>
                            <td>{inv.reorder}</td>
                            <td> <button className="btn edit-button btn-sm m-2 col"
                                onClick={(e) => this.setState({ 
                                modal: true, 
                                id:inv.id, 
                                name: inv.name, 
                                price: inv.price,
                                qty: inv.qty,
                                reorder: inv.reorder,
                                })}> 
                                Edit</button>
                            <Modal show={this.state.modal} className="modal-text">
                                <Modal.Header>
                                    <Modal.Title>Edit Inventory Information</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <form className="m-3">
                                    <h6 className="modal-text">Vendor Name</h6>
                                    <input className="m-3"
                                        type='text'
                                        placeholder='Vendor Name'
                                        name='name'
                                        onChange= {this.changeHandler}
                                        value={name}
                                    />
                                    <br />
                                    <h6 className="modal-text">Unit Price</h6>
                                    <input className="m-3"  
                                        type='text'
                                        placeholder='Unit Price'
                                        name='price'
                                        onChange= {this.changeHandler}
                                        value={price}
                                    />
                                    <h6 className="modal-text">Quantity in Stock</h6>
                                    <input className="m-3"  
                                        type='number'
                                        placeholder='Quantity in Stock'
                                        name='qty'
                                        onChange={this.changeHandler}
                                        value={qty}
                                    />
                                    <h6 className="modal-text">Days Remaining to Reorder</h6>
                                    <input className="m-3"  
                                        type='number'
                                        placeholder='Days to Reorder'
                                        name='reorder'
                                        onChange={this.changeHandler}
                                        value={reorder}
                                    />
                                    <br />
                                </form>
                                </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={(e) => this.updateInventory(inv.id)}>
                                            Confirm
                                        </Button>
                                        <Button variant="secondary" onClick={() => this.setState({modal: false})}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <button className="btn reorder-button btn-sm m-2 col">Reorder</button>
                                <button className="btn delete-button btn-sm m-2 col" onClick={(e) => this.deleteReminder(inv.id, e)}>Delete</button>
                        </td>
                        </tr>
                        )}
             </tbody>
            </Table>
        </div>
        </div>
    )}
  }