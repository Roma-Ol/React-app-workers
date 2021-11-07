import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 640, increase: false, raise: false, id: '1'},
        {name: 'Mat X.', salary: 860, increase: false, raise: true, id: '2'},
        {name: 'Tim L.', salary: 950, increase: false, raise: false, id: '3'},
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
       return {
         data: data.filter(item => item.id !== id)
       }
    })
  }

  addItem = (name, salary) => {
    let newItemID = this.state.data.length + 1;

    let newItem= {
      name: name,
      salary: salary,
      increase: false,
      raise: false,
      id: newItemID,
    }
    
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return{
        data: newArr
      }
    })
  }

  onPositionManipulation = (id, manipulation) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [manipulation]: !item[manipulation] }
        }
        return item;
      })
    }))
  }

  render() {
    const { data } = this.state;
    let promoted = data.filter(item => item.increase);
    return (
      <div className='app'>
        <AppInfo 
          workersAmouth = { data.length }
          countPromoted = { promoted.length } />
  
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />      
        </div>
  
        <EmployeesList
          data = { data }
          onDelete = { this.deleteItem }
          onToggleIncrease = { this.onPositionManipulation }
          onToggleRaise = { this.onPositionManipulation } />

        <EmployeeAddForm
          onAdd = { this.addItem } />
      </div>
    )
  }
}

export default App;