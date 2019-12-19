import { ENTRY_VAL,LIST_DATA ,DELETE_ITEM} from './action'

export interface IReducerState {
  currentVal: string;
  list: {value: string, id: number}[];
}

export interface IReducerAction {
  type: string;
  value?: any;
}



export const initialState: IReducerState = {
  currentVal: "",
  list: []
}

export const toDoListReducer = (state: IReducerState, action: IReducerAction):IReducerState => {
  switch (action.type) {
    case ENTRY_VAL:
      return { ...state, currentVal: action.value }

    case LIST_DATA:
      const listCopy = state.list
      listCopy.push(action.value)
      return { ...state, list: listCopy }

    case DELETE_ITEM:
      const deleteId = state.list.findIndex(ele => ele.id === action.value)
      state.list.splice(deleteId,1)
      return {...state}

    default:
      return state
  }
}