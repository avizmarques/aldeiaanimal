import { MdStar, MdStarBorder } from "react-icons/md";

import { Review } from "../model/review";

export default function ReviewCard({
  review,
  background,
}: {
  review: Review;
  background?: boolean;
}) {
  return (
    <div
      className={
        background &&
        "bg-blue-light rounded rounded-lg p-10 flex flex-col items-center justify-center"
      }
    >
      <Stars stars={review.stars} />
      <div className="text-xl font-bold mb-4">{review.quote}</div>
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
