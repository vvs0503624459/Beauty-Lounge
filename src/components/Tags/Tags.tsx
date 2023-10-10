import React from 'react'
import articlesArray from '../../utils/articlesArray'
import './Tags.scss'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'
type Props = { changeTag: (tag: string) => void }

const Tags = ({ changeTag }: Props) => {
    const TagList = Array.from(
        new Set(
            Array.from(
                articlesArray
                    .map((article) => article.tag)
                    .flat()
                    .sort()
            )
        )
    )
    // console.log(TagList)

    return (
        <div className="tags-list">
            <div className="tags-list-header">Tags:</div>
            {/* <div className="tags-list-box flex"> */}
            <div className="tags-list-box">
                {TagList.map((tag, i) => (
                    <div
                        key={i}
                        className="tags-list-item flex"
                        onClick={() => changeTag(tag)}
                    >
                        <StarBorderPurple500Icon fontSize="inherit" />
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tags
