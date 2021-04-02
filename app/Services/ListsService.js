import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"



class ListsService {

  submitList(listElement) {
    ProxyState.lists = [...ProxyState.lists, new List(listElement.name, listElement.color)]
    console.log("submitList from ListsService")
  }

  deleteList(listId) {
    ProxyState.lists = ProxyState.lists.filter(l => l.listId != listId)
  }

}




export const listsService = new ListsService()