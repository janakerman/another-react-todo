import todoListService from '../../services/todoLists';

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

export default appReducer;

export const actions = {
    todoListsFetch
};
