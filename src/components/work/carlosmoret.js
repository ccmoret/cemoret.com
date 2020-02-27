import React, { Component } from "react";
import { Link } from "react-router-dom";

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
		// const { name, img1, img2, img3 } = this.state.me;
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
						<h4 className="m-0 pb-5">Research paper</h4>
					</div>
					<div className="col-md-6 col-12 px-1 pb-5">
						<h5 className="m-0">
							I am an engineer and designer, I have moved from one area to
							another and I have mixed both areas so many times that I no longer
							know where the line is between them. That is why I wanted to
							capture this mix in the portfolio, blend the contemporary
							editorial design with the basic and classic of the unix terminal
						</h5>
					</div>
					<div className="col-md-6 col-12 p-1">
						<div
							className="img-work-h"
							style={{
								backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/portfolio%2F2.jpeg?alt=media&token=aa9bcb3a-c21f-4821-8c82-6e857b59e664)`
							}}
						/>
					</div>
					<div className="col-md-6 col-12 p-1">
						<div
							className="img-work-h"
							style={{
								backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/portfolio%2FSUNDAY_No00_20.jpg?alt=media&token=ef28d8b2-7f67-4505-ab2b-68e9aae3aeb7)`
							}}
						/>
					</div>

					<div className="col-md-3 col-12 p-1 d-none d-md-block">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/portfolio%2Fportfolioref5.jpg?alt=media&token=f629ea02-5897-48d5-bdd0-d3f122c928d2)`
							}}
						/>
					</div>

					<div className="col-md-6 col-12 p-1">
						<div
							className="img-work-h"
							style={{
								backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/portfolio%2Fporfolioref1.jpg?alt=media&token=dfad8538-43a2-4e2d-a133-ae6a8c5398ee)`
							}}
						/>
					</div>

					<div className="col-md-3 col-12 p-1 d-none d-md-block">
						<div
							className="img-work-v"
							style={{
								backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/portfolio%2Fportfolioref2.jpg?alt=media&token=fe37fbb2-48ca-4419-a9bc-47448828db21)`
							}}
						/>
					</div>
					<div className="col-md-6 col-12 p-1">
						<div
							className="img-work-h"
							style={{
								backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/portfolio%2Fportfolioref11.jpg?alt=media&token=92ff653d-b85f-4b00-94de-cc1abac31b24)`
							}}
						/>
					</div>

					<div className="col-md-6 col-12 p-1">
						<div
							className="img-work-h"
							style={{
								backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/portfolio%2F1.jpeg?alt=media&token=37073259-d787-4b68-ac21-638aa65327f7)`
							}}
						/>
					</div>
				</div>

				<div className="row p-1 pt-5">
					<div className="col-12 text-center px-1 pt-10 pb-1">
						<h6 className="m-0">GUIDELINES</h6>
					</div>
					<div className="col-12 px-1">
						<hr className="" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h4 className="m-0 pb-5">Logo</h4>
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0">
							The logo is a Macintosh computer, the first computer manufactured
							and sold by Apple in January 1984. The logo was designed simply,
							like the iconography and works as a page favicon.
						</h5>
						<h5 className="m-0">
							Both the logo-favicon and the icons are with white backgrond. This
							small touch makes them stand out more when scrolling or is in
							black background, delivering a more relaxed tone, which was not
							possible without this small detail.
						</h5>
					</div>
					<div className="col-md-6 col-12 px-1 pt-3 d-none d-md-block"></div>
					<div className="col-md-6 col-12 px-1 pt-3">
						<span className="px-0">
							<img
								className="macintosh"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Flogo.svg?alt=media&token=26ae105c-3661-4fda-9f82-6a9583e692dd"
								alt="macintosh icon"
							/>
						</span>
						<span className="px-0">
							<img
								className="macintosh"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Flogo-black.svg?alt=media&token=d6fb022c-7890-4b3b-bbac-18751e9289e7"
								alt="macintosh-black icon"
							/>
						</span>
					</div>
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h4 className="m-0 pb-5">Color palette</h4>
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
							<div className="h5 m-0">#FFFFFF</div>
						</div>
						<div className="inline-block px-2">
							<svg height="100" width="100">
								<circle
									cx="50"
									cy="50"
									r="45"
									stroke="black"
									strokeWidth="3"
									fill="#0E0E0E"
								/>
							</svg>
							<div className="h5 m-0">Black</div>
							<div className="h5 m-0">#0E0E0E</div>
						</div>

						<h5 className="m-0 pt-5 pb-3">Secundary Colors</h5>
						<div className="inline-block px-2">
							<svg height="100" width="100">
								<circle
									cx="50"
									cy="50"
									r="45"
									stroke="black"
									strokeWidth="3"
									fill="#C4C4C4"
								/>
							</svg>
							<div className="h5 m-0">Grey</div>
							<div className="h5 m-0">#C4C4C4</div>
						</div>
						<div className="inline-block px-2">
							<svg height="100" width="100">
								<circle
									cx="50"
									cy="50"
									r="45"
									stroke="black"
									strokeWidth="3"
									fill="#9bd6fb"
								/>
							</svg>
							<div className="h5 m-0">Light Blue</div>
							<div className="h5 m-0">#9bd6fb</div>
						</div>
						<div className="inline-block px-2">
							<svg height="100" width="100">
								<circle
									cx="50"
									cy="50"
									r="45"
									stroke="black"
									strokeWidth="3"
									fill="#fcef9a"
								/>
							</svg>
							<div className="h5 m-0">Yellew</div>
							<div className="h5 m-0">#fcef9a</div>
						</div>
						<div className="inline-block px-2">
							<svg height="100" width="100">
								<circle
									cx="50"
									cy="50"
									r="45"
									stroke="black"
									strokeWidth="3"
									fill="#f2a3c7"
								/>
							</svg>
							<div className="h5 m-0">Pink</div>
							<div className="h5 m-0">#f2a3c7</div>
						</div>
						<div className="inline-block px-2">
							<svg height="100" width="100">
								<circle
									cx="50"
									cy="50"
									r="45"
									stroke="black"
									strokeWidth="3"
									fill="#76be93"
								/>
							</svg>
							<div className="h5 m-0">Green</div>
							<div className="h5 m-0">#76be93</div>
						</div>
					</div>
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h4 className="m-0 pb-5">Typography</h4>
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0">Primary Typography: Fira Monospaced</h5>
						<h5 className="m-0 pt-3">
							The choice is inspired by the default typography of the Unix
							Terminal the San Francisco Mono de Apple (SF Mono). But I did not
							want to give such a crude touch to the content and I wanted to
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
						<h4 className="m-0 pb-5">Iconography</h4>
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0">
							The iconography is related to the Wingdings a dingbat fonts that
							was originally developed by Microsoft in 1990, which generates an
							aesthetic similar to what it was like to work on these operating
							systems at that time, and so connected to the main typography
							(Fira Mono) at a fundamental level to maximize recognition and
							consistency.
						</h5>
						<h5 className="m-0 pt-3">
							The icons were designed to generate curiosity in the user and
							encourage exploration on the page. There are icons that do not
							generate a quick recognition, instead they cause an emotion when
							they are being used.
						</h5>
						<h5 className="m-0 pt-3">
							The icon system was generated with the combination of basic
							geometric shapes (circles, triangles, squares and rectangles),
							lines and points, and a thick line present in all of them.
						</h5>
					</div>
					<div className="col-md-6 col-12 px-1 pt-3 d-none d-md-block"></div>
					<div className="col-md-6 col-12 px-1 pt-3">
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
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fhappyface.svg?alt=media&token=00a478d1-2b3a-48e9-81cf-f54f932b8c5d"
								alt="happyface icon"
							/>
						</span>
					</div>
					<div className="col-md-6 col-12 px-1 pt-3 d-none d-md-block"></div>
					<div className="col-md-6 col-12 px-1 pt-3">
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
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h4 className="m-0 pb-3">Grid</h4>
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0 pb-3">
							The grid is a system of 12 modifiable columns according to the
							content and that has 6 ways to use the content, the separation
							between columns is 0.5em that corresponds to 8px. This 8px
							separation makes the content almost 0 margin in the entire
							project.
						</h5>
						<h5 className="m-0 pb-3">
							The sample grid presented below is responsive and shows how
							modifying the screen width works in different screen sizes
						</h5>
					</div>
					<div className="col-12 px-0 pt-3">
						<h5 className="m-0 pb-1 p-1">12 columns</h5>
						<div className="row">
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-lg-1 col-md-2 col-sm-4 col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
						</div>
						<h5 className="m-0 pt-3 pb-1 p-1">6 columns</h5>
						<div className="row">
							<div className="col-md-2 col-sm-4 col-12 p-1 pr-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-md-2 col-sm-4 col-12 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-md-2 col-sm-4 col-12 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-md-2 col-sm-4 col-12 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-md-2 col-sm-4 col-12 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-md-2 col-sm-4 col-12 p-1">
								<div className="rectangle-grey"></div>
							</div>
						</div>
						<h5 className="m-0 pt-3 pb-1 p-1">4 columns</h5>
						<div className="row">
							<div className="col-sm-3 col-12 p-1 pr-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-sm-3 col-12 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-sm-3 col-12 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-sm-3 col-12 p-1">
								<div className="rectangle-grey"></div>
							</div>
						</div>
						<h5 className="m-0 pt-3 pb-1 p-1">3 columns</h5>
						<div className="row">
							<div className="col-4 p-1 pr-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-4 p-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-4 p-1">
								<div className="rectangle-grey"></div>
							</div>
						</div>
						<h5 className="m-0 pt-3 pb-1 p-1">2 columns</h5>
						<div className="row">
							<div className="col-6 p-1 pr-1">
								<div className="rectangle-grey"></div>
							</div>
							<div className="col-6 p-1">
								<div className="rectangle-grey"></div>
							</div>
						</div>
						<h5 className="m-0 pt-3 pb-1 p-1">1 column</h5>
						<div className="row">
							<div className="col-12 p-1 pr-1">
								<div className="rectangle-grey"></div>
							</div>
						</div>
					</div>
					{/*<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h4 className="m-0 pb-5">Composition</h4>
					</div>*/}
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h4 className="m-0 pb-5">Motion</h4>
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0 pb-3">
							There are three motion elements incorporated into the project:
						</h5>
						<h5 className="m-0">
							1. Happy face icon animation when you click on it
						</h5>
						<h5 className="m-0">
							2. Gradient between four colors in an infinite loop
						</h5>
						<h5 className="m-0">
							3. Smooth transition in the&nbsp;
							<span className="link-underline">
								<Link to={`/work`}>work list</Link>
							</span>
						</h5>
					</div>
					<div className="col-md-6 col-12 px-1 pt-3 d-none d-md-block"></div>
					<div className="col-md-6 col-12 px-1 pt-3">
						<span className="px-2">
							<img
								className="isotype-face-loop"
								src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fface.svg?alt=media&token=06620e07-5dcf-441e-b06a-887782764889"
								alt="face icon"
							/>
						</span>
						<span className="px-2 my-3">
							<div className="inline-block circle-color-loop"></div>
						</span>
					</div>
					{/*<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h4 className="m-0 pb-5">Components</h4>
					</div>*/}
					<div className="col-12 px-1 pt-5">
						<hr className="pt-5" />
					</div>
					<div className="col-md-6 col-12 px-1">
						<h4 className="m-0 pb-5">Tone of voice</h4>
					</div>
					<div className="col-md-6 col-12 px-1">
						<h5 className="m-0">
							In order to give more importance to the work, a simple and direct
							tone of voice is generated, which speaks only when necessary,
							without interrupting user navigation across all touchpoints
						</h5>
						<h6 className="m-0 pt-3">"Design something people want"</h6>
					</div>
				</div>
				<Footer />
				<div className="pb-5 d-md-none"></div>
			</div>
		);
	}
}

export default CarlosMoret;
