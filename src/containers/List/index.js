import React, { Component } from 'react';

import todoLists from '../../services/todoLists';
import TodoList from '../../components/TodoList';

class List extends Component {

    constructor(props) {
        super(props);
        this.list = todoLists.find(parseInt(props.match.params.id, 10));
    }

    render() {
        return (
            <div>
                <p>{this.list.title}</p>
                <TodoList todos={this.list.items}/>
            </div>
        )
    }
}

export default List;
