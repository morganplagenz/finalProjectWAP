import React from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const url = 'https://60fddc511fa9e90017c70f9e.mockapi.io/orders'

export default class OrderTwo extends React.Component {
    state = {
      orders: [],
      modal: false
    }

// READ: function

    async componentDidMount() {
      let result = await axios.get(url);
      this.setState({orders: result.data});
    }

// DELETE: function 

    deleteOrder(id, e){
      axios.delete(url + `/${id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
    
          const orders = this.state.orders.filter(order => order.id !== id);
          this.setState({orders});
        })
    
    }

    changeHandler = (e) => {
      this.setState({[e.target.name]:e.target.value})
    }

// UPDATE: function

    updateOrder(id) {
      const article = { 
        id:this.state.id, 
        custName: this.state.custName, 
        type: this.state.type,
        qty: this.state.qty,
        material: this.state.material,
        color: this.state.color,
        dueDate: this.state.dueDate
       };
      axios.put(url + `/${this.state.id}`, article)
          .then(response => this.setState({article, modal: false}))
    }



// READ, UPDATE, DELETE commands are all in the render section
    render() {
      const {id, custName, qty, material, color, type, dueDate} = this.state;
    return (
      <div className="container">
        <div>
        {this.state.orders.map(order =>
        <div className="pt-5" key={order.id}>
          
            <div className="m-1 row ">
                <div className="col">
                    <p>Customer Name:</p><h5>{order.custName}</h5>
                </div>
                <div className="col">
                    <p>Type:</p><h5>{order.type}</h5>
                </div>
                <div className="col">
                    <p>Quantity:</p><h5>{order.qty}</h5>
                </div>
                <div className="col">
                    <p>Material:</p><h5>{order.material}</h5>
                </div>
                <div className="col">
                    <p>Color:</p><h5>{order.color}</h5>
                </div>
            </div>
                <div className="m-1 p-4 row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>

{/* UPDATE: user command */}
                    {/* below is where users can update an order. I have that functionality within a modal 
                        the object below will show the current input values in the modal (this is done to increase user experience)*/}
                    <button className="btn edit-button btn-sm m-2 col"
                      onClick={(e) => this.setState({ 
                        modal: true, 
                        id:order.id, 
                        custName:order.custName, 
                        type:order.type,
                        qty:order.qty,
                        material:order.material,
                        color:order.color,
                        dueDate: order.dueDate
                        })}> 
                      Edit Order</button>
                    <Modal show={this.state.modal} className="modal-text">
                      <Modal.Header>
                        <Modal.Title>Change Order Form</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <form>
                        <input className="m-3"
                          type='text'
                          placeholder='Customer Name'
                          name='custName'
                          onChange= {this.changeHandler}
                          value={custName}
                        />
                        <br />
                        <input className="m-3"  
                          type='text'
                          placeholder='Couch Type'
                          name='type'
                          onChange= {this.changeHandler}
                          value={type}
                        />
                        <input className="m-3"  
                          type='number'
                          placeholder='Quantity'
                          name='qty'
                          onChange={this.changeHandler}
                          value={qty}
                        />
                        <br />
                        <input className="m-3"  
                          type='text'
                          placeholder='Material'
                          name='material'
                          onChange= {this.changeHandler}
                          value={material}
                        />
                        <input className="m-3"  
                          type='text'
                          placeholder='Color'
                          name='color'
                          onChange= {this.changeHandler}
                          value={color}
                        />
                      </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={(e) => this.updateOrder(order.id)}>
                          Submit Change Order
                        </Button>
                        <Button variant="secondary" onClick={() => this.setState({modal: false})}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

{/* DELETE: user command */}

                    <button className="btn delete-button btn-sm m-2 col" onClick={(e) => this.deleteOrder(order.id, e)}>Cancel Order</button>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <hr />
            </div>

            )}
        </div>
      </div>
    )}
  }