import React, { useReducer, useContext } from 'react';
import InputItem from './components/InputItem/InputItem'
import myContext from './store/context'
import { initialState, toDoListReducer } from './store/reducer'
import List from './components/ListItem/List';


const App: React.FC = () => {

  const [state, dispatch] = useReducer(toDoListReducer, initialState)
  return (
    <>
      <myContext.Provider value={{ state, dispatch }}>
        <div className="inputWrapper">
          <InputItem />
        </div>
        <div className="list">
          <List list={state.list} />
        </div>
      </myContext.Provider>
    </>
  );
}

export default App;
