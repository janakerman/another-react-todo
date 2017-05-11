const initialState = [];

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TODO_LIST_ADD:
            return {
                ...state,
                items: [...state.items, { title: action.todoTitle }]
            }
        default:
            return state;
    }
};

const todoListsAdd = (listId, todoTitle) => ({
    type: TODO_LIST_ADD,
    todoTitle,
    listId
});


export default reducer;

export const TODO_LIST_ADD = 'TODO_LIST_ADD';

export const actions = {
    todoListsAdd
}