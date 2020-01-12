import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="menu">
          <div className="menu-center">
            <div className="inline-block">
              <ul>
                <li className="h4 px-2">
                  <Link to={`/shop`}>Shop</Link>
                </li>
                <li className="px-2">
                  <Link to={`/`}>
                    <img
                      src={
                        'https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2FcafeteriaIndustrail-logo.png?alt=media&token=fe86b56b-9d8b-4996-bda9-830645037078'
                      }
                      className={`isotype`}
                      alt="Cafeteria Industrial Isotype"
                    />
                  </Link>
                </li>
                <li className="h4 px-2">
                  <Link to={`/eat`}>Eat </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
