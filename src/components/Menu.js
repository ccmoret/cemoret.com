import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderMenuLeft(controls, link) {
		if (controls === "" || controls === null) {
			return <span></span>;
		} else {
			return (
				<div>
					<Link to={link}>
						<h3 className="menu-link">{controls}</h3>
					</Link>
				</div>
			);
		}
	}

	render() {
		const { controls, link, work } = this.props;
		return (
			<header>
				<div className="row py-2">
					<div className="col-3 px-2">
						{this.renderMenuLeft(controls, link)}
					</div>
					<div className="col-6 px-2">
						<Link to={`/`}>
							<div className="text-center px-2">
								<h3 className="menu-link">{work}</h3>
							</div>
						</Link>
					</div>
					<div className="col-3 px-0">
						<Link to={`/about`}>
							<div className="float-right px-2">
								<h3 className="menu-link">ABOUT</h3>
							</div>
						</Link>
						<Link to={`/work`}>
							<div className="float-right px-2">
								<h3 className="menu-link">WORK</h3>
							</div>
						</Link>
						<Link to={`/`}>
							<div className="float-right px-2">
								<h3 className="menu-link">HOME</h3>
							</div>
						</Link>
					</div>
				</div>
			</header>
		);
	}
}

export default Menu;
