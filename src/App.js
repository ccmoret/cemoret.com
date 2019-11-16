import './styles/styles.css';

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { prevPage: '' };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <ScrollToTop>
              <Routes />
            </ScrollToTop>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
