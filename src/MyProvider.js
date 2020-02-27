import React, { Component } from "react";
import MyContext from "./MyContext";

class MyProvider extends Component {
	state = {
		status: 0,
		index: 0,
		changeColor: false,
		font: `'Fira Mono', monospace`,
		changeWorkView: false,
		work: [
			{
				name: `Carlos Moret`,
				feature: 0,
				link: `/carlosmoret`,
				field: `Portfolio`,
				year: `2020`,
				color: `#000`,
				backgroundColor: `#ffffff`,
				col: `col-md-6 col-12`,
				imgcss: `img-work-h`,
				description: `Proyecto de Master ELISAVA realizado terminado a principios de 2020 en la que se implemento metodologias UX y UI`,
				team: `UX / UI / Code : Alejandro de Francisco Castillo / Paula Rufi / Maria Camila / Carlos Moret`,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/portfolio%2Fportfoliocover1.jpg?alt=media&token=4ed58fa7-e734-4e79-b254-0807ab5eeed3`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				images: [
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/portfolio%2Fporfoliocovericons.jpg?alt=media&token=b466e682-ff95-4785-8701-39dc1e3695b5`
					},
					{
						col: `col-8`,
						imgcss: `img-work-h`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/portfolio%2Fportfoliocover1.jpg?alt=media&token=4ed58fa7-e734-4e79-b254-0807ab5eeed3`
					},
					{
						col: `col-4 d-none`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fci3.jpg?alt=media&token=0f43455a-96f0-494a-b7ac-b7e0e03594fe`
					}
				]
			},
			{
				name: `Cafetería Industrial`,
				feature: 1,
				link: `/carlosmoret`,
				field: `Food`,
				year: `2020`,
				color: `#000`,
				backgroundColor: `#F8D248`,
				col: `col-md-6 col-12`,
				imgcss: `img-work-h`,
				description: `Proyecto de Master ELISAVA realizado terminado a principios de 2020 en la que se implemento metodologias UX y UI`,
				team: `UX / UI / Code : Alejandro de Francisco Castillo / Paula Rufi / Maria Camila / Carlos Moret`,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_01.jpg?alt=media&token=1642a1ed-0670-435a-b835-828f227c2d6c`,
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
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcistore2.jpg?alt=media&token=a0a323fa-f58c-4a54-b93c-e2e129ecd4f2`
					}
				]
			},
			{
				name: `Circular`,
				feature: 0,
				link: `/carlosmoret`,
				field: `Technology`,
				year: `2020`,
				color: `#fff`,
				backgroundColor: `#449cf0`,
				col: `col-md-6 col-12`,
				imgcss: `img-work-h`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/circular%2Fcircularcover1.jpg?alt=media&token=21c02578-ada1-4e30-8e08-d768b99cefbf`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/cafeteriaindustrial%2Fcafeteria_industrial_02.jpg?alt=media&token=076434e2-280b-47f0-9409-d3aa44e01674`,
				images: [
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/circular%2Fcircularcover1.jpg?alt=media&token=21c02578-ada1-4e30-8e08-d768b99cefbf`
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
				feature: 1,
				link: `/carlosmoret`,
				field: `Technology`,
				year: `2019`,
				color: `#fff`,
				backgroundColor: `#a25aff`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/SaMy%2FSaMi3.jpg?alt=media&token=221326b2-ac94-498c-aabb-0c18d614b27b`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/SaMy%2FSaMi4.png?alt=media&token=98a219fe-57b2-4e01-8176-c1c4d4042fbc`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/SaMy%2FSaMi5.jpg?alt=media&token=4f44152d-8ea7-498e-afe9-7046b75ef891`,
				images: [
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/SaMy%2FSaMi5.jpg?alt=media&token=4f44152d-8ea7-498e-afe9-7046b75ef891`
					},
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/SaMy%2FSaMi6.png?alt=media&token=9e5f8b10-cde2-4bf0-a6f4-c075e28e7b18`
					},
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/SaMy%2FSaMi3.jpg?alt=media&token=221326b2-ac94-498c-aabb-0c18d614b27b`
					}
				]
			},
			{
				name: `Suupeer`,
				feature: 0,
				link: `/carlosmoret`,
				field: `Technology`,
				year: `2019`,
				color: `#000000`,
				backgroundColor: `#e8e4df`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/suupeer%2Fsuupeercover.jpg?alt=media&token=e564c41f-4fa2-4ca8-bdc2-f617f1db1104`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
				images: [
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/suupeer%2Fsuupeercover.jpg?alt=media&token=e564c41f-4fa2-4ca8-bdc2-f617f1db1104`
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
				link: `/carlosmoret`,
				field: `Sport`,
				year: `2019`,
				color: `#000000`,
				backgroundColor: `#10ab59`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/publicfc%2Fpublicfccover.png?alt=media&token=6f9871c7-03d5-4279-b259-fb99b5a23030`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
				images: [
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/publicfc%2Fpublicfccover.png?alt=media&token=6f9871c7-03d5-4279-b259-fb99b5a23030`
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
				link: `/carlosmoret`,
				field: `Music`,
				year: `2019`,
				color: `#000000`,
				backgroundColor: `#7d1f18`,
				col: `col-md-6 col-12`,
				imgcss: `img-work-h`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/a2pass%2Fa2pass.png?alt=media&token=0f55490f-0070-41e8-9873-4c1dd842d67a`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
				images: [
					{
						col: `col-6`,
						imgcss: `img-work-h`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/a2pass%2Fa2pass.png?alt=media&token=0f55490f-0070-41e8-9873-4c1dd842d67a`
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
				link: `/carlosmoret`,
				field: `Migration`,
				year: `2019`,
				color: `#000000`,
				backgroundColor: `#fcef9a`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/porta%2Fportacover.jpg?alt=media&token=b98c7860-5208-4829-9b38-431b2aea4250`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
				images: [
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/porta%2Fportacover.jpg?alt=media&token=b98c7860-5208-4829-9b38-431b2aea4250`
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
				link: `/carlosmoret`,
				field: `Food`,
				year: `2018`,
				color: `#000000`,
				backgroundColor: `#6c95ff`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/ram%2Framcover.png?alt=media&token=0d5124a0-0e63-40db-8d95-e64d7754c6a3`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
				images: [
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/ram%2Framcover.png?alt=media&token=0d5124a0-0e63-40db-8d95-e64d7754c6a3`
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
				link: `/carlosmoret`,
				field: `Food`,
				year: `2018`,
				color: `#000000`,
				backgroundColor: `#173e2c`,
				col: `col-md-6 col-12`,
				imgcss: `img-work-h`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/revolver%2Frevolver.jpg?alt=media&token=75e41a8a-f158-4d32-a592-501e8b64b1c6`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
				images: [
					{
						col: `col-6`,
						imgcss: `img-work-h`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/revolver%2Frevolver.jpg?alt=media&token=75e41a8a-f158-4d32-a592-501e8b64b1c6`
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
				link: `/carlosmoret`,
				field: `Education`,
				year: `2018`,
				color: `#000000`,
				backgroundColor: `#0b2fa2`,
				col: `col-md-3 col-12`,
				imgcss: `img-work-v`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/hooleap%2Fhooleap.jpg?alt=media&token=01ad9276-eb62-4171-b508-01af7a99bde4`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
				images: [
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/hooleap%2Fhooleap.jpg?alt=media&token=01ad9276-eb62-4171-b508-01af7a99bde4`
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
				link: `/carlosmoret`,
				field: `Food`,
				year: `2017`,
				color: `#000000`,
				backgroundColor: `#424242`,
				col: `col-md-6 col-12`,
				imgcss: `img-work-h`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/barra%2Fbarra_cover.jpg?alt=media&token=6a4354d9-bd5d-403d-9d1f-5a016b5c4560`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
				images: [
					{
						col: `col-6`,
						imgcss: `img-work-h`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/barra%2Fbarra_cover.jpg?alt=media&token=6a4354d9-bd5d-403d-9d1f-5a016b5c4560`
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
				link: `/carlosmoret`,
				field: `Food`,
				year: `2017`,
				color: `#000000`,
				backgroundColor: `#e65245`,
				col: `col-md-6 col-12`,
				imgcss: `img-work-h`,
				description: ``,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/mercadonun%2Fmercadonun.JPG?alt=media&token=1ea5a8a4-863e-4ec7-8bd5-6bc2e680c151`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
				images: [
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/mercadonun%2Fmercadonun.JPG?alt=media&token=1ea5a8a4-863e-4ec7-8bd5-6bc2e680c151`
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
				link: `/carlosmoret`,
				field: `Fashion`,
				year: `2015`,
				color: `#000000`,
				backgroundColor: `#16353b`,
				col: `col-md-6 col-12`,
				imgcss: `img-work-h`,
				description: `Follow the Forest was a new clothing rental brand back in 2015 that combine the streetwear trend that was starting in Chile.`,
				team: ``,
				img1: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/followtheforest%2Fftforestcover1.jpg?alt=media&token=1363e688-9b73-46c2-abf4-c46fd8ba7a5d`,
				img2: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`,
				img3: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`,
				images: [
					{
						col: `col-8`,
						imgcss: `img-work-h`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/followtheforest%2Fftforestcover1.jpg?alt=media&token=1363e688-9b73-46c2-abf4-c46fd8ba7a5d`
					},
					{
						col: `col-4`,
						imgcss: `img-work-v`,
						image: `https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/followtheforest%2Fftforestcover2.jpg?alt=media&token=3c74fe1a-c0a8-4ed6-9e9f-70ec4ff46a62`
					},
					{
						col: `col-4 d-none`,
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

	onChangeWorkView = () => {
		this.setState({
			changeWorkView: !this.state.changeWorkView
		});
	};

	switchFont = newFont => {
		this.setState({ font: newFont });
	};

	render() {
		return (
			<MyContext.Provider
				value={{
					state: this.state,
					onChangeColor: this.onChangeColor,
					onChangeWorkView: this.onChangeWorkView,
					switchFont: e => this.switchFont(e)
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
