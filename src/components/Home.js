import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import MyContext from "../MyContext";

// Components
import Menu from "./Menu";
import Footer from "./Footer";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.listenScrollEvent);
	}

	renderImages(link, images) {
		return images.map(({ col, imgcss, image }, index) => {
			return (
				<div key={index} className={`${col} p-1 pb-15`}>
					<Link to={link}>
						<div
							className={imgcss}
							style={{
								backgroundImage: `url(${image})`
							}}
						/>
					</Link>
				</div>
			);
		});
	}

	renderProjects(work) {
		return work.map(({ name, feature, field, link, images }, index) => {
			if (feature === 1) {
				return (
					<div className="row py-1" key={index}>
						<div className="col-12 px-1">
							<hr />
						</div>
						<div className="col-4 px-1 py-1 pb-5">
							<h5 className="m-0">{name}</h5>
						</div>
						<div className="col-4 px-1 py-1">
							<h5 className="m-0">{field}</h5>
						</div>
						<div className="col-4 px-1 py-1">
							<h5 className="m-0">{field}</h5>
						</div>
						{this.renderImages(link, images)}
					</div>
				);
			} else {
				return <span key={index}></span>;
			}
		});
	}

	render() {
		return (
			<MyContext.Consumer>
				{context => (
					<Fragment>
						<div className="container">
							<Menu />
							<div className="row px-1 pt-15">
								<div className="col-12 px-1">
									<hr />
								</div>
								<div className="col-8 px-1 pt-1">
									<h2 className="pb-5 m-0">Design something people want</h2>
								</div>
								<div className="col-12 text-center px-1 py-1">
									<h5 className="m-0">FEATURED WORKS</h5>
								</div>
								<div className="col-12 px-0">
									{this.renderProjects(context.state.work)}
								</div>
							</div>
							<Footer />
							<div className="pb-5 d-md-none"></div>
						</div>
					</Fragment>
				)}
			</MyContext.Consumer>
		);
	}
}

export default Home;
