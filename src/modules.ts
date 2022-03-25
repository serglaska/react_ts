export interface ToDo {
  id: string;
  title: string;
}

export interface ToDoCallback {
  addToDo: (value: string) => void;
}

export interface ToDoItems {
  items: {
    id: string;
    title: string;
  }[];
  deleteItem: (id: string) => void
}
