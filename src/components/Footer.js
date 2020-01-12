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
          <div className="col-3">
            <div className="pl-5">
              <Link to={`/`}>
                <h4>Process</h4>
              </Link>
              <Link to={`/`}>
                <h4>About</h4>
              </Link>
            </div>
          </div>
          <div className="col-6 text-center">
            <h4 className="bold">CAFETERIA INDUSTRIAL</h4>
            <h4>Carrer de Pallars, 154, 08005 Barcelona / Telf: 930 27 71 49</h4>
          </div>
          <div className="col-3 text-right">
            <div className="pr-5">
              <h4>Eng/Esp/Cat</h4>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/cafeteriaindustrial">
                <h4>Instagram</h4>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
