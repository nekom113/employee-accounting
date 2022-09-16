import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'
export default function EmployeesList({ data }) {

	const item = data.map(({ id, ...itemProps }) => {

		return (
			<EmployeesListItem key={id} {...itemProps} /> // key={index} name={el.name} salary={el.salary}

		)
	});
	return (
		<ul className="app-list list-group">
			{item}
		</ul >
	)
}
