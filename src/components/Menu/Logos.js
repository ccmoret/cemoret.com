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
                'https://firebasestorage.googleapis.com/v0/b/circular-7b402.appspot.com/o/images%2Fbrand%2Ficon.png?alt=media&token=baf7e77f-6b55-412a-a730-e32adbca6b1e'
              }
              className={`isotype`}
              alt="Circular Isotype"
            />
          </Link>
        </div>
        {/* <div className="logo-header-right">
          <Link to={`/`}>
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/circular-7b402.appspot.com/o/images%2Fbrand%2Flogo.png?alt=media&token=2b407a10-8d6e-410f-8fee-69ab5d89b381'
              }
              className={`logo`}
              alt="Circular Logo"
            />
          </Link>
        </div> */}
      </div>
    );
  }
}

export default Logos;
