import React, { useState, useContext } from 'react'
import myContext from '../../store/context'
import { DELETE_ITEM } from '../../store/action'

interface IListItemProps {
    /**每一条数据 */
    item: string;
    /**当前数据ID */
    itemId: number;
}

const ListItem: React.FC<IListItemProps> = (props) => {

    const [isCheck, setCheck] = useState<boolean>(false)
    const { dispatch } = useContext(myContext)

    const clickCheckbox = (): void => {
        setCheck(isCheck => !isCheck)
    }

    const deleteItem = (): void => {
        console.log("current id:", props.itemId)
        dispatch({ type: DELETE_ITEM, value: props.itemId })
    }

    return (
        <div className="listItem">
            <input type="checkbox" onChange={clickCheckbox} checked={isCheck} />
            <div className="item" style={isCheck ? { textDecoration: 'line-through' } : {}}>
                {props.item}
            </div>
            <div className="delete" onClick={deleteItem}>X</div>
        </div>
    )
}


export default ListItem