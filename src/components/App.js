import React, { Component } from 'react';
import '../index.css';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import UserCreate from './UserCreate';

class App extends Component {
	state = {
		language: 'english',
		buttonColor: ''
	}

	// callback functions are generally arrow functions
	onLanguageChange = value => {
		this.setState({ language: value })
	}

	onButtonColorChange = color => {
		this.setState({ buttonColor: color })
	}

	render() {
		return (
			<div>
				<div className="ui menu">
					<button className="item button">Select a language:</button>
					<button className="item button" onClick={() => this.onLanguageChange('english')}>
						<i className="flag us"/>
					</button>
					<button className="item button" onClick={() => this.onLanguageChange('hindi')} >
						<i className="flag in"/>
					</button>
				</div>
				<div className="ui container">
				<LanguageContext.Provider value={this.state.language}>
				<ColorContext.Provider value={this.state.buttonColor}>
					<UserCreate />
				</ColorContext.Provider>
				</LanguageContext.Provider>
				<div style={{ marginTop: '20px' }}>
				   <div>Button Color Change</div>
				   <br />
					<button className="ui primary button" onClick={() => this.onButtonColorChange('primary')}>Blue Color</button>
					<button className="ui secondary button" onClick={() => this.onButtonColorChange('')}>No color</button>
				</div>
				</div>
			</div>
		);
	}
}

export default App;
