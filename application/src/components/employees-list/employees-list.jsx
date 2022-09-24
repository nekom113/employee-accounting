import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'
export default function EmployeesList({ data, onDelete, onToggle }) {

	const item = data.map(({ id, ...itemProps }) => {


		return (
			<EmployeesListItem
				key={id} {...itemProps}  // key={index} name={el.name} salary={el.salary}
				onToggle={(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))}
				onDelete={() => onDelete(id)}
			/>

		)
	});
	return (
		<ul className="app-list list-group">
			{item}
		</ul >
	)
}
