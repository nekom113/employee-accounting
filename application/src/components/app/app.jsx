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
			rise: false,
			id: nextId()
		}


		this.setState(({ data }) => {
			const newData = [...data, newItem]
			return {
				data: newData
			}
		})
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


	onToggleIncrease = (id) => {
		// this.setState(({ data }) => {
		// 	const index = data.findIndex(el => el.id === id)
		// 	const old = data[index];
		// 	const newItem = { ...old, increase: !old.increase }
		// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

		// 	return {
		// 		data: newArr
		// 	}
		// })
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, increase: !item.increase }
				}
				return item
			})
		}))
	}


	onToggleRise = (id) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, promotion: !item.promotion }
				}
				return item
			})
		}))	
	}



	render() {
		const countStaff = this.state.data.length
		const countEmploeeBonus = this.state.data.filter(el => el.increase).length
		const countEmploeePromotion = this.state.data.filter(el => el.promotion).length
		return (
			<div className="app" >
				<AppInfo countStaff={countStaff} countEmploeeBonus={countEmploeeBonus} countEmploeePromotion={countEmploeePromotion} />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggle={this.onToggle} />
				<EmployeesAddForm
					addItem={this.addItem}
				/>

			</div>
		)
	}
} 
