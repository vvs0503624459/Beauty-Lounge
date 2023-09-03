import { Grid, Card, CardContent } from '@mui/material'
import articlesArray from '../../utils/articlesArray'
import { Link } from 'react-router-dom'
// import ArticleItem from './ArticleItem'

type Props = {}

const ArticleList = (props: Props) => {
    return (
        <Grid container spacing={4}>
            {/* {productsArray.filter(({category}) => category==="sport").map( */}
            {articlesArray.map(
                ({
                    id,
                    title,
                    date,
                    // сategories,
                    // excerpt,
                    introduction,
                    image,
                }) => (
                    <Grid item xs={12} sm={6} md={10} key={id}>
                        <p className="article-title">
                            <Link to={`/${id}`}>{title}</Link>
                        </p>
                        <div className="article-image">
                            <img src={image} alt={title} />
                        </div>
                        <p className="article-date">{date}</p>
                        <div className="introduction">{introduction}</div>
                    </Grid>
                )
            )}
        </Grid>
    )
}

export default ArticleList
