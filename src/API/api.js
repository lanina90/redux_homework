import axios from "axios";

let instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const toDoApi = {
  getToDoItems() {
    return instance.get('users/1/todos')
  }
}