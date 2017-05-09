import { combineReducers } from 'redux';

import todoListService from '../../services/todoLists';

const TODO_FETCH_LOADING = 'TODO_FETCH_LOADING';
const TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS';
const TODO_FETCH_ERROR = 'TODO_FETCH_ERROR';

const isLoading = (state = false, action) => {
    switch (action.type) {
        case TODO_FETCH_LOADING:
            return true
        default:
            return state;
    }
};

const todoLists = (state = [], action) => {
    switch (action.type) {
        case TODO_FETCH_SUCCESS:
            return action.items
        default:
            return state;
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case TODO_FETCH_ERROR: 
            return action.error;
        default:
            return state;
    }
};

const todoListsFetchLoading = () => ({
    type: TODO_FETCH_LOADING
});

const todoListsFetchSuccess = (items) => ({
    type: TODO_FETCH_SUCCESS,
    items
});

const todoListsFetchError = (error) => ({
    type: TODO_FETCH_ERROR,
    error
});


const todoListsFetch = () => (dispatch) => {
    dispatch(todoListsFetchLoading());

    todoListService.get()
        .then((response) => {
            if (!response.ok) {
                throw new Error (response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .then(todoLists => dispatch(todoListsFetchSuccess(todoLists)))
        .catch(error => dispatch(todoListsFetchError(error)));
};

export default combineReducers({
    isLoading,
    todoLists,
    error
});

export const actions = {
    todoListsFetch,
    todoListsFetchLoading,
    todoListsFetchSuccess,
    todoListsFetchError
};
