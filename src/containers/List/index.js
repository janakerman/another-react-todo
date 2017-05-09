import React, { Component } from 'react';
import todoLists from '../../services/todoLists';

class List extends Component {

    constructor(props) {
        super(props);
        this.list = todoLists.find(parseInt(props.match.params.id));
    }

    render() {
        return (
            <p>{this.list.title}</p>
        )
    }
}

export default List;
