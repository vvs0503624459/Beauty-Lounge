export type Review = {
    article_id: number
    date: string
    comment: string
    nikName: string
    avatar: string
}
const reviewsArray: Review[] = [
    {
        article_id: 1,
        date: '06/09/23',
        comment:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        nikName: 'Jack',
        avatar: 'images/reviews/review-avatar-2.png',
    },
    {
        article_id: 1,
        date: '07/09/23',
        comment:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        nikName: 'Mary',
        avatar: 'images/reviews/review-avatar-3.png',
    },
    {
        article_id: 4,
        date: '08/09/23',
        comment:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        nikName: 'Jack Black',
        avatar: 'images/reviews/review-avatar-4.png',
    },
    {
        article_id: 5,
        date: '09/09/23',
        comment:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        nikName: 'Jack White',
        avatar: 'images/reviews/review-avatar-5.png',
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
