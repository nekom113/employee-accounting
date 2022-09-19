import nextId from 'react-id-generator'
import { Component } from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import EmployeesList from '../employees-list/employees-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ name: 'Tony C.', salary: 800, increase: false, id: 1 },
				{ name: 'Den S.', salary: 500, increase: false, id: 2 },
				{ name: 'Alex A.', salary: 1200, increase: true, id: 3 },
				{ name: 'Ponya A.', salary: 2200, increase: false, id: 4 }
			]
		}
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			id: nextId()
		}
		console.log(newItem);
		console.log(this.state.data)


		this.setState(({ data }) => {
			const newData = [...data, newItem]
			return {
				data: newData
			}
		})
	}
	render() {
		return (
			<div className="app" >
				<AppInfo />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem} />
				<EmployeesAddForm
					addItem={this.addItem}
				/>

			</div>
		)
	}
} 
