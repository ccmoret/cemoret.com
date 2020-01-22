import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// Components
import Menu from "../Menu";
import Footer from "../Footer";

class CafeteriaIndustrial extends Component {
	constructor(props) {
		super(props);
		this.state = {
			me: {
				name: `Cafeteria Industrial`,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_01.jpg?alt=media&token=1642a1ed-0670-435a-b835-828f227c2d6c`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcover_web_cafeteria_industrial.jpg?alt=media&token=c3bbcbc3-8cbd-40b0-9cb8-4c9c551f474e`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
			}
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.listenScrollEvent);
	}

	render() {
		const { name, img1, img2, img3 } = this.state.me;
		return (
			<div className="container">
				<div className="pb-5">
					<Menu
						back={`/`}
						work={`cafeteria industrial`}
						worknumber={`14/15`}
						foward={`/carlosmoret`}
					/>
				</div>
				<div className="row pt-5 px-2">
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-3 px-1">
						<h5 className="m-0">2020</h5>
					</div>
					<div className="col-3 px-1">
						<h5 className="m-0">Food</h5>
					</div>
					<div className="col-3 px-1">
						<h5 className="m-0">Services:</h5>
						<h5 className="m-0">Web UX & UI Design</h5>
					</div>
					<div className="col-3 px-1">
						<h5 className="m-0">Team: </h5>
						<h5 className="m-0">Paula Rufi</h5>
						<h5 className="m-0">Maria Camila Alfonso</h5>
						<h5 className="m-0">Alejandro de Castillo Francisco</h5>
						<h5 className="m-0">Carlos Moret</h5>
					</div>
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-6 px-1">
						<h5 className="m-0">Cafeteria Industrial</h5>
					</div>
					<div className="col-6 px-1">
						<h5 className="m-0">
							Clothing rental brand back in 2015 that combine the streetwear
							trend that was starting in Chile. We were tasked with positioning
							and naming, as well as developing a robust website exploration.
						</h5>
					</div>
				</div>
				<div className="row p-1 pt-5">
					<div className="col-12 px-1">
						<h6>{name.toUpperCase()}</h6>
					</div>
					<div className="col-3 p-1">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(${img1})`
							}}
						/>
					</div>
					<div className="col-6 p-1">
						<div
							className="img-work-h"
							style={{
								backgroundImage: `url(${img2})`
							}}
						/>
					</div>
					<div className="col-3 p-1">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(${img3})`
							}}
						/>
					</div>
				</div>
				<Footer />
				<div className="pb-5 d-md-none"></div>
			</div>
		);
	}
}

export default CafeteriaIndustrial;
