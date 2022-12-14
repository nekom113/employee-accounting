
import './employees-list-item.css'

export default function EmployeesListItem({ name, salary, onDelete, onToggle, increase, promotion }) {


	// const { name, salary, onDelete, onToggle, increase, promotion } = props
	let styleProperty = "list-group-item d-flex justify-content-between";
	if (increase) {
		styleProperty += ' increase';
	}
	if (promotion) {
		styleProperty += ' like';
	}
	return (
		<li className={styleProperty} >
			<span onClick={onToggle} data-toggle='promotion' className="list-group-item-label">{name}</span>
			<input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
			<div className='d-flex justify-content-center align-items-center'>
				<button onClick={onToggle} data-toggle='increase' type="button"
					className="btn-cookie btn-sm ">
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button"
					className="btn-trash btn-sm "
					onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	)
}

