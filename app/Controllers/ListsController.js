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
    //  NOT SURE WHY MY TASKSCOUNT INDICATOR ON THE HTML ISN'T UPDATED WHEN A NEW TASK IS ADDED.
    ProxyState.on('lists', _draw)
    // Shouldn't this ProxyState.on 'tasks' look for updates to everything in the 'tasks' array?
    ProxyState.on('tasks', _draw)
    loadState()
    _draw()
  }

  submitList() {
    window.event.preventDefault()
    let form = window.event.target

    // Trying to find the list's id so I can display a number of tasks for that specific list (instead of total tasks for all lists.)

    // let currentList = ProxyState.lists.find(listid => listslistsElement.id === listslistsElement.id)
    let listElement = {
      name: form['name'].value,
      color: form['color'].value,
      // I'm confused on how to make the List's taskCount parameter reflect this specifics list's number of task
      taskCount: ProxyState.tasks.length
    }
    listsService.submitList(listElement)
    console.log("ListSubmit from ListsController")
    form.reset()
  }

  deleteList(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          listsService.deleteList(id),
          'Deleted!'
        )
      }
    })
  }
}