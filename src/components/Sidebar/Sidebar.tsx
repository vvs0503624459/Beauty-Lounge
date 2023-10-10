import React from 'react'
import Tags from '../Tags/Tags'
import './Sidebar.scss'
type Props = {
    changeTag: (tag: string) => void
}

const Sidebar = ({ changeTag }: Props) => {
    return (
        <div className="sidebar-box">
            <Tags changeTag={changeTag} />
        </div>
    )
}

export default Sidebar
