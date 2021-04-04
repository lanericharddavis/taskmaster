import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import { listsService } from "../Services/ListsService.js"
import { tasksService } from "../Services/TasksService.js"
import { loadState } from "../Utils/LocalStorage.js"



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
    // ProxyState.on('taskCount', _draw)
    loadState()
    _draw()
  }

  submitList() {
    window.event.preventDefault()
    let form = window.event.target

    // Trying to find the list's id so I can display a number of tasks for that specific list (instead of total tasks for all lists.)

    // let currentList = ProxyState.lists.find(ProxyState.lists => ProxyState.listslistsElement.id == ProxyState.listslistsElement.id)
    let listElement = {
      name: form['name'].value,
      color: form['color'].value,
      // I'm confused on how to make the List's taskCount parameter reflect this specifics list's number of tasks

      // taskCount: currentList
    }
    listsService.submitList(listElement)
    console.log("ListSubmit from ListsController")
    form.reset()
  }

  deleteList(id) {
    if (window.confirm("Are You Sure You Want To Delete This List?")) {
      listsService.deleteList(id);
    }
  }


}