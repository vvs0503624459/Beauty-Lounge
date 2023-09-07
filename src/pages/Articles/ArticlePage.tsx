import { useParams } from 'react-router-dom'
import articlesArray, {
    Article,
    getArticlesObject,
} from '../../utils/articlesArray'
import './ArticlePage.scss'
import ReviewsList from '../../components/Reviews/ReviewsList'
type Props = {}
type ArticleObjectType = {
    [id: number]: Article
}
const ArticlePage = (props: Props) => {
    const { id } = useParams()
    const articlesObject: ArticleObjectType = getArticlesObject(articlesArray)
    return (
        <div>
            <p className="article-title">
                {articlesObject[parseInt(id!)].title}
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
