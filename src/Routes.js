import React from 'react';
import { Route, Switch } from 'react-router-dom';

// General
import Home from './components/Home';

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};
