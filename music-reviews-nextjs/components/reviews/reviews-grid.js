import classes from './reviews-grid.module.css';
import ReviewItem from './review-item';

export default function ReviewsGrid({ reviews }) {

    return (
        <ul className={classes.reviews}>
            {reviews.map((review) => (
                <li key={review.id}>
                    <ReviewItem {...review} />
                </li>
            ))}
        </ul>
    );

}