import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// Components
import Menu from "./Menu";
// import Footer from './Footer';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					id: `01`,
					name: `Cafeteria Industrial`,
					description: `Proyecto de Master ELISAVA realizado terminado a principios de 2020 en la que se implemento metodologias UX y UI`,
					team: `UX / UI / Code : Alejandro de Francisco Castillo / Paula Rufi / Maria Camila / Carlos Moret`,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_01.jpg?alt=media&token=1642a1ed-0670-435a-b835-828f227c2d6c`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcover_web_cafeteria_industrial.jpg?alt=media&token=c3bbcbc3-8cbd-40b0-9cb8-4c9c551f474e`
				},
				{
					id: `02`,
					name: `the SaMy Company`,
					description: `Your talent is part of you`,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct02.jpg?alt=media&token=98426cbb-cc88-4f90-9cd2-09ae1265c484`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					id: `03`,
					name: `Follow the Forest`,
					description: `Follow the Forest was a new clothing rental brand back in 2015 that combine the streetwear trend that was starting in Chile.`,
					team: `UX / UI / Code : Carlos Moret Icons: Estudio Prado`,
					img1: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct02.jpg?alt=media&token=98426cbb-cc88-4f90-9cd2-09ae1265c484`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				}
			]
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.listenScrollEvent);
	}

	renderProjects(projects) {
		return projects.map(({ id, name, description, team, img1, img2, img3 }) => {
			return (
				<div className="row py-1" key={id}>
					<div className="col-3 px-1">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(${img1})`
							}}
						/>{" "}
						{/* <img src={`${img1}`} className="img-work-sm" alt={`${name + id}`} /> */}
					</div>
					<div className="col-3 px-1">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(${img2})`
							}}
						/>{" "}
						{/* <img src={`${img2}`} className="img-work-sm" alt={`${name + id}`} /> */}
					</div>
					<div className="col-6 px-1">
						<div
							className="img-work-h"
							style={{
								backgroundImage: `url(${img3})`
							}}
						/>{" "}
						{/* <img src={`${img3}`} className="img-work-sm" alt={`${name + id}`} /> */}
					</div>
					<div className="col-3 px-1">
						<h6>{name}</h6>
						<h6>{description}</h6>
					</div>
					<div className="col-3 px-1" />
					<div className="col-3 px-1">
						<h6>TEAM:</h6>
						<h6>{team}</h6>
					</div>
					<div className="col-3 px-1" />
					<div className="col-12 px-1 py-4" />
				</div>
			);
		});
	}

	render() {
		const { projects } = this.state;
		return (
			<div className="container">
				<div className="pb-100">
					<Menu />
				</div>
				<div className="row px-2">
					<div className="col-8 px-1 pt-1">
						<h6>
							Carlos Moret - Design something people want
							<span role="img" aria-label="emoji">
								🥤
							</span>
						</h6>
					</div>
					<div className="col-8 px-1 pb-1">
						<h6>
							Based in Barcelona and working worldwide, I focuses on all phases
							of a product, from discovery to delivery and iteration, and helps
							brands to guide decisions based on user-centered design.
						</h6>
					</div>
					<div className="col-12 px-0">{this.renderProjects(projects)}</div>
				</div>
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Home;
