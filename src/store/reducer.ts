import { ENTRY_VAL,LIST_DATA } from './action'

export interface IReducerState {
  currentVal: string;
  list: string[];
}

export interface IReducerAction {
  type: string;
  value: any;
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
    default:
      return state
  }
}