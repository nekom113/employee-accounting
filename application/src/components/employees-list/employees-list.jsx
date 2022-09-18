import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'
export default function EmployeesList({ data, onDelete }) {

	const item = data.map(({ id, ...itemProps }) => {


		return (
			<EmployeesListItem
				key={id} {...itemProps}  // key={index} name={el.name} salary={el.salary}

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
