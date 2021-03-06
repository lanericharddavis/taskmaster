import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import { saveState } from "../Utils/LocalStorage.js"


class ListsService {

  submitList(listElement) {
    ProxyState.lists = [...ProxyState.lists, new List(listElement.name, listElement.color, listElement.taskCount)]
    console.log(listElement.name, listElement.id)
    saveState()
  }

  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    saveState()
  }

  // taskCounter() {
  //   ProxyState.lists = [...ProxyState.lists]
  // }

}




export const listsService = new ListsService()