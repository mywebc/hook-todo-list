import React, { useState, useContext, useEffect } from "react";
import myContext from "../../store/context";
import { DELETE_ITEM, CHANGE_CHECK } from "../../store/action";

interface IListItemProps {
  /**每一条数据 */
  item: { value: string; id: number };
}

const ListItem: React.FC<IListItemProps> = props => {
  const [isCheck, setCheck] = useState<boolean>(false);

  const { dispatch } = useContext(myContext);

  const clickCheckbox = () => {
    setCheck(!isCheck);
    dispatch({ type: CHANGE_CHECK, value: props.item.id, isCheck });
  };

  const deleteItem = () => {
    dispatch({ type: DELETE_ITEM, value: props.item.id, isCheck });
  };
  useEffect(() => {}, [props.item.id]);
  return (
    <div className="listItem">
      <input type="checkbox" onChange={clickCheckbox} checked={isCheck} />
      <div
        className="item"
        style={isCheck ? { textDecoration: "line-through" } : {}}
      >
        {props.item.value}
      </div>
      <div className="delete" onClick={deleteItem}>
        X
      </div>
    </div>
  );
};

export default ListItem;
