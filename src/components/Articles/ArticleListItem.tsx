import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleLike } from '../../redux/likeReducer'
import './ArticleListItem.scss'
type Props = {
    id: number
    title: string
    date: string
    introduction: string
    image: string
}

const ArticleListItem = ({ id, title, date, introduction, image }: Props) => {
    const isLiked = useAppSelector((state) => state.articlesLikeState[id])
    const dispatch = useAppDispatch()
    return (
        <>
            <p className="article-title flex">
                <Link to={`/${id}`}>{title}</Link>
                <Button
                    className="btn-like"
                    variant="outlined"
                    onClick={() => dispatch(toggleLike(id))}
                >
                    {isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                </Button>
            </p>
            <div className="article-image">
                <img src={image} alt={title} />
            </div>
            <p className="article-date">{date}</p>
            <div className="introduction">{introduction}</div>
        </>
    )
}

export default ArticleListItem
