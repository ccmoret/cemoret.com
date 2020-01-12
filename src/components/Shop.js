import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Components
import Menu from './Menu';
import Footer from './Footer';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          id: `1`,
          title: `Liquidbiscuit té matcha cream`,
          description: `Your talent is part of you`,
          price: `3.75`,
          image: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct02.jpg?alt=media&token=98426cbb-cc88-4f90-9cd2-09ae1265c484`
        },
        {
          id: `2`,
          title: `Mochis de brioche rellenos de frutos rojos`,
          description: `Your talent is part of you`,
          price: `5.50`,
          image: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa`
        },
        {
          id: `3`,
          title: `Pan blanco dulce`,
          description: `Your talent is part of you`,
          price: `7.00`,
          image: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct09.jpg?alt=media&token=f674fb73-5d19-418f-9c1f-d21411cb8b61`
        },
        {
          id: `4`,
          title: `Bizcochoman`,
          description: `Your talent is part of you`,
          price: `3.75`,
          image: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct08.jpg?alt=media&token=58d68a14-a768-44bf-8f7a-a28afa30202f`
        },
        {
          id: `5`,
          title: `Biscuit elastic pomelo coco tostado`,
          description: `Your talent is part of you`,
          price: `3.50`,
          image: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct04.jpg?alt=media&token=6f036229-1c3b-4997-a10e-11bdd6e2ca50`
        },
        {
          id: `6`,
          title: `Liquidbiscuit chocolate cacao`,
          description: `Your talent is part of you`,
          price: `7.00`,
          image: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct03.jpg?alt=media&token=e5e7744a-838a-4efc-9fa4-828b08c24d13`
        },
        {
          id: `7`,
          title: `Liquidbiscuit té matcha cream`,
          description: `Your talent is part of you`,
          price: `3.75`,
          image: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct07.jpg?alt=media&token=e8826062-af4b-496e-a2ac-08bcbc3c61d4`
        },
        {
          id: `8`,
          title: `Mochis de brioche rellenos de frutos rojos`,
          description: `Your talent is part of you`,
          price: `5.50`,
          image: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct06.jpg?alt=media&token=d1a62abd-808b-49d3-81e3-acd67d16b463`
        },
        {
          id: `9`,
          title: `Pan blanco dulce`,
          description: `Your talent is part of you`,
          price: `7.00`,
          image: `https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct05.jpg?alt=media&token=6ddce1dc-7852-4bdf-b3fd-a9b1772203f4`
        }
      ]
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  renderProductsList(product) {
    return <div className="row">{this.renderProduct(product)}</div>;
  }

  renderProduct(product) {
    return product.map(({ image, title, price }, index) => {
      return (
        <div className="col-lg-4 col-md-6 col-sm-4 col-6 box py-3 px-3" key={index}>
          <img src={`${image}`} className="img-prod-sm" alt="cafeteria industrial" />
          <h5 className="regular m-0 pr-3 pt-1">{title}</h5>
          <h5 className="regular m-0 pr-3 pt-1">{price} €</h5>
        </div>
      );
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="app_scroll">
        <Menu />
        <div className="row pt-80">
          <div className="col-md-6 col-12 order-last box px-0" id="left">
            {this.renderProductsList(product)}
          </div>
          <div className="col-md-6 col-12 order-first box px-0" id="right">
            <h3 className="box m-0 p-3">Shop | Tienda | ショップ</h3>
            <h3 className="m-0 p-3">
              Curioseamos entre las recetas más diversas, cocinamos con los ingredientes más
              dispares e improvisamos con las ideas más locas.
            </h3>
          </div>
        </div>
        <div className="fixedbutton">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Shop;
