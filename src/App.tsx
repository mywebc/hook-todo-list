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
        {/* 输入框 */}
        <div className="inputWrapper">
          <InputItem />
        </div>
        {/* 显示列表 */}
        <div className="list">
          <List />
        </div>
      </myContext.Provider>
    </>
  );
}

export default App;
