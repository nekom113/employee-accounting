import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeesAddForm from '../employees-add/employees-add'
import EmployeesList from '../employees-list/employees-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'


export default function App() {
	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList />
			<EmployeesAddForm />
		</div>
	)
} 
