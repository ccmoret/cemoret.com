import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Components
import Menu from './Menu';
import Footer from './Footer';

class Eat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 1
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-12">
            <div className="text-center" />
          </div>
        </div>
        <div className="fixedbutton">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Eat;
