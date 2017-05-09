import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './reducers';

import Header from '../../components/Header';
import Lists from '../Lists';
import List from '../List';

class App extends Component {

  componentDidMount() {
    this.props.todoListsFetch();
  }

  render() {
    return (
      <Router>
        <div>
          <Header title="React Todo" />
          <Route exact path="/" component={Lists} />
          <Route path="/list/:id" component={List} />
        </div>
      </Router>
    );
  }

}

const mapStateToProps = (state) => ({
  error: state.error,
  isLoading: state.isLoading
});

export default connect(mapStateToProps, actions)(App);
