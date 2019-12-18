import React, { useReducer, useContext } from 'react';
import InputItem from './components/InputItem/InputItem'
import myContext from './store/context'
import { initialState, toDoListReducer } from './store/reducer'
import List from './components/ListItem/List';


const App: React.FC = () => {

  const [state , dispatch] = useReducer(toDoListReducer, initialState)
  return (
    <div className="App">
      <myContext.Provider value={{ state, dispatch }}>
        <InputItem />
        <List list={state.list}/> 
      </myContext.Provider>
    </div>
  );
}

export default App;
