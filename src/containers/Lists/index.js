import React from 'react';
import { connect } from 'react-redux';

import TodoGrid from '../../components/TodoGrid';

const Lists = ({todoLists}) => (
    <TodoGrid todoLists={todoLists} />
);

const mapStateToProps = (state) => ({
    todoLists: state.todoLists
});

export default connect(mapStateToProps)(Lists);
