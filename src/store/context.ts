import React from 'react'
import { IReducerState, IReducerAction ,initialState} from './reducer'


interface IContext {
    state: IReducerState ;
    dispatch: React.Dispatch<IReducerAction>;
}

export default React.createContext<IContext>({state: initialState, dispatch: ():void => {} })