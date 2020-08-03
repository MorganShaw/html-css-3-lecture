import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super()
		this.state = {
			dropDownVisible: false,
			//We initialize value to false because we don't want drop down menu to appear until we click on menu.
			clockwise: true
		}
	}

	toggleDropDown = () => {
		this.setState({
			//We're saying that when we click on the button, it'll toggle and update the value in state of dropDownVisible.
			dropDownVisible: !this.state.dropDownVisible
		})
	}

	toggleSpin = () => {
		this.setState({
			clockwise: !this.state.clockwise
		})
	}
	render() {
		return (
			<div className="App">
				<header className="main-header">
					<img
						src="https://v.fastcdn.co/u/420f55dd/28913912-0-dm-white-logo-2.png"
						alt="DevMountain"
					/>
					<nav className="desktop-menu">
						<span>Home</span>
						<span>About</span>
						<span>Contact</span>
					</nav>
					<div className="dropdown" onClick={this.toggleDropDown}>Menu</div>
					{/* don't need any parameters in the function, so we don't need an arrow function when we invoke the toggleDropDown function. */}
					{this.state.dropDownVisible ? (
						//Using a ternary to see if the value of this.state.dropDownVisible
						<nav className="mobile-menu">
							<span>Home</span>
							<span>About</span>
							<span>Contact</span>
						</nav>
					) : null}
				</header>
				<section className="animation-transition">
					<img 
						className={this.state.clockwise ? "react-logo spin-clockwise" : "react-logo spin-counterClockwise"} 
						src={logo} 
						alt="React.js"
						onClick={this.toggleSpin} 
					/>
					<div className="transition-circle">Hover your mouse over me!</div>
				</section>
			</div>
		);
	}
}

export default App;
