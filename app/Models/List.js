import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(title, color, listId = generateId()) {
    this.listId = listId
    this.title = title
    this.color = color
  }

  get Template() {

    return /*html*/`
            <div class="col-4 m-3">
                <div class="card">
                    <div class="card-header text-center bg-${this.color}">
                        <h4>${this.title}</h4>
                        <button type="delete" onclick="app.listsController.deleteList('${this.listId}')" class="btn btn-info" title='add list'><i class="fas fa-trash-alt"></i></button>
                        <p>task#completed / total#tasks</p>
                    </div>
                    <div class="card-body">
                        <ul id="newTaskItem" class="list-group">
                            ${this.Tasks}
                        </ul>
                        <form class="col d-flex justify-content-center my-3" onsubmit="app.tasksController.submitTask()">
                            <div class="input-group mb-3 justify-content-between">
                                <input type="text" name="taskElement" class="form-control" placeholder="Task Item To Do..."
                                    aria-label="Your Task" aria-describedby="button-addon2" required min="2"
                                    max="15">
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-info" title='add list'><i class="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            `
  }

  get Tasks() {
    let thetasks = ProxyState.tasks.filter(t => t.taskId === this.id)
    let template = ''
    thetasks.forEach(t => template += t.Template)
    return template
  }

}