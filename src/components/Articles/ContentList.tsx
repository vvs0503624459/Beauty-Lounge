import { Typography } from '@mui/material'
import articlesArray from '../../utils/articlesArray'

type Props = { tagItem: string; categoryItem: string }

const ContentList = ({ tagItem, categoryItem }: Props) => {
    return (
        <Typography className="article-list-number">
            {' '}
            Enjoy{' '}
            {
                articlesArray.filter(
                    (item) =>
                        item.categories.includes(categoryItem) &&
                        item.tag.includes(tagItem)
                ).length
            }{' '}
            {tagItem === 'recent' ? `${tagItem} ` : ''}
            article(s){' '}
            {categoryItem !== 'all' ? `in category ${categoryItem}` : ''}
        </Typography>
    )
}

export default ContentList
