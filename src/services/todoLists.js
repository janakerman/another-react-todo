const todoLists = [
  {
    id: 1,
    title: 'Shopping List'
  },
  {
    id: 2,
    title: 'Getting Dressed'
  },
  {
    id: 3,
    title: 'Refresh React'
  }
];


class TodoService {

    get() {
        return todoLists;
    }

    find(id) {
      return todoLists.find(list => list.id === id);
    }

}

export default new TodoService();