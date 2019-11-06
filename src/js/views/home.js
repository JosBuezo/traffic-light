import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedlight: null
		};
	}

	render() {
		let selectRedClass = "";
		if (this.state.clickedLight == "red") selectRedClass = "selected";
		let selectYellowClass = "";
		if (this.state.clickedLight == "yellow") selectYellowClass = "selected";
		let selectGreenClass = "";
		if (this.state.clickedLight == "green") selectGreenClass = "selected";
		return (
			<div className="selectLight">
				<div className={"red light " + selectRedClass} onClick={() => this.setState({ clickedLight: "red" })} />
				<div
					className={"yellow light " + selectYellowClass}
					onClick={() => this.setState({ clickedLight: "yellow" })}
				/>
				<div
					className={"green light " + selectGreenClass}
					onClick={() => this.setState({ clickedLight: "green" })}
				/>
			</div>
		);
	}
}

export default Home;
