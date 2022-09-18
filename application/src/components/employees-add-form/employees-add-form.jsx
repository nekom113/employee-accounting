import { Component } from 'react'

import './employees-add-form.css'

export default class EmployeesAddForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}
	onValueChange = (ev) => {
		this.setState({
			[ev.target.name]: ev.target.value // в [] - просиходит формирование свойства, которое варьируется в зависимости от инпута. Предварительно назначаем атрибут name на нужный инпут и от этого отталкиваться, они должны совпадать с названиями свойств стейта
		})
	}
	render() {
		const { name, salary } = this.state
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex">
					<input type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name="name"
						value={name}//управляемые компоненты, нужно чтобы реакт компонент рендерил форму и контролировал ее поведение в ответ на пользовательский ввод и в него помещать значение стейта. 
						onChange={this.onValueChange} />

					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name="salary"
						value={salary}//управляемые компоненты, нужно чтобы реакт компонент рендерил форму и контролировал ее поведение в ответ на пользовательский ввод и в него помещать значение стейта. 
						onChange={this.onValueChange} />

					<button type="submit"
						className="btn btn-outline-light">Добавить</button>
				</form>
			</div>
		)
	}
}
