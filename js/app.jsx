import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardGrid from "./CardGrid";
import Card from "./Card";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route strict path="/" component={CardGrid} />
        <Route strict path="/card:id" component={Card} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'));
