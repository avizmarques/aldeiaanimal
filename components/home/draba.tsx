import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import { Profile, Review } from "../../model";
import ReviewCard from "../reviewCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function DraBa({
  reviews,
  profile,
}: {
  reviews: Review[];
  profile: Profile;
}) {
  return (
    <div className="py-24 flex items-center">
      <div className="w-1/2 pr-24 flex flex-col justify-end items-end">
        <Image
          src={`http://localhost:1337${profile.photo.url}`}
          width={profile.photo.width}
          height={profile.photo.height}
        />
        <div className="font-display text-4xl mt-4 mb-4">{profile.name}</div>
        <div className="w-1/2 text-right">{profile.about}</div>
      </div>
      <div className="w-1/2 pl-24">
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showStatus={false}
        >
          {reviews.map((review) => (
            <ReviewCard review={review} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
