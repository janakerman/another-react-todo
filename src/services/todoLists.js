const todoLists = [
  {
    id: 1,
    title: 'Shopping List',
    items: [
      {
        id: 1,
        title: 'Apples',
        done: false
      },
      {
        id: 2,
        title: 'Bananas',
        done: false
      },
      {
        id: 3,
        title: 'Pears',
        done: false
      },
      {
        id: 4,
        title: 'Lemons',
        done: false
      }
    ]
  },
  {
    id: 2,
    title: 'Getting Dressed',
    items: [
      {
        id: 5,
        title: 'Trousers',
        done: false
      },
      {
        id: 6,
        title: 'Socks',
        done: false
      },
      {
        id: 7,
        title: 'Underwear',
        done: false
      }
    ]
  },
  {
    id: 3,
    title: 'Refresh React',
    items: [
      {
        id: 8,
        title: 'react-create-app',
        done: false
      },
      {
        id: 9,
        title: 'Basic React',
        done: false
      },
      {
        id: 10,
        title: 'Redux',
        done: false
      },
      {
        id: 11,
        title: 'Router',
        done: false
      }
    ]
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