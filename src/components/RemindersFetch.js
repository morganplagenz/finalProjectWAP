import React from 'react';
import axios from 'axios';
import { Button, Modal, Table} from 'react-bootstrap';

const url = 'https://60fddc511fa9e90017c70f9e.mockapi.io/reminders'

export default class RemindersFetch extends React.Component {
    state = {
      reminders: [],
      modal: false
    }

// READ: function

    async componentDidMount() {
      let result = await axios.get(url);
      this.setState({reminders: result.data});
    }

// DELETE: function 

    deleteReminder(id, e){
      axios.delete(url + `/${id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
    
          const reminders = this.state.reminders.filter(reminder => reminder.id !== id);
          this.setState({reminders});
        })
    
    }

    changeHandler = (e) => {
      this.setState({[e.target.name]:e.target.value})
    }

// UPDATE: function

    updateReminder(id) {
      const article = { 
        id:this.state.id, 
        employee: this.state.employee, 
        task: this.state.task,
        dueDate: this.state.dueDate,
       };
      axios.put(url + `/${this.state.id}`, article)
          .then(response => this.setState({article, modal: false}))
  }

// READ, UPDATE, DELETE commands are all in the render section
    render() {
      const {id, employee, task, dueDate} = this.state;
    return (
      <div className="container pt-5">
        <h4>Upcoming Tasks</h4>
        <br />
        <div className="d-flex my-auto background-content">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className="">
                        <th>Employee</th>
                        <th>Task</th>
                        <th>Due Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.reminders.map(reminder =>
                        <tr key={reminder.id}>
                            <td>{reminder.employee}</td>
                            <td>{reminder.task}</td>
                            <td>{reminder.dueDate}</td>
                            <td> <button className="btn edit-button btn-sm m-2 col"
                                onClick={(e) => this.setState({ // makes the modal have the default values of the current reminder's values
                                modal: true, 
                                id:reminder.id, 
                                employee:reminder.employee, 
                                task:reminder.task,
                                dueDate:reminder.dueDate
                                })}> 
                                Edit Task</button>
                            <Modal show={this.state.modal} className="modal-text">
                                <Modal.Header>
                                    <Modal.Title>Update Task</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <form>
                                    <h6 className="modal-text mt-4">Employee Responsible</h6>
                                    <input className="m-3"
                                        type='text'
                                        placeholder='Employee Responsible'
                                        name='employee'
                                        onChange= {this.changeHandler}
                                        value={employee}
                                    />
                                    <br />
                                    <h6 className="modal-text mt-4">Task</h6>
                                    <input className="m-3"  
                                        type='text'
                                        placeholder='Task'
                                        name='task'
                                        onChange= {this.changeHandler}
                                        value={task}
                                    />
                                    <h6 className="modal-text mt-4">Due Date</h6>
                                    <input className="m-3"  
                                        type='date'
                                        placeholder='Due Date'
                                        name='dueDate'
                                        onChange={this.changeHandler}
                                        value={dueDate}
                                    />
                                    <br />
                                </form>
                                </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={(e) => this.updateReminder(reminder.id)}>
                                            Update Task
                                        </Button>
                                        <Button variant="secondary" onClick={() => this.setState({modal: false})}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <button className="btn delete-button btn-sm m-2 col" onClick={(e) => this.deleteReminder(reminder.id, e)}>Delete Task</button>
                        </td>
                        </tr>
                        )}
             </tbody>
            </Table>
        </div>
        </div>
    )}
  }