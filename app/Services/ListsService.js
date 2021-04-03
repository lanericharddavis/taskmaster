import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"



class ListsService {

  submitList(listElement) {
    ProxyState.lists = [...ProxyState.lists, new List(listElement.name, listElement.color)]
    console.log(listElement.name, List.id)
  }

  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
  }

}




export const listsService = new ListsService()