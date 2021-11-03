import EmployeesListItem from "../employee-list-item/employee-list-item"
import './employees-list.css'

const EmployeesList = ({data}) => {

  const elements = data.map(item => {
    return (
      <EmployeesListItem key={item.id}
                         name={item.name} 
                         surname={item.surname} 
                         salary={item.salary} 
                         increase={item.increase}/>
    )
  })

  console.log(elements)

  return(
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;


// АЛГОРИТМ РЕКОНЦЕЛЯЦІЇ (сверка)
