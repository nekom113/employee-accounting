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
				{ name: 'Tony C.', salary: 800, increase: false, promotion: true, id: 1 },
				{ name: 'Den S.', salary: 500, increase: false, promotion: false, id: 2 },
				{ name: 'Alex A.', salary: 1200, increase: true, promotion: false, id: 3 },
				{ name: 'Ponya A.', salary: 2200, increase: false, promotion: false, id: 4 }
			],
			part: '',
			filter: 'all'
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
			rise: false,
			id: nextId()
		}
		if (name && salary) {
			this.setState(({ data }) => {
				const newData = [...data, newItem]
				return {
					data: newData
				}
			})
		} else {
			console.log("Значения не найдены")
		}
	}

	onToggle = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			})
		}))
	}
	searchData = (items, part) => {
		if (part.lenght === 0) {
			return items
		}
		return items.filter(item => {
			return item.name.indexOf(part) > -1
		})
	}
	onUpdateSearch = (part) => {
		this.setState({ part });
	}

	onFilterSelect = (filter) => {
		this.setState({ filter })
	}

	filterData = (items, filter) => {
		switch (filter) {
			case 'promotion':
				return items.filter(item => item.promotion);
			case 'more1000':
				return items.filter(item => item.salary > 1000);
			default:
				return items
		}
	}

	render() {
		const { data, part, filter } = this.state
		const countStaff = this.state.data.length
		const countEmploeeBonus = this.state.data.filter(el => el.increase).length
		const countEmploeePromotion = this.state.data.filter(el => el.promotion).length
		const visibleData = this.filterData(this.searchData(data, part), filter)
		return (
			<div className="app" >
				<AppInfo countStaff={countStaff} countEmploeeBonus={countEmploeeBonus} countEmploeePromotion={countEmploeePromotion} />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggle={this.onToggle} />
				<EmployeesAddForm
					addItem={this.addItem}
				/>

			</div>
		)
	}
} 
