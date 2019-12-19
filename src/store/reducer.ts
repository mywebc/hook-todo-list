import { LIST_DATA, DELETE_ITEM, CHANGE_CHECK } from './action'

export interface IReducerState {
  currentVal: string;
  list: { value: string, id: number, isCheck: boolean }[];
}

export interface IReducerAction {
  type: string;
  value?: any;
  isCheck: boolean;
}



export const initialState: IReducerState = {
  currentVal: "",
  list: []
}

export const toDoListReducer = (state: IReducerState, action: IReducerAction): IReducerState => {
  switch (action.type) {
    case LIST_DATA:
      const listCopy = state.list
      listCopy.push(action.value)
      return { ...state, list: listCopy }

    case DELETE_ITEM:
      const deleteId = state.list.findIndex(ele => ele.id === action.value)
      state.list.splice(deleteId, 1)
      return { ...state }

    case CHANGE_CHECK:
      state.list.forEach(ele => {
        ele.isCheck = ele.id === action.value ? action.isCheck : !action.isCheck
      })
      return { ...state }

    default:
      return state
  }
}