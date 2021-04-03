import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(name, color, id = generateId()) {
    this.name = name
    this.color = color
    this.id = id
  }

  get Template() {

    return /*html*/`
            <div class="col-md-4">
                <div class="list-card shadow bg-white rounded">
                    <div class="text-center bg-${this.color} p-2 d-flex justify-content-between">
                        <h3>${this.name}</h3>
                        <i class="fas fa-trash-alt ml-2" onclick="app.listsController.deleteList('${this.id}')"></i>
                    </div>
                    <div class="text-center">
                    <p>${ProxyState.taskCount} /${ProxyState.taskCount}</p>
                    </div>
                    <div class="p-3">
                        <ul>
                            ${this.Tasks}
                        </ul>
                    </div>
                    <form class="d-flex p-2" onsubmit="app.tasksController.submitTask('${this.id}')">
                        <input type="text" name="taskItem" id="taskId" class="form-control"
                            placeholder="What task do you want to put off until later..." aria-describedby="helpId" required min="2" max="15">
                        <button type="submit" class="btn btn-success" title='submit task to this list'><i
                                class="fas fa-plus"></i></button>
                    </form>
                </div>
            </div>
              `
  }

  get Tasks() {
    let thetask = ProxyState.tasks.filter(t => t.listId === this.id)
    let template = ''
    thetask.forEach(t => template += t.Template)
    return template
  }



  //   let lists = ProxyState.lists
  // let template = ''
  // lists.forEach(l => template += l.Template)
  // document.getElementById("newBlankList").innerHTML = template


}