import EmployeesListItem from "../employee-list-item/employee-list-item"
import './employees-list.css'

const EmployeesList = () => {
  return(
    <ul className="app-list list-group">
      <EmployeesListItem />
      <EmployeesListItem />
      <EmployeesListItem />
    </ul>
  )
}

export default EmployeesList;