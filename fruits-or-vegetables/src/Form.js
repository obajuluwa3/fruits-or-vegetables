import React, { Component } from 'react';
import './Form.css';

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
		state.item = document.getElementsByClassName('choices')[0].value
		state.itemName = document.getElementById('itemName').value
		this.props.addItem(state.item, state.itemName)
		this.setState(state)
		document.getElementById('itemName').value = ''
	}

	render() {
		return(

			<div>
				<form className="row justify-content-center">
					<select className="col-sm-4 choices form-control" id="exampleFormControlSelect1">
						<option value="fruits">Fruit</option>
						<option value="vegetables">Vegetable</option>
					</select>
					<div className="col-sm-4 myForm input-group">
				      <input type="text" className="form-control" placeholder="Item Name" id="itemName" />
				      <span className="input-group-btn">
				        <button className="btn btn-secondary" type="button" onClick={this.handleSubmit}>Add</button>
				      </span>
				    </div>
				</form>
			</div>


		)
	}
}

export default Form;