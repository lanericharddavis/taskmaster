import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(taskItem, listId, id = generateId()) {
    this.id = id
    this.listId = listId
    this.taskItem = taskItem
  }

  get Template() {
    return `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
           <p>${this.taskItem} <i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></p>
        </label>
      </div>


      
    `
  }

}