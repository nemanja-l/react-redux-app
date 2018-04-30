import React from 'react';
import { Route, Link } from 'react-router-dom';
import {
  City,
  Activity
} from './../';

const App = () => (
  <div>
    <main>
      <Route exact path="/city/:city" component={City} />
      <Route exact path="/activity/:id" component={Activity} />
    </main>
  </div>
);

export default App;
