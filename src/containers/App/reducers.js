import todoListService from '../../services/todoLists';

const TODO_FETCH_LOADING = 'TODO_FETCH_LOADING';
const TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS';
const TODO_FETCH_ERROR = 'TODO_FETCH_ERROR';
const TODO_LIST_ADD = 'TODO_LIST_ADD';

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
            // This feels so wrong (super verbose for learning purposes).
            // Get the lists from the state
            const todoLists = state.todoLists;
            // Find the index of the list we want to update.
            const listToAddIndex = todoLists.findIndex(list => list.id === action.listId);
            // This is the old list.
            const oldList = todoLists[listToAddIndex];
            // Create a new list item.
            const newItem = { title: action.todoTitle };
            const newItems = [...oldList.items, newItem];
            // Copy the updated item list into the new list.
            const newList = {...oldList, items: newItems };

            // Copy the lists object..
            const newTodoLists = [
                ...todoLists
            ];

            // And replace the todos
            newTodoLists.splice(listToAddIndex, 1, newList);

            return {
                ...state,
                todoLists: newTodoLists
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
