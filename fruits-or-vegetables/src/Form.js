import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			itemName: '',
			item: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const state = this.state
		state.item = document.getElementById('choices').value
		state.itemName = document.getElementById('itemName').value
		this.props.addItem(state.item, state.itemName)
		this.setState(state)
		document.getElementById('itemName').value = ''
	}

	render() {
		return(

			<div>
				<form>
					<select id = "choices">
						<option value="fruits">Fruit</option>
						<option value="vegetables">Vegetable</option>
					</select>
					<input type="text" placeholder="Item Name" id="itemName" />
					<button onClick={this.handleSubmit}>Add</button>
				</form>
			</div>

		)
	}
}

export default Form;