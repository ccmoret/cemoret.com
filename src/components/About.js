import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// Components
import Menu from "./Menu";
// import Footer from './Footer';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			me: {
				name: `Carlos Moret`,
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
				<Menu />

				<div className="row pt-15 px-2">
					<div className="col-12 px-1">
						<hr />
					</div>
					<div className="col-md-9 col-12 px-1 py-1">
						<h2 className="m-0">
							Based in Barcelona and working worldwide, I focuses on all phases
							of a product, from discovery to delivery and iteration, and helps
							brands to guide decisions based on user-centered design.
						</h2>
					</div>
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-3 col-6 px-1 pb-5">
						<h5 className="m-0">Technologies:</h5>
						<h5 className="m-0">NodeJS</h5>
						<h5 className="m-0">Express</h5>
						<h5 className="m-0">MongoDB</h5>
						<h5 className="m-0">GraphQL</h5>
						<h5 className="m-0">Apollo Client</h5>
						<h5 className="m-0">React</h5>
						<h5 className="m-0">HTML5</h5>
						<h5 className="m-0">Javascript</h5>
						<h5 className="m-0">Google Maps API</h5>
						<h5 className="m-0">Stripe API</h5>
						<h5 className="m-0">Swift</h5>
						<h5 className="m-0">Unix Terminal</h5>
					</div>
					<div className="col-md-3 col-6 px-1">
						<h5 className="m-0">Software:</h5>
						<h5 className="m-0">Atom</h5>
						<h5 className="m-0">Sketch App</h5>
						<h5 className="m-0">Figma</h5>
						<h5 className="m-0">Invision</h5>
						<h5 className="m-0">Invision Studio</h5>
						<h5 className="m-0">Adobe Illustrator</h5>
						<h5 className="m-0">Lightroom</h5>
						<h5 className="m-0">Xcode</h5>
					</div>
					<div className="col-md-3 col-6 px-1">
						<h5 className="m-0">Services:</h5>
						<h5 className="m-0">Art Direction</h5>
						<h5 className="m-0">Naming</h5>
						<h5 className="m-0">Branding</h5>
						<h5 className="m-0">Strategy</h5>
						<h5 className="m-0">Web Design UX & UI</h5>
						<h5 className="m-0">Development</h5>
						<h5 className="m-0">Packaging</h5>
						<h5 className="m-0">Photography</h5>
					</div>
					<div className="col-md-3 col-6 px-1 d-none d-md-block">
						<h5 className="m-0">Representation:</h5>
						<h5 className="m-0 pt-2">Spain</h5>
						<h5 className="m-0">Belen Newman</h5>
						<h5 className="m-0">belenewman@gmail.com</h5>
						<h5 className="m-0">(+34) 634 758 671</h5>
						<h5 className="m-0 pt-2">France</h5>
						<h5 className="m-0">Tom Fabre</h5>
						<h5 className="m-0">tomfabre@gmail.com</h5>
						<h5 className="m-0">(+33) 7 83 83 56 54</h5>
						<h5 className="m-0 pt-2">US & Canada</h5>
						<h5 className="m-0">Diego Auvert</h5>
						<h5 className="m-0">team@proyon.ca</h5>
						<h5 className="m-0">(+1)(647) 648-2098</h5>
						<h5 className="m-0 pt-2">Latam</h5>
						<h5 className="m-0">Juan Meriches</h5>
						<h5 className="m-0">jmeriches@gmail.com</h5>
						<h5 className="m-0">(+56) 9 9997 8007</h5>
						<h5 className="m-0 pt-4">General Inquiries:</h5>
						<h5 className="m-0 pt-2">Carlos Moret</h5>
						<h5 className="m-0">cemoret@gmail.com</h5>
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
				{/* <Footer /> */}
				<div className="pb-5 d-md-none"></div>
			</div>
		);
	}
}

export default About;
