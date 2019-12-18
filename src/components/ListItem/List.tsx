import React, { useContext } from 'react'
import ListItem from './ListItem'
interface IListProps {
    /**所有数据 */
    list: string[];
}

const List: React.FC<IListProps> = (props) => {


    return (
        <>
            {props.list.map(ele => (<ListItem item={ele} />))}
        </>
    )
}

export default List