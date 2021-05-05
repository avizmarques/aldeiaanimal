import { MdStar, MdStarBorder } from "react-icons/md";
import { Review } from "../model/review";

export default function ReviewCard({
  review,
  className,
}: {
  review: Review;
  className?: string;
}) {
  return (
    <div className={className}>
      <Stars stars={review.stars} />
      <div className="text-xl font-bold w-1/2 mb-4">{review.quote}</div>
      <div>- {review.author}</div>
    </div>
  );
}

function Stars({ stars }: { stars: number }) {
  const starsFilled = [...Array(5)].map((star, i) =>
    stars >= i + 1 ? true : false
  );

  return (
    <div className="flex mb-4">
      {starsFilled.map((filled) =>
        filled ? (
          <MdStar color="#364F59" size={40} />
        ) : (
          <MdStarBorder color="#364F59" size={40} />
        )
      )}
    </div>
  );
}
