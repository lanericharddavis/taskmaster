import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { tasksService } from "../Services/TasksService.js"



//PRIVATE

function _draw() {
  let lists = ProxyState.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById("newBlankList").innerHTML = template
}



//PUBLIC
export default class ListsController {
  constructor() {

    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    ProxyState.on('taskCount', _draw)
    _draw()
  }

  submitList() {
    window.event.preventDefault()
    let form = window.event.target
    let listElement = {
      name: form['name'].value,
      color: form['color'].value,
    }
    listsService.submitList(listElement)
    console.log("submitList button from ListsController")
    form.reset()
  }

  deleteList(listId) {
    if (window.confirm("Are You Sure You Want To Delete This List?")) {
      listsService.deleteList(listId);
    }
  }


}