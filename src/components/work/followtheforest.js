import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// Components
import Menu from "../Menu";
import Footer from "../Footer";

class FollowTheForest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			me: {
				name: `Follow the forest`,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/about%2Fsleepyhead-perdiz-by-querida-01.jpg?alt=media&token=ac1963d5-4762-4dde-bbb4-a9b05d43fe85`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/about%2Fsleepyhead-perdiz-by-querida-06.jpg?alt=media&token=aba17642-3d22-48c6-8721-0a15df22b586`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/about%2Fmacba-the-hermetic-bell-querida-45.jpg?alt=media&token=d161abbc-74a1-4506-9356-af1eccecd474`
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
						back={`/carlosmoret`}
						work={`follow the forest 1/15`}
						foward={`/`}
					/>
				</div>
				<div className="row pt-5 px-2">
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-3 px-1">
						<h5 className="m-0">2013</h5>
					</div>
					<div className="col-3 px-1">
						<h5 className="m-0">Fashion</h5>
					</div>
					<div className="col-3 px-1">
						<h5 className="m-0">Services:</h5>
						<h5 className="m-0">Brand Identity</h5>
						<h5 className="m-0">Web UX & UI Design</h5>
					</div>
					<div className="col-3 px-1">
						<h5 className="m-0">Team: </h5>
						<h5 className="m-0">Estudio Prado</h5>
						<h5 className="m-0">Carlos Moret</h5>
					</div>
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-6 px-1">
						<h5 className="m-0">Follow the Forest</h5>
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
					<div className="col-4 p-1">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(${img1})`
							}}
						/>
					</div>
					<div className="col-4 p-1">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(${img2})`
							}}
						/>
					</div>
					<div className="col-4 p-1">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(${img3})`
							}}
						/>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default FollowTheForest;
