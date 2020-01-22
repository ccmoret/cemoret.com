import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<footer>
				<div className="row d-none d-md-block p-1 pb-3">
					<div className="col-12 px-1 pt-5">
						<hr className="" />
					</div>
					<div className="col-4 px-1">
						<a
							href="mailto:cemoret@gmail.com?Subject=Hello%20Carlos%20from%20Portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h5 className="m-0">© Carlos Moret</h5>
						</a>
						<a
							href="mailto:cemoret@gmail.com?Subject=Hello%20Carlos%20from%20Portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h5 className="m-0">cemoret@gmail.com</h5>
						</a>
					</div>
					<div className="col-4 px-1">
						<a
							href="https://github.com/cemoret"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h5 className="m-0">Github</h5>
						</a>
						<a
							href="https://www.instagram.com/cemoret/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h5 className="m-0">Instagram</h5>
						</a>
						<a
							href="https://twitter.com/carlosmoret"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h5 className="m-0">Twitter</h5>
						</a>
					</div>
					<div className="col-4 px-1">
						<Link to={`/`}>
							<h5 className="m-0">T (+34) 674 960 794</h5>
						</Link>
						<h5 className="m-0">All rights reserved.</h5>
					</div>
				</div>

				<div className="row d-md-none p-1 pb-3">
					<div className="col-12 px-1 pt-5">
						<hr className="" />
					</div>
					<div className="col-12 px-1">
						<a
							href="mailto:cemoret@gmail.com?Subject=Hello%20Carlos%20from%20Portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h5 className="m-0">cemoret@gmail.com</h5>
						</a>
						<a
							href="https://github.com/cemoret"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h5 className="m-0">Github</h5>
						</a>
						<a
							href="https://www.instagram.com/cemoret/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h5 className="m-0">Instagram</h5>
						</a>
						<a
							href="https://twitter.com/carlosmoret"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h5 className="m-0">Twitter</h5>
						</a>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
