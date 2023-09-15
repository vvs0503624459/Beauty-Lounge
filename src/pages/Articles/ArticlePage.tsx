import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import articlesArray, {
    Article,
    getArticlesObject,
} from '../../utils/articlesArray'
import './ArticlePage.scss'
import ReviewsList from '../../components/Reviews/ReviewsList'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleLike } from '../../redux/likeReducer'
type Props = {}
type ArticleObjectType = {
    [id: number]: Article
}
const ArticlePage = (props: Props) => {
    const { id } = useParams()
    const articlesObject: ArticleObjectType = getArticlesObject(articlesArray)
    const isLiked = useAppSelector(
        (state) => state.articlesLikeState[articlesObject[parseInt(id!)].id]
    )
    const dispatch = useAppDispatch()

    return (
        <div className="article-box">
            <img
                className="article-page-image"
                src={articlesObject[parseInt(id!)].image}
                alt={articlesObject[parseInt(id!)].title}
            />
            <p className="article-title flex">
                {articlesObject[parseInt(id!)].title}
                <Button
                    className="btn-like"
                    variant="outlined"
                    onClick={() => dispatch(toggleLike(id))}
                >
                    {isLiked ? (
                        <ThumbUpAltIcon color="primary" />
                    ) : (
                        <ThumbUpOffAltIcon />
                    )}
                </Button>
            </p>
            <p className="article-date">{articlesObject[parseInt(id!)].date}</p>
            <div
                className="article-text"
                dangerouslySetInnerHTML={{
                    __html: articlesObject[parseInt(id!)].article_text,
                }}
            ></div>

            <ReviewsList id={articlesObject[parseInt(id!)].id} />
        </div>
    )
}

export default ArticlePage
