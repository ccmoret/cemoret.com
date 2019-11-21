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
          <div className="col-12 px-0">
            <div className="text-center">
              <Link to={`/`}>
                <img
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/cafeteria-industrial.appspot.com/o/images%2Fci1.jpg?alt=media&token=905bf0ae-431d-47ef-a828-1173430a91bf'
                  }
                  className={`img-100`}
                  alt="cafeteria industrial"
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