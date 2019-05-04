import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
	static contextType = LanguageContext;

	render() {
		const text = this.context === 'english' ? 'Name' : 'नाम बताओ';

		return (
			<div className="ui field">
				<label>{text}</label>
				<input />
			</div>
		);
	}
}

export default Field;
