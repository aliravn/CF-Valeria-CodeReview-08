import React, {Component} from "react";
import Header from "./Header";

import './About.css';

class About extends Component {
	render() {
		return (
			<div id="content-container">
				<Header image={require("../img/header_sale.jpg")} />
												
			</div>
		);
	}
} 

export default About;