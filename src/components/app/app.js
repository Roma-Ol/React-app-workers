import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'John C.', salary: 640, increase: true},
    {name: 'Mat X.', salary: 860, increase: false},
    {name: 'Tim L.', salary: 950, increase: false},
  ]

  return (
    <div className='app'>
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />      
      </div>

      <EmployeesList data={data}/>
      <EmployeeAddForm />
    </div>
  )
}

export default App;