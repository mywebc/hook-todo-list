import React from 'react'

interface IListItemProps {
    /**每一条数据 */
    item: string;
}

const ListItem: React.FC<IListItemProps> = (props) => {
    return (
        <>
            {props.item}
        </>
    )
}

export default ListItem