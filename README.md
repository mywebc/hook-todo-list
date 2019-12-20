## react-hook-todoList
* 这是一个关于应用reactHook/typescript的example

## 文件目录
```javascript
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.tsx // 入口
│   ├── components
│   │   ├── ButtomFilter // 底部操作按钮
│   │   │   └── BottomFilter.tsx
│   │   ├── InputItem // 输入组件
│   │   │   └── InputItem.tsx
│   │   └── ListItem // 列表展示组件
│   │       ├── List.tsx
│   │       └── ListItem.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── store
│       ├── action.js // reducer需要的actions
│       ├── context.ts // 上下文
│       └── reducer.ts // reducer
├── tree.txt
└── tsconfig.json
```

## 使用useContext配合useReducer可以跨组件管理状态
* 在context.ts中创建context
```javascript
interface IContext {
    state: IReducerState ;
    dispatch: React.Dispatch<IReducerAction>;
}
export default React.createContext<IContext>({state: initialState, dispatch: ():void => {} })
```
* 在根组件中将state和dispatch注入
```javascript
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
```
