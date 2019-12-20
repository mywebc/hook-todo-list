import React, { useState, useContext, useEffect } from "react";
import myContext from "../../store/context";
import { DELETE_ITEM, CHANGE_CHECK } from "../../store/action";

interface IListItemProps {
  /**每一条数据 */
  item: { data: string; id: number; isCheck: boolean };
}

const ListItem: React.FC<IListItemProps> = props => {
  const [isCheck, setCheck] = useState<boolean>(props.item.isCheck);
  const { dispatch } = useContext(myContext);

  const clickCheckbox = () => {
    dispatch({ type: CHANGE_CHECK, value: { data: "", id: props.item.id, isCheck: !isCheck } });
    setCheck(!isCheck);
  };

  const deleteItem = () => {
    dispatch({ type: DELETE_ITEM, value: { data: "", id: props.item.id, isCheck } });
  };


  return (
    <div className="listItem">
      <input type="checkbox" onChange={clickCheckbox} checked={isCheck} />
      <div
        className="item"
        style={isCheck ? { textDecoration: "line-through" } : {}}
      >
        {props.item.data}
      </div>
      <div className="delete" onClick={deleteItem}>
        X
      </div>
    </div>
  );
};

export default ListItem;
