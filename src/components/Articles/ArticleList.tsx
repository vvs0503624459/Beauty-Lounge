import { Grid } from '@mui/material'
import articlesArray from '../../utils/articlesArray'
import ArticleListItem from './ArticleListItem'
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
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={10}
                        key={id}
                        className="article-box"
                    >
                        <ArticleListItem
                            id={id}
                            title={title}
                            date={date}
                            introduction={introduction}
                            image={image}
                        />
                    </Grid>
                ))}
        </Grid>
    )
}

export default ArticleList
