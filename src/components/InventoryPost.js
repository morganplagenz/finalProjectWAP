import React from 'react';
import axios from 'axios';

const url = 'https://60fddc511fa9e90017c70f9e.mockapi.io/inventory'

export default class InventoryPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            price:'',
            qty: '',
            reorder: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

//CREATE: Functions and User Command

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post(url,this.state)
        .then(response => {
            console.log(response)
        })
    }

    render() {
        const {id, name, price, qty, reorder} = this.state
    return (
        <div className="container">
            <h4 className="m-3 pt-4">Add Inventory Information</h4>
            <form onSubmit={this.submitHandler}>
                <input className="m-3"
                    type='text'
                    placeholder='Part Name'
                    name='name'
                    onChange= {this.changeHandler}
                    value={name}
                />
                <br />
                <input className="m-3"  
                    type='text'
                    placeholder='Unit Price'
                    name='price'
                    onChange= {this.changeHandler}
                    value={price}
                />
                <input className="m-3"  
                    type='number'
                    placeholder='Quantity in Stock'
                    name='qty'
                    onChange={this.changeHandler}
                    value={qty}
                />
                <input className="m-3"  
                    type='number'
                    placeholder='Days to Reorder'
                    name='reorder'
                    onChange={this.changeHandler}
                    value={reorder}
                />
                <br />
                <br />
                <button type='submit' className="btn order-button btn-sm m-2">Submit Information</button>
            </form>
        </div>
    )
    }
}