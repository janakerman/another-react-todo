import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../../components/Header';
import Lists from '../Lists';
import List from '../List';

const title = "React Todo";

const App = ({todoLists = []}) => (
  <Router>
    <div>
      <Header title={title} />
      <Route exact path="/" component={Lists} />
      <Route path="/list/:id" component={List} />
    </div>
  </Router>
)

export default App;
