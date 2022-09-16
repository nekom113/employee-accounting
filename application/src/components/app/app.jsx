import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeesAddForm from '../employees-add/employees-add'
import EmployeesList from '../employees-list/employees-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

const data = [
	{ name: 'Tony C.', salary: 800, increase: false, id: 1 },
	{ name: 'Den S.', salary: 500, increase: false, id: 2 },
	{ name: 'Alex A.', salary: 1200, increase: true, id: 3 },
	{ name: 'Ponya A.', salary: 2200, increase: true, id: 4 }
]

export default function App() {
	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>
	)
} 
