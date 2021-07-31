import React from 'react';
import axios from 'axios';


export default class OrderPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            custName: '',
            type:'',
            qty: '',
            material: '',
            color: '',
            stage: '',
            dueDate: ''
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
        axios.post('https://60fddc511fa9e90017c70f9e.mockapi.io/orders',this.state)
        .then(response => {
            console.log(response)
        })
    }

    render() {
        const {id, custName, type, qty, material, color} = this.state
    return (
        <div>
            <h4 className="m-3 pt-4">Create Order</h4>
            <form onSubmit={this.submitHandler}>
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
                <button type='submit' className="btn order-button btn-sm m-2">Submit for Approval</button>
            </form>
        </div>
    )
    }
}
