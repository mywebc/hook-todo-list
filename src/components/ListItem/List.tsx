import React, { useContext, useEffect } from 'react'
import ListItem from './ListItem'
import ButtomFilter from '../ButtomFilter/ButtomFilter'
interface IListProps {
    /**所有数据 */
    list: { value: string; id: number }[];
}

const List: React.FC<IListProps> = (props) => {

    return (
        <>
            {props.list.map(ele => (<ListItem item={ele} key={ele.id} />))}
            <ButtomFilter/>
        </>
    )
}

export default List