import { Component } from 'react'

import './employees-list-item.css'

export default class EmployeesListItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			increase: false,
			promotion: false
		}


	}
	onIncreace = () => {
		this.setState(({ increase }) => ({
			increase: !increase
		}))
	}
	toPromotion = () => {
		this.setState(({ promotion }) => ({
			promotion: !promotion
		}))
	}
	onDelete = () => {
		console.log('z znac')
	}

	render() {
		const { name, salary, onDelete } = this.props
		const { increase, promotion } = this.state
		let styleProperty = "list-group-item d-flex justify-content-between"
		if (increase) {
			styleProperty += ' increase';
		}
		if (promotion) {
			styleProperty += ' like';
		}
		return (
			<li className={styleProperty}>
				<span onClick={this.toPromotion} className="list-group-item-label">{name}</span>
				<input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
				<div className='d-flex justify-content-center align-items-center'>
					<button onClick={this.onIncreace} type="button"
						className="btn-cookie btn-sm ">
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
						className="btn-trash btn-sm "
						onClick={onDelete}
					>
						<i className="fas fa-trash"></i>
					</button>
					<i onClick={this.toPromotion} className="fas fa-star"></i>
				</div>
			</li>
		)
	}
}

