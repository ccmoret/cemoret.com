import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Menu from "./Menu";
// import Footer from './Footer';

class Work extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 0,
			work: [
				{
					name: `Cafeteria Industrial`,
					link: `/cafeteriaindustrial`,
					field: `Technology`,
					color: `#000`,
					backgroundColor: `#F8D248`,
					description: `Proyecto de Master ELISAVA realizado terminado a principios de 2020 en la que se implemento metodologias UX y UI`,
					team: `UX / UI / Code : Alejandro de Francisco Castillo / Paula Rufi / Maria Camila / Carlos Moret`,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_01.jpg?alt=media&token=1642a1ed-0670-435a-b835-828f227c2d6c`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Circular`,
					link: `/followtheforest`,
					field: `Technology`,
					color: `#fff`,
					backgroundColor: `#3C00FF`,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img3: ``
				},
				{
					name: `The SaMy Company`,
					link: `/followtheforest`,
					field: `Technology`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Suuper`,
					link: `/followtheforest`,
					field: `Technology`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					name: `Public FC`,
					link: `/followtheforest`,
					field: `Sport`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					name: `A2 pass de la scene`,
					link: `/followtheforest`,
					field: `Music`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					name: `Porta`,
					link: `/followtheforest`,
					field: `Migration`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					name: `Ram`,
					link: `/followtheforest`,
					field: `Food`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					name: `Capu`,
					link: `/followtheforest`,
					field: `Fashion`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					name: `Revolver`,
					link: `/followtheforest`,
					field: `Food`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					name: `Hooleap`,
					link: `/followtheforest`,
					field: `Education`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					name: `Barra Chocolate`,
					link: `/followtheforest`,
					field: `Food`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					name: `Mercado nun`,
					link: `/followtheforest`,
					field: `Food`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				},
				{
					name: `Follow the Forest`,
					link: `/followtheforest`,
					field: `Fashion`,
					color: `#000000`,
					backgroundColor: ``,
					description: `Follow the Forest was a new clothing rental brand back in 2015 that combine the streetwear trend that was starting in Chile.`,
					team: ``,
					img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
					img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
					img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
				}
			]
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.listenScrollEvent);
	}

	renderProjectsList(status, work) {
		function pad(d) {
			return d < 10 ? "0" + d.toString() : d.toString();
		}
		return work.map(({ name, link, description, field }, index) => {
			return (
				<Link to={`${link}`} key={index}>
					<div
						onMouseEnter={() => this.changeStatus(index)}
						// style={{ cursor: `url(${img}) , auto` }}
						className="row link"
						style={{
							color: `${work[status].color}`
						}}
					>
						<div className="col-2 p-1">
							<h3
								className="m-0"
								style={{
									color: `${work[status].color}`
								}}
							>
								{pad(14 - index)}.
							</h3>
						</div>
						<div className="col-4 p-1">
							<h3
								className="m-0"
								style={{
									color: `${work[status].color}`
								}}
							>
								{name}
							</h3>
						</div>
						<div className="col-6 p-1">
							<h3
								className="m-0"
								style={{
									color: `${work[status].color}`
								}}
							>
								{field}
							</h3>
						</div>
					</div>
				</Link>
			);
		});
	}

	changeStatus = index => {
		this.setState({ status: index });
	};

	renderProjectsImages(work) {
		const { status } = this.state;

		if (status === null) {
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
							src={work[status].img1}
							className="img-onMouseEnter"
							alt={work[status].name}
						/>
					</div>
					<div className="col-6 px-1">
						<img
							src={work[status].img1}
							className="img-onMouseEnter"
							alt={work[status].name}
						/>
					</div>
				</div>
			);
		}
	}

	render() {
		const { work, status } = this.state;
		return (
			<div
				style={{
					backgroundColor: `${work[status].backgroundColor}`,
					color: `${work[status].color} !important`,
					zIndex: `-100`,
					transition: `background-color 0.5s ease-out`
				}}
				className="container"
			>
				<div className="pb-3">
					<Menu controls={`swich`} link={`/workblocks`} />
				</div>

				<div className="row px-0">
					<div className="col-12 px-2">
						<hr />
					</div>
					<div className="col-12 px-2">
						{this.renderProjectsList(status, work)}
					</div>
					<div className="col-12 px-1">{this.renderProjectsImages(work)}</div>
				</div>
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Work;
