import { Grid } from '@mui/material'
import articlesArray from '../../utils/articlesArray'
import { Link } from 'react-router-dom'
// import ArticleItem from './ArticleItem'

type Props = {
    tagItem: string
    categoryItem: string
}

const ArticleList = ({ tagItem, categoryItem }: Props) => {
    return (
        <Grid container spacing={4}>
            {articlesArray
                .filter(
                    (item) =>
                        item.categories.includes(categoryItem) &&
                        item.tag.includes(tagItem)
                )
                .map(({ id, title, date, introduction, image }) => (
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
                ))}
        </Grid>
    )
}

export default ArticleList
