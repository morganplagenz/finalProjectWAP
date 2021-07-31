import React from 'react';
import axios from 'axios';

const url = 'https://60fddc511fa9e90017c70f9e.mockapi.io/reminders'

export default class ReminderPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            employee: '',
            task:'',
            dueDate: '',
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
        const {id, employee, task, dueDate} = this.state
    return (
        <div className="container">
            <h4 className="m-3 pt-4">Set Reminder</h4>
            <form onSubmit={this.submitHandler}>
                <input className="m-3"
                    type='text'
                    placeholder='Employee Responsible'
                    name='employee'
                    onChange= {this.changeHandler}
                    value={employee}
                />
                <br />
                <input className="m-3"  
                    type='text'
                    placeholder='Describe Task'
                    name='task'
                    onChange= {this.changeHandler}
                    value={task}
                />
                <input className="m-3"  
                    type='date'
                    placeholder='Due Date'
                    name='dueDate'
                    onChange={this.changeHandler}
                    value={dueDate}
                />
                <br />
                <button type='submit' className="btn order-button btn-sm m-2">Set Reminder</button>
            </form>
        </div>
    )
    }
}