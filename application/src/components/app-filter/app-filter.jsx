
import './app-filter.css'
export default function AppFilter({ filter, onFilterSelect }) {
	const buttonsData = [
		{ name: 'all', label: 'Все сотрудники' },
		{ name: 'promotion', label: 'На повышение' },
		{ name: 'more1000', label: 'З/П больше 1000$' }
	]
	const buttons = buttonsData.map(({ name, label }) => {
		const active = filter === name
		const clazz = active ? 'btn-light' : 'btn-outline-light'
		return (
			<button
				className={`btn ${clazz}`}
				type='button'
				key={name}
				onClick={() => onFilterSelect(name)}>
				{label}
			</button>

		)
	})
	return (
		<div className="btn-group">
			{buttons}
		</div>
	)
}
