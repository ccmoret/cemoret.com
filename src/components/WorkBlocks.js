import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import MyContext from "../MyContext";

// Components
import Menu from "./Menu";
// import Footer from './Footer';

class WorkBlocks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.listenScrollEvent);
	}

	changeIndex = index => {
		this.setState({ index: index });
	};

	renderImageBlocks(work) {
		return <div className="row">{this.renderImage(work)}</div>;
	}

	renderImage(work) {
		return work.map(({ link, col, imgcss, img1 }, index) => {
			return (
				<div key={index} className={`${col} p-1`}>
					<Link to={link}>
						<div
							className={imgcss}
							style={{
								backgroundImage: `url(${img1})`
							}}
						/>
					</Link>
				</div>
			);
		});
	}

	render() {
		return (
			<MyContext.Consumer>
				{context => (
					<Fragment>
						<div className="container">
							<Menu controls={`swichback`} link={`/work`} work={`list`} />
							<div className="row px-0 pt-5">
								<div className="col-12 px-1">
									{this.renderImageBlocks(context.state.work)}
								</div>
							</div>
							{/* <Footer /> */}
							<div className="pb-5 d-md-none"></div>
						</div>
					</Fragment>
				)}
			</MyContext.Consumer>
		);
	}
}

export default WorkBlocks;
