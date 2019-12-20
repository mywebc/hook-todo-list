import React, { useContext, useEffect, useState } from 'react'
import ListItem from './ListItem'
import ButtomFilter from '../ButtomFilter/ButtomFilter'
import myContext from "../../store/context";


type listFormat = { data: string; id: number; isCheck: boolean }[];

const List: React.FC = () => {
    const { state } = useContext(myContext)
    const [listTemp, setListTemp] = useState<listFormat>(state.list)

    const changeStorage = (flag: string) => {
        console.log("list", state.list)
        const listCopy = (function () {
            if (flag === 'done') {
                return state.list.filter(ele => ele.isCheck === true)
            } else if (flag === 'not') {
                return state.list.filter(ele => ele.isCheck === false)
            } else {
                return state.list
            }
        })()
        setListTemp(listCopy)
    }

    useEffect(() => {
        setListTemp(state.list)
    }, [state])

    return (
        <>
            {listTemp.map(ele => (<ListItem item={ele} key={ele.id} />))}
            <ButtomFilter changeStorage={changeStorage} />
        </>
    )
}

export default List