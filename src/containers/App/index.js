import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './reducers';

import Header from '../../components/Header';
import LoadingIndicator from '../../components/LoadingIndicator';
import Lists from '../Lists';
import List from '../List';

class App extends Component {

  componentDidMount() {
    this.props.todoListsFetch();
  }

  render() {

    let content = (
      <div>
        <Route exact path="/" component={Lists} />
        <Route path="/list/:id" component={List} />
      </div>
    );
      
    if (this.props.isLoading) {
      content = <LoadingIndicator />;
    }

    return (
      <Router>
        <div>
          <Header title="React Todo" />
          { content }
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
