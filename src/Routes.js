import React from 'react';
import { Route, Switch } from 'react-router-dom';

// General
import Home from './components/Home';
import Shop from './components/Shop';
import Eat from './components/Eat';

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/eat" component={Eat} />
      </Switch>
    </div>
  );
};
