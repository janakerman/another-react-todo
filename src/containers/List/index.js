import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../../components/TodoList';

class List extends Component {

    render() {
        const todoLists = this.props.todoLists ? this.props.todoLists : [];
        const list = todoLists.find(list => list.id === parseInt(this.props.match.params.id, 10));

        return <TodoList todoList={list}/>;
    }
}

const mapStateToProps = (state) => ({
    todoLists: state.todoLists
})

export default connect(mapStateToProps)(List);
