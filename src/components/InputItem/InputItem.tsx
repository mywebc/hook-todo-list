import React, { useRef, useContext } from 'react'
import myContext from '../../store/context'
import { ENTRY_VAL ,LIST_DATA } from '../../store/action'

const InputItem: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const { state, dispatch } = useContext(myContext)

    const clickInputVal = () => {
        const inputVal = (inputRef.current as HTMLInputElement).value;
        dispatch({ type: LIST_DATA, value: inputVal })
    }

    const entryInputValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            const inputVal = (inputRef.current as HTMLInputElement).value;
            dispatch({ type: LIST_DATA, value: inputVal })
        }
    }

    return (
        <>
            <input type="text" ref={inputRef} onKeyUp={entryInputValue} />
            <a onClick={clickInputVal}>添加</a>
        </>
    )
}

export default InputItem
