import React, { Component } from 'react';
import './Vegetables.css';

class Vegetable extends Component {
	render() {
		const vegetables = this.props.vegetables.map((vegetable, i) => {
			return <li key={i}>{vegetable}<button onClick={() => {this.props.removeItem(i, 'vegetables')}}>remove</button></li>
		})
		return(

			<div>
				<h3>Vegetables</h3>
				<ul>
					{vegetables}
				</ul>
			</div>

		)
	}
}

export default Vegetable;