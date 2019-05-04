import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
	static contextType = LanguageContext;

	render() {
		// console.log(this.context);
		const text = this.context === 'english' ? 'Submit' : 'जमा करें';
		return (
			<div>
				<ColorContext.Consumer>
				{ (color) => (
					<button className={`ui icon right labeled ${color} button`}>
					<i aria-hidden="true" className="right arrow icon"></i>{text}
					</button>
					)
				}
				</ColorContext.Consumer>
			</div>
		);
	}
}

export default Button;
