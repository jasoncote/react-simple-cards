import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardGrid from './CardGrid';
import Card from './Card';
import CardDetails from './CardDetails';

import data from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={CardGrid} />
        <Route
          path="/card/:id"
          component={props => {
            const selectedShow = data.shows.find(show => props.match.params.id === show.imdbID);
            return <CardDetails show={selectedShow} {...props} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
