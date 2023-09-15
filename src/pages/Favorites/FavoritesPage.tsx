import ArticleListItem from '../../components/Articles/ArticleListItem'
import { useAppSelector } from '../../redux/hooks'
import articlesArray, {
    Article,
    getArticlesObject,
} from '../../utils/articlesArray'
import { Grid } from '@mui/material'

type Props = {}
type ArticlesObjectType = {
    [id: number]: Article
}

const FavoritesPage = (props: Props) => {
    const articlesObject: ArticlesObjectType = getArticlesObject(articlesArray)
    const isLiked = useAppSelector((state) => state.articlesLikeState)
    return (
        <div>
            <div className="article-list-number">
                {' '}
                List of{' '}
                {
                    Object.keys(isLiked).filter(
                        (id) => isLiked[parseInt(id)] === true
                    ).length
                }{' '}
                favorit article(s)
            </div>
            <Grid container spacing={4}>
                {Object.keys(isLiked)
                    .filter((id) => isLiked[parseInt(id)] === true)
                    .map((id) => (
                        <Grid
                            item
                            xs={10}
                            sm={5}
                            md={5}
                            key={articlesObject[parseInt(id)].id}
                            className="article-box"
                        >
                            <ArticleListItem
                                id={articlesObject[parseInt(id)].id}
                                title={articlesObject[parseInt(id)].title}
                                date={articlesObject[parseInt(id)].date}
                                introduction={
                                    articlesObject[parseInt(id)].introduction
                                }
                                image={articlesObject[parseInt(id)].image}
                            />
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}

export default FavoritesPage
