import {
    Card,
    CardContent,
    Button,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import reviewsArray from '../../utils/reviewsArray'
type Props = {
    id: number
}
type Review = {
    article_id: number
    date: string
    comment: string
    nikName: string
}
const ReviewsList = ({ id }: Props) => {
    let formatter = new Intl.DateTimeFormat('en-GB', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
    })
    let date = formatter.format(new Date())
    // const reviewsObject: ReviewObjectType = getReviewsObject(reviewsArray)
    const [reviews, setReviews] = useState<Review[]>(reviewsArray)
    const [newReview, setNewReview] = useState<Review>({
        article_id: id,
        nikName: '',
        comment: '',
        date: date,
    })
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            nikName: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            comment: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.nikName === '' || newReview.comment === '') {
            alert('All fields are required!!!')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                article_id: id,
                nikName: '',
                comment: '',
                date: date,
            })
        }
    }
    console.log(reviews)
    return (
        <>
            <Typography variant="h4" component={'h2'} sx={{ margin: '30px 0' }}>
                Reviews
            </Typography>
            {reviews
                .filter(({ article_id }) => article_id === id)
                .map(({ nikName, comment, date }, i) => (
                    <Card
                        variant="outlined"
                        key={i}
                        sx={{ marginBottom: '15px' }}
                    >
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {nikName}:
                            </Typography>
                            <div>{comment}</div>
                            <div>{date}</div>
                        </CardContent>
                    </Card>
                ))}
            <form onSubmit={onSend}>
                <Typography variant="h5" component={'div'}>
                    Please leave a review
                </Typography>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.nikName}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your review"
                        value={newReview.comment}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    ADD
                </Button>
            </form>
        </>
    )
}

export default ReviewsList
