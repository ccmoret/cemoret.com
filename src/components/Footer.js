import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <div className="row py-2">
          <div className="col-md-3 col-12 text-center-md pl-5">
            <Link to={`/`}>
              <h5>Process</h5>
            </Link>
            <Link to={`/`}>
              <h5>About</h5>
            </Link>
          </div>
          <div className="col-md-6 col-12 text-center">
            <h5 className="bold">CAFETERIA INDUSTRIAL</h5>
            <h5>Carrer de Pallars, 154, 08005 Barcelona / Telf: 930 27 71 49</h5>
          </div>
          <div className="col-md-3 col-12 text-right text-center-md pr-5">
            <h5>Eng/Esp/Cat</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/cafeteriaindustrial">
              <h5>Instagram</h5>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
