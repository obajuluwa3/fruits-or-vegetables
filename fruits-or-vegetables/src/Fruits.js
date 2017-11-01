import React, { Component } from 'react';
import './Fruits.css';

class Fruit extends Component {
	render() {
		const fruits = this.props.fruits.map((fruit, i) => {
			return <li key={i} className="fruits">{fruit}<button onClick={() => {this.props.removeItem(i, 'fruits')}}>remove</button></li>
		})
		return(

			<div>
				<h3>Fruits</h3>
				<ul>
					{fruits}
				</ul>
			</div>

		)
	}
}

export default Fruit;