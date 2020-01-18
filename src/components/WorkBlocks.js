import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Menu from "./Menu";
// import Footer from './Footer';

class WorkBlocks extends Component {
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
					col: `col-6`,
					imgcss: `img-work-h`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_01.jpg?alt=media&token=1642a1ed-0670-435a-b835-828f227c2d6c`
				},
				{
					name: `Circular`,
					link: `/followtheforest`,
					field: `Technology`,
					color: `#fff`,
					backgroundColor: `#3C00FF`,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `The SaMy Company`,
					link: `/followtheforest`,
					field: `Technology`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Suuper`,
					link: `/followtheforest`,
					field: `Technology`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Public FC`,
					link: `/followtheforest`,
					field: `Sport`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `A2 pass de la scene`,
					link: `/followtheforest`,
					field: `Music`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Porta`,
					link: `/followtheforest`,
					field: `Migration`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Ram`,
					link: `/followtheforest`,
					field: `Food`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Capu`,
					link: `/followtheforest`,
					field: `Fashion`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Revolver`,
					link: `/followtheforest`,
					field: `Food`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Hooleap`,
					link: `/followtheforest`,
					field: `Education`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Barra Chocolate`,
					link: `/followtheforest`,
					field: `Food`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-6`,
					imgcss: `img-work-h`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/barra%2Fbarra_cover.jpg?alt=media&token=6a4354d9-bd5d-403d-9d1f-5a016b5c4560`
				},
				{
					name: `Mercado nun`,
					link: `/followtheforest`,
					field: `Food`,
					color: `#000000`,
					backgroundColor: ``,
					description: ``,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				},
				{
					name: `Follow the Forest`,
					link: `/followtheforest`,
					field: `Fashion`,
					color: `#000000`,
					backgroundColor: ``,
					description: `Follow the Forest was a new clothing rental brand back in 2015 that combine the streetwear trend that was starting in Chile.`,
					team: ``,
					col: `col-3`,
					imgcss: `img-work-v`,
					image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`
				}
			]
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.listenScrollEvent);
	}

	changeStatus = index => {
		this.setState({ status: index });
	};

	renderImageBlocks(work) {
		return <div className="row">{this.renderImage(work)}</div>;
	}

	renderImage(work) {
		return work.map(({ link, col, imgcss, image }, index) => {
			return (
				<div key={index} className={`${col} p-1`}>
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

	render() {
		const { work } = this.state;
		return (
			<div className="container">
				<div className="pb-3">
					<Menu controls={`swichback`} link={`/work`} />
				</div>

				<div className="row px-0">
					<div className="col-12 px-1">{this.renderImageBlocks(work)}</div>
				</div>
				{/* <Footer /> */}
			</div>
		);
	}
}

export default WorkBlocks;
