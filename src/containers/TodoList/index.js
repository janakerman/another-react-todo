import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../../components/List';

class TodoList extends Component {

    render() {
        const todoLists = this.props.todoLists ? this.props.todoLists : [];
        const list = todoLists.find(list => list.id === parseInt(this.props.match.params.id, 10));

        if (!list) {
            return null;
        }

        return <List title={list.title} items={list.items} />;
    }
}

const mapStateToProps = (state) => ({
    todoLists: state.todoLists
})

export default connect(mapStateToProps)(TodoList);
