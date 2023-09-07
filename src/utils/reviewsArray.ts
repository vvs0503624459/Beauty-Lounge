export type Review = {
    article_id: number
    date: string
    comment: string
    nikName: string
}
const reviewsArray: Review[] = [
    {
        article_id: 1,
        date: '06/09/23',
        comment: 'string',
        nikName: 'Jack',
    },
]

export const getReviewsObject = (array: Review[]) =>
    array.reduce(
        (object, review) => ({
            ...object,
            [review.article_id]: review,
        }),
        {}
    )
export default reviewsArray
