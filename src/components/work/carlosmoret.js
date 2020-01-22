import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// Components
import Menu from "../Menu";
import Footer from "../Footer";

class CarlosMoret extends Component {
	constructor(props) {
		super(props);
		this.state = {
			me: {
				name: `Carlos Moret | Portfolio`,
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
						back={`/cafeteriaindustrial`}
						work={`carlos moret`}
						worknumber={`15/15`}
						foward={`/followtheforest`}
					/>
				</div>
				<div className="row pt-5 px-2">
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-3 col-6 px-1">
						<h5 className="m-0">2020</h5>
					</div>
					<div className="col-md-3 col-6 px-1">
						<h5 className="m-0">Portfolio</h5>
					</div>
					<div className="col-md-3 col-6 px-1">
						<h5 className="m-0">ELISAVA UI CLASS</h5>
					</div>
					<div className="col-md-3 col-6 px-1">
						<h5 className="m-0">Review by</h5>
						<h5 className="m-0">Vicky Gerchinhoren</h5>
					</div>
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0 pb-5">Portfolio</h5>
					</div>
					<div className="col-md-6 col-12 px-1">
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
					<div className="col-md-4 col-12 p-1">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(${img1})`
							}}
						/>
					</div>
					<div className="col-md-4 col-12 p-1">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(${img2})`
							}}
						/>
					</div>
					<div className="col-md-4 col-12 p-1">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(${img3})`
							}}
						/>
					</div>

					<div className="col-12 text-center px-1  pt-10 pb-1">
						<h5 className="m-0">GUIDELINES</h5>
					</div>
					<div className="col-12 px-1">
						<hr className="" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0 pb-5">Color palette</h5>
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0">
							The main colors are white and black. They are used to provide
							simplicity and consistency throughout the portfolio. This black
							and white palette is chosen to avoid competition between the
							colors of the brands shown.
						</h5>
						<h5 className="m-0 pt-3">
							There is the option of using a tool of random colors, which are
							mainly pure RGB colors, which generate a large contrast between
							black typography and photos.
						</h5>

						<h5 className="m-0 pt-5 pb-3">Primary Colors</h5>
						<div className="inline-block px-2">
							<svg height="100" width="100">
								<circle
									cx="50"
									cy="50"
									r="45"
									stroke="black"
									strokeWidth="3"
									fill="#FFFFFF"
								/>
							</svg>
							<div className="h5 m-0">White</div>
							<div className="h5 m-0">HEX #FFFFFF</div>
						</div>
						<div className="inline-block px-2">
							<svg height="100" width="100">
								<circle
									cx="50"
									cy="50"
									r="45"
									stroke="black"
									strokeWidth="3"
									fill="#323232"
								/>
							</svg>
							<div className="h5 m-0">Black</div>
							<div className="h5 m-0">HEX #323232</div>
						</div>

						<h5 className="m-0 pt-5 pb-3">Secundary Colors</h5>
					</div>

					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0 pb-5">Typography</h5>
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0">Primary Typography: Fira Monospaced</h5>
						<h5 className="m-0 pt-3">
							The choice is inspired by the default typography of the Unix
							Terminal the San Francisco Mono de Apple (SF Mono). But we did not
							want to give such a crude touch to the content and we wanted to
							improve the user's reading, that is why the Fira monospaced
							typeface was chosen.
						</h5>
						<h5 className="m-0 pt-3">
							Fira is a humanist typeface designed by Erik Spiekermann, Ralph du
							Carrois, Anja Meiners and Botio Nikoltchev for the Firefox OS.
						</h5>
						<h5 className="m-0 pt-3">
							Four sizes are used throughout the project:
						</h5>
						<h2 className="m-0 pt-3">35 px - Fira Monospaced</h2>
						<h6 className="m-0 pt-3">25 px - Fira Monospaced</h6>
						<h3 className="m-0 pt-3">20 px - Fira Monospaced</h3>
						<h4 className="m-0 pt-3">16 px - Fira Monospaced</h4>
					</div>

					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0 pb-5">Iconography</h5>
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0">
							The iconography is connected to the main typography (Fira Mono) at
							a fundamental level to maximize recognition and consistency.
						</h5>
						<h5 className="m-0 pt-3">
							The icons were designed to generate curiosity in the user and
							encourage exploration on the page. There are icons that do not
							generate a quick recognition, instead they generate an emosion
							when they are being used.
						</h5>
						<h5 className="m-0 pt-3">
							The icon system was generated with the combination of basic
							geometric shapes (circles, triangles, squares and rectangles),
							lines and points, and a thick line present in each of them.
						</h5>
					</div>
					<div className="col-md-6 col-12 px-1 pt-5 d-none d-md-block"></div>
					<div className="col-md-6 col-12 px-1 pt-5">
						<span className="px-2">
							<img
								className="isotype-system"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fcircle.svg?alt=media&token=8f7b20c0-9456-4cae-8b7d-c65545dfbc97"
								alt="circle icon"
							/>
						</span>
						<span className="px-2">
							<img
								className="isotype-system"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fface.svg?alt=media&token=06620e07-5dcf-441e-b06a-887782764889"
								alt="face icon"
							/>
						</span>
						<span className="px-2">
							<img
								className="isotype-system"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fhappyfaca.svg?alt=media&token=989fbc71-2bfa-4702-8db7-d0616c9d46a3"
								alt="happyface icon"
							/>
						</span>
					</div>
					<div className="col-md-6 col-12 px-1 pt-5 d-none d-md-block"></div>
					<div className="col-md-6 col-12 px-1 pt-5">
						<span className="px-2">
							<img
								className="isotype-system"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fsquare.svg?alt=media&token=7ce9c3da-f4d2-4bd5-b592-7acce66404bd"
								alt="square icon"
							/>
						</span>

						<span className="px-2">
							<img
								className="isotype-system"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fworklist.svg?alt=media&token=3aadb39c-5bfe-4a86-84e2-574d2f7175c0"
								alt="worklist icon"
							/>
						</span>
						<span className="px-2">
							<img
								className="isotype-system"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fworkblocks.svg?alt=media&token=f289cdd9-d329-4668-946f-3332cc756182"
								alt="workblocks icon"
							/>
						</span>
						<span className="px-2">
							<img
								className="isotype-system"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fcomputer.svg?alt=media&token=231e3a21-d4ea-4253-976f-58913ca87966"
								alt="computer icon"
							/>
						</span>
						<span className="px-2">
							<img
								className="isotype-system"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fcellphone.svg?alt=media&token=c22a5ba1-6a0f-4096-8709-4b7d5f074bee"
								alt="cellphone icon"
							/>
						</span>
					</div>
				</div>
				<Footer />
				<div className="pb-5 d-md-none"></div>
			</div>
		);
	}
}

export default CarlosMoret;
