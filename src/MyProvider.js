import React, { Component } from "react";
import MyContext from "./MyContext";

class MyProvider extends Component {
	state = {
		status: 0,
		index: 0,
		changeColor: false,
		work: [
			{
				name: `Carlos Moret`,
				feature: 1,
				link: `/carlosmoret`,
				field: `Portfolio`,
				color: `#000`,
				backgroundColor: `#ffffff`,
				col: `col-md-6 col-12`,
				imgcss: `img-work-h`,
				description: `Proyecto de Master ELISAVA realizado terminado a principios de 2020 en la que se implemento metodologias UX y UI`,
				team: `UX / UI / Code : Alejandro de Francisco Castillo / Paula Rufi / Maria Camila / Carlos Moret`,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_01.jpg?alt=media&token=1642a1ed-0670-435a-b835-828f227c2d6c`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
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
				name: `Cafeteria Industrial`,
				feature: 1,
				link: `/cafeteriaindustrial`,
				field: `Technology`,
				color: `#000`,
				backgroundColor: `#F8D248`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				description: `Proyecto de Master ELISAVA realizado terminado a principios de 2020 en la que se implemento metodologias UX y UI`,
				team: `UX / UI / Code : Alejandro de Francisco Castillo / Paula Rufi / Maria Camila / Carlos Moret`,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_01.jpg?alt=media&token=1642a1ed-0670-435a-b835-828f227c2d6c`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
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
				name: `Circular`,
				feature: 0,
				link: `/followtheforest`,
				field: `Technology`,
				color: `#fff`,
				backgroundColor: `#3C00FF`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
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
				name: `The SaMy Company`,
				feature: 0,
				link: `/followtheforest`,
				field: `Technology`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
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
				name: `Suuper`,
				feature: 0,
				link: `/followtheforest`,
				field: `Technology`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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
				name: `Public FC`,
				feature: 0,
				link: `/followtheforest`,
				field: `Sport`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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
				name: `A2 pass de la scene`,
				feature: 0,
				link: `/followtheforest`,
				field: `Music`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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
				name: `Porta`,
				feature: 0,
				link: `/followtheforest`,
				field: `Migration`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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
				name: `Ram`,
				feature: 0,
				link: `/followtheforest`,
				field: `Food`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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
				name: `Capu`,
				feature: 0,
				link: `/followtheforest`,
				field: `Fashion`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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
				name: `Revolver`,
				feature: 0,
				link: `/followtheforest`,
				field: `Food`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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
				name: `Hooleap`,
				feature: 0,
				link: `/followtheforest`,
				field: `Education`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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
				name: `Barra Chocolate`,
				feature: 0,
				link: `/followtheforest`,
				field: `Food`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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
				name: `Mercado nun`,
				feature: 0,
				link: `/followtheforest`,
				field: `Food`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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
				feature: 1,
				link: `/followtheforest`,
				field: `Fashion`,
				color: `#000000`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				backgroundColor: ``,
				description: `Follow the Forest was a new clothing rental brand back in 2015 that combine the streetwear trend that was starting in Chile.`,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
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

	onChangeColor = () => {
		this.setState({
			changeColor: !this.state.changeColor
		});
	};

	render() {
		return (
			<MyContext.Provider
				value={{ state: this.state, onChangeColor: this.onChangeColor }}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
