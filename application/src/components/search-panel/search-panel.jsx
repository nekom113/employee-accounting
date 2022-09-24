
import { Component } from 'react'
import './search-panel.css'
export default class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			part: ''
		}
	}
	onUpdateSearch = (event) => {
		const part = event.target.value;
		this.setState({ part })
		this.props.onUpdateSearch(part)
	}
	render() {
		return (
			<input
				type="text"
				className="form-control serch-input"
				placeholder="Найти сотрудника"
				value={this.state.part}
				onChange={this.onUpdateSearch} />
		)
	}
}
