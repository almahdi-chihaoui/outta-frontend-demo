/* Third party imports */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Relative imports  */
import Events from './home';
import Event from './Event';

/**
 * This is more of a routing component
 */

const MainContent = () => (
  <Switch>
    <Route exact path="/" component={Events} />
    <Route path="/event/:id" component={Event} />
  </Switch>
);

export default MainContent;
