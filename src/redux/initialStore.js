import { v4 as uuidv4 } from "uuid";

const initialStore = {
  count: 0,
  listArr: ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'],
  inputValue: '',
  list: ['orange', 'blue', 'green', 'yellow', 'black', 'aqua'].map((task) => ({
    id: uuidv4(),
    text: task
  })),

  todos: {
    loading: false,
    tasks: []
  }


}

export default initialStore