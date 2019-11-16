import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Logos from './Menu/Logos';

class Home extends Component {
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
      <div className="">
        <Logos />
        <div className="row m-0">
          <div className="col-12 center">
            <div className="text-center text-middle-40">
              <Link to={`/`} activeClassName="active">
                <img
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/circular-7b402.appspot.com/o/images%2Fbrand%2Flogo.png?alt=media&token=2b407a10-8d6e-410f-8fee-69ab5d89b381'
                  }
                  className={`circular`}
                  alt="Circular Logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
