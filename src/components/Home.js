import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Menu from "./Menu";
import Footer from "./Footer";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					name: `Cafeteria Industrial`,
					field: `Food`,
					link: `/cafeteriaindustrial`,
					col: `col-6`,
					imgcss: `img-work-h`,
					description: `Proyecto de Master ELISAVA realizado terminado a principios de 2020 en la que se implemento metodologias UX y UI`,
					team: `UX / UI / Code : Alejandro de Francisco Castillo / Paula Rufi / Maria Camila / Carlos Moret`,
					images: [
						{
							col: `col-4`,
							imgcss: `img-work-v`,
							image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_01.jpg?alt=media&token=1642a1ed-0670-435a-b835-828f227c2d6c`
						},
						{
							col: `col-4`,
							imgcss: `img-work-v`,
							image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fci2.jpg?alt=media&token=94298489-4638-44f7-a156-3a4894ffde4a`
						},
						{
							col: `col-4`,
							imgcss: `img-work-v`,
							image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fci3.jpg?alt=media&token=0f43455a-96f0-494a-b7ac-b7e0e03594fe`
						}
					]
				},
				{
					name: `the SaMy Company`,
					field: `Technology`,
					link: `/cafeteriaindustrial`,
					col: `col-6`,
					imgcss: `img-work-h`,
					description: `Your talent is part of you`,
					team: ``,
					images: [
						{
							col: `col-4`,
							imgcss: `img-work-v`,
							image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_01.jpg?alt=media&token=1642a1ed-0670-435a-b835-828f227c2d6c`
						},
						{
							col: `col-4`,
							imgcss: `img-work-v`,
							image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fci2.jpg?alt=media&token=94298489-4638-44f7-a156-3a4894ffde4a`
						},
						{
							col: `col-4`,
							imgcss: `img-work-v`,
							image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fci3.jpg?alt=media&token=0f43455a-96f0-494a-b7ac-b7e0e03594fe`
						}
					]
				},
				{
					name: `Follow the Forest`,
					field: `Fashion`,
					link: `/followtheforest`,
					col: `col-6`,
					imgcss: `img-work-h`,
					description: `Follow the Forest was a new clothing rental brand back in 2015 that combine the streetwear trend that was starting in Chile.`,
					team: `UX / UI / Code : Carlos Moret Icons: Estudio Prado`,
					images: [
						{
							col: `col-4`,
							imgcss: `img-work-v`,
							image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_01.jpg?alt=media&token=1642a1ed-0670-435a-b835-828f227c2d6c`
						},
						{
							col: `col-4`,
							imgcss: `img-work-v`,
							image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fci2.jpg?alt=media&token=94298489-4638-44f7-a156-3a4894ffde4a`
						},
						{
							col: `col-4`,
							imgcss: `img-work-v`,
							image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fci3.jpg?alt=media&token=0f43455a-96f0-494a-b7ac-b7e0e03594fe`
						}
					]
				}
			]
		};
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

	renderProjects(projects) {
		return projects.map(({ name, field, link, images }, index) => {
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
		});
	}

	render() {
		const { projects } = this.state;
		return (
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
					<div className="col-12 px-0">{this.renderProjects(projects)}</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;
