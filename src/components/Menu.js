import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderMenuLeft() {
		return (
			<img
				className="isotype"
				src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fface.svg?alt=media&token=06620e07-5dcf-441e-b06a-887782764889"
				alt="face icon"
			/>
		);
	}

	renderMenuCenter(work, back, foward, link) {
		if (work === "" || work == null) {
			return <span></span>;
		}
		if (work === "list") {
			return (
				<Link to={link}>
					<div className="text-center px-2">
						<img
							className="isotype"
							src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fworklist.svg?alt=media&token=3aadb39c-5bfe-4a86-84e2-574d2f7175c0"
							alt="face icon"
						/>
					</div>
				</Link>
			);
		}
		if (work === "blocks") {
			return (
				<Link to={link}>
					<div className="text-center px-2">
						<img
							className="isotype"
							src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fworkblocks.svg?alt=media&token=f289cdd9-d329-4668-946f-3332cc756182"
							alt="face icon"
						/>
					</div>
				</Link>
			);
		} else {
			return (
				<div className="text-center px-2">
					<ul>
						<li className="inline-block">
							<Link to={back}>
								<h3 className="px-3">{`<`}</h3>
							</Link>
						</li>
						<li className="inline-block">
							<h3 className="">{work}</h3>
						</li>
						<li className="inline-block">
							<Link to={foward}>
								<h3 className="px-3">{`>`}</h3>
							</Link>
						</li>
					</ul>
				</div>
			);
		}
	}

	renderMenuRight() {
		return (
			<div>
				<Link to={`/about`}>
					<div className="float-right pl-2">
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
		);
	}

	render() {
		const { link, work, back, foward } = this.props;
		return (
			<div className="">
				<header className="menu">
					<div className="row py-2">
						<div className="col-3 px-2">{this.renderMenuLeft()}</div>
						<div className="col-6 px-2">
							{this.renderMenuCenter(work, back, foward, link)}
						</div>
						<div className="col-3 px-2">{this.renderMenuRight()}</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Menu;
