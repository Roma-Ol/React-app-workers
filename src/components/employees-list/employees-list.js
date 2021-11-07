import EmployeesListItem from "../employee-list-item/employee-list-item"
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleRaise, onToggleIncrease}) => {

  const elements = data.map(item => {
     return (
      <EmployeesListItem key = { item.id }
                         name = { item.name } 
                         salary = { item.salary } 
                         increase = { item.increase }
                         raise = { item.raise }
                         onDelete = { () => onDelete(item.id) }
                         onToggleRaise = { () => onToggleRaise(item.id, 'raise') }
                         onToggleIncrease = { () => onToggleIncrease(item.id, 'increase') } />
    )
  })

  return(
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;