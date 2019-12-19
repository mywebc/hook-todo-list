import React, { useRef, useContext } from "react";
import myContext from "../../store/context";
import { LIST_DATA } from "../../store/action";

const InputItem: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(myContext);

  const clickInputVal = (): void => {
    fetchVal();
  };

  const entryInputValue = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13) {
      fetchVal();
    }
  };

  const fetchVal = (): void => {
    const inputVal = (inputRef.current as HTMLInputElement).value;
    dispatch({
      type: LIST_DATA,
      value: { value: inputVal, id: Date.now() },
      isCheck: false
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
