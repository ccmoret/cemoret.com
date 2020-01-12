import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fproducts%2Fproduct01.jpg?alt=media&token=7fa8f2ad-7bb3-4308-baef-c521fc0185fa'
              }
              className="img-100"
              alt="cafeteria industrial"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
