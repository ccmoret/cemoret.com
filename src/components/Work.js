import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import MyContext from "../MyContext";

// Components
import Menu from "./Menu";
// import Footer from './Footer';

class Work extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.listenScrollEvent);
	}

	renderProjectsList(work) {
		function pad(d) {
			return d < 10 ? "0" + d.toString() : d.toString();
		}
		return work.map(({ name, link, description, field }, index) => {
			return (
				<Link to={`${link}`} key={index}>
					<div
						onMouseEnter={() => this.changeIndex(index)}
						// style={{ cursor: `url(${img}) , auto` }}
						className="row link"
					>
						<div className="col-2 p-1">
							<h3 className="m-0">{pad(14 - index)}.</h3>
						</div>
						<div className="col-md-4 col-sm-6 col-10 p-1">
							<h3 className="m-0">{name}</h3>
						</div>
						<div className="col-md-6 col-4 d-none d-sm-block p-1">
							<h3 className="m-0">{field}</h3>
						</div>
					</div>
				</Link>
			);
		});
	}

	changeIndex = index => {
		this.setState({ index: index });
	};

	renderProjectsImages(work) {
		const { index } = this.state;
		if (index === null) {
			return (
				<div className="row h-100 py-1">
					<div className="col-12">Hola</div>
				</div>
			);
		} else {
			return (
				<div className="row h-100 py-1">
					<div className="col-6 px-1">
						<img
							src={work[index].img1}
							className="img-onMouseEnter"
							alt={work[index].name}
						/>
					</div>
					<div className="col-6 px-1">
						<img
							src={work[index].img1}
							className="img-onMouseEnter"
							alt={work[index].name}
						/>
					</div>
				</div>
			);
		}
	}

	renderList(work) {
		const { index } = this.state;
		return (
			<div
				style={{
					backgroundColor: `${work[index].backgroundColor}`,
					color: `${work[index].color} !important`,
					zIndex: `-100`,
					transition: `background-color 0.5s ease-out`
				}}
				className="container"
			>
				<Menu controls={`swich`} link={`/workblocks`} work={`blocks`} />

				<div className="row px-0 pt-5">
					<div className="col-12 px-2">
						<hr />
					</div>
					<div className="col-12 px-2">{this.renderProjectsList(work)}</div>
					<div className="col-12 d-none d-sm-block px-1">
						{this.renderProjectsImages(work)}
					</div>
				</div>
				{/* <Footer /> */}
				<div className="pb-5 d-md-none"></div>
			</div>
		);
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

	renderBlocks(work) {
		return (
			<div className="container">
				<Menu controls={`swichback`} link={`/work`} work={`list`} />
				<div className="row px-0 pt-5">
					<div className="col-12 px-1">{this.renderImageBlocks(work)}</div>
				</div>
				{/* <Footer /> */}
				<div className="pb-5 d-md-none"></div>
			</div>
		);
	}

	renderWorks(status, work) {
		if (status === 0) {
			return <div>{this.renderList(work)}</div>;
		} else {
			return (
				<div>
					<div>{this.renderBlocks(work)}</div>
				</div>
			);
		}
	}

	render() {
		return (
			<MyContext.Consumer>
				{context => (
					<Fragment>
						<div>
							{this.renderWorks(context.state.status, context.state.work)}
						</div>
					</Fragment>
				)}
			</MyContext.Consumer>
		);
	}
}

export default Work;
