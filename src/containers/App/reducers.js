import todoListService from '../../services/todoLists';
import todoListReducer, { TODO_LIST_ADD } from '../TodoList/reducers';

const TODO_FETCH_LOADING = 'TODO_FETCH_LOADING';
const TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS';
const TODO_FETCH_ERROR = 'TODO_FETCH_ERROR';

const initial = {
    todoLists: [],
    isLoading: false,
    error: null
};

const appReducer = (state = initial, action) => {
    switch (action.type) {
        case TODO_FETCH_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case TODO_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todoLists: action.items
            };
        case TODO_FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case TODO_LIST_ADD:
            // Find the index of the list we want to update.
            const listToAddIndex = state.todoLists.findIndex(list => list.id === action.listId);
            const listToAdd = state.todoLists[listToAddIndex];
            return {
                ...state,
                todoLists: [
                    ...state.todoLists.slice(0, listToAddIndex),
                    todoListReducer(listToAdd, action),
                    ...state.todoLists.slice(listToAddIndex + 1)
                ]
            };
        default:
            return state;
    }
}

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

const todoListsAdd = (listId, todoTitle) => ({
    type: TODO_LIST_ADD,
    todoTitle,
    listId
});

export default appReducer;

export const actions = {
    todoListsFetch,
    todoListsAdd
};
