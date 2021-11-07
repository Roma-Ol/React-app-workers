import { Component } from 'react';
import './employee-add-form.css';

class EmployeeAddForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      salary: '' ,
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]:  e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault();
    let {name, salary} = this.state;
    if (name.length > 2 && salary != '') {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: '',
        salary: '',
      })
    }
  }

  render() {
    const { name, salary } = this.state;
    
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form
          className="add-form d-flex">
            <input type="text"
                   className="form-control new-post-label"
                   placeholder="Name?"
                   name="name"
                   value={name}
                   onChange={this.onValueChange} />
           
            <input type="number"
                   className="form-control new-post-label"
                   placeholder="Salary in $?" 
                   name="salary"
                   value={salary}
                   onChange={this.onValueChange} />
           
            <button type="submit"
                    className="btn btn-outline-light"
                    onClick={ this.addItem }>Add</button>
            </form>
        </div>
    )
  }
}

export default EmployeeAddForm;