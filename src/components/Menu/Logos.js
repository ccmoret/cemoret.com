import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components

class Logos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        <div className="logo-header-left">
          <Link to={`/`}>
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2FcafeteriaIndustrail-logo.png?alt=media&token=fe86b56b-9d8b-4996-bda9-830645037078'
              }
              className={`isotype`}
              alt="Cafeteria Industrial Isotype"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Logos;
