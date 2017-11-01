import React, { Component } from 'react';

class Form extends Component {
	render() {
		return(

			<div>
				<form>
					<select>
						<option value="Fruit">Fruit</option>
						<option value="Vegetable">Vegetable</option>
					</select>
					<input type="text" placeholder="Item Name" />
					<button>Add</button>
				</form>
			</div>

		)
	}
}

export default Form;