export type Review = {
    id: number
    title: string
    title_link: string
    date: string
    comment: string
}
const reviewsArray: Review[] = [
    {
        id: 1,
        title: "CAT'S EYE MANICURE: TOP 6 IDEAS FOR YOUR IMAGE",
        title_link: 'CATS-EYE-MANICURE',
        date: '06 / 09 / 23',
        comment: 'string',
    },
]

export const getReviewsObject = (array: Review[]) =>
    array.reduce(
        (object, review) => ({
            ...object,
            [review.id]: review,
        }),
        {}
    )
export default reviewsArray
