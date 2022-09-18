import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import EmployeesList from '../employees-list/employees-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

const data = [
	{ name: 'Tony C.', salary: 800, id: 1 },
	{ name: 'Den S.', salary: 500, id: 2 },
	{ name: 'Alex A.', salary: 1200, id: 3 },
	{ name: 'Ponya A.', salary: 2200, id: 4 }
]

export default function App() {
	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList
				data={data}
				onDelete={id => console.log(id)} />
			<EmployeesAddForm />

		</div>
	)
} 
