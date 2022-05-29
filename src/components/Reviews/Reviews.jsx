import { Review } from "../Review/Review";

export const Reviews = ({reviews}) => {
    return <>
        <h2>Reviews</h2>
        {reviews.map(
            (review, i) => <Review key={review.id} review={review} />
        )}
    </>;
}