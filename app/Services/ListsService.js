import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"



class ListsService {

  submitList(listElement) {
    ProxyState.lists = [...ProxyState.lists, new List(listElement.name, listElement.color)]
    console.log("submitList from ListsService")
  }



}




export const listsService = new ListsService()