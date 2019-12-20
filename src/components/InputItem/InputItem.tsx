import React, { useRef, useContext } from "react";
import myContext from "../../store/context";
import { LIST_DATA } from "../../store/action";

const InputItem: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(myContext);

  const clickInputVal = () => {
    fetchVal();
  };

  const entryInputValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      fetchVal();
    }
  };

  const fetchVal = () => {
    const inputVal = (inputRef.current as HTMLInputElement).value;
    dispatch({
      type: LIST_DATA,
      value: { data: inputVal, id: Date.now(), isCheck: false },
    });
    (inputRef.current as HTMLInputElement).value = "";
  };

  return (
    <div className="inputText">
      <input type="text" ref={inputRef} onKeyUp={entryInputValue} />
      <a onClick={clickInputVal}>添加</a>
    </div>
  );
};

export default InputItem;
