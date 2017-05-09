import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import TileGrid from '../../components/TileGrid';

class TodoListGrid extends Component {

    constructor(props) {
        super(props);
        this.listSelected = this.listSelected.bind(this);
    }

    render() {
        return <TileGrid items={this.props.todoLists} titleSelector={this.getListTitle} itemClicked={this.listSelected} />;
    }

    listSelected(index) {
        const item = this.props.todoLists[index];
        this.props.history.push(`/list/${item.id}`);
    }

    getListTitle(todoList) {
        return todoList.title;
    }

}

const mapStateToProps = (state) => ({
    todoLists: state.todoLists
});

export default withRouter(connect(mapStateToProps)(TodoListGrid));
