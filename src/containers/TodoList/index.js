import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '../../components/List';
import { actions } from '../App/reducers';

class TodoList extends Component {

    render() {
        const todoLists = this.props.todoLists ? this.props.todoLists : [];
        const list = todoLists.find(list => list.id === parseInt(this.props.match.params.id, 10));

        if (!list) {
            return null;
        }

        return (
            <div>
                <Link to={'/'}><p>Back</p></Link>
                <p onClick={() => this.props.todoListsAdd(1, 'Test')}>test</p>
                <List title={list.title} items={list.items} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todoLists: state.todoLists
})

export default connect(mapStateToProps, actions)(TodoList);
