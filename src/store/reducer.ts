import { LIST_DATA, DELETE_ITEM, CHANGE_CHECK, FILTER_LIST } from './action'

export interface IReducerState {
  list: { data: string, id: number, isCheck: boolean }[];
}

export interface IReducerAction {
  type: string;
  value: { data: string; id: number; isCheck: boolean };
}

export const initialState: IReducerState = {
  list: []
}

export const toDoListReducer = (state: IReducerState, action: IReducerAction): IReducerState => {
  switch (action.type) {
    case LIST_DATA:
      state.list.push(action.value)
      return { ...state }

    case DELETE_ITEM:
      const deleteId = state.list.findIndex(ele => ele.id === action.value.id)
      state.list.splice(deleteId, 1)
      return { ...state }

    case CHANGE_CHECK:
      state.list.forEach(ele => {
        if (ele.id === action.value.id) {
          ele.isCheck = action.value.isCheck
        }
      })
      return { ...state }

    // case FILTER_LIST:
    //   return (function (): IReducerState {
    //     if (action.value.data === 'done') {
    //       return { ...state, list: state.list.filter(ele => ele.isCheck === true) }
    //     } else if (action.value.data === 'not') {
    //       return { ...state, list: state.list.filter(ele => ele.isCheck === false) }
    //     } else {
    //       return { ...state }
    //     }
    //   })()

    default:
      return state
  }
}