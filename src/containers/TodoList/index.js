import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '../../components/List';
import { actions } from '../App/reducers';

class TodoList extends Component {

    render() {
        const listId = parseInt(this.props.match.params.id, 10);

        const todoLists = this.props.todoLists ? this.props.todoLists : [];
        const list = todoLists.find(list => list.id === listId);

        if (!list) {
            return null;
        }

        return (
            <div>
                <Link to={'/'}><p>Back</p></Link>
                <p onClick={() => this.props.todoListsAdd(listId, 'Test')}>test</p>
                <List title={list.title} items={list.items} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todoLists: state.todoLists
})

export default connect(mapStateToProps, actions)(TodoList);
