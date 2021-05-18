import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import { Profile, Review } from "../../model";
import ReviewCard from "../reviewCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { url } from "../../pages/_app";

export default function DraBa({
  reviews,
  profile,
}: {
  reviews: Review[];
  profile: Profile;
}) {
  return (
    <div className="md:grid md:grid-cols-2 gap-24 py-24">
      <div className="flex flex-col md:justify-end md:items-end justify-center items-center px-12 md:px-0">
        <Image
          src={`${url}${profile.photo.url}`}
          width={profile.photo.width}
          height={profile.photo.height}
        />
        <div className="font-display text-4xl mt-4 mb-4">{profile.name}</div>
        <div className="md:w-1/2 md:text-right text-center">
          {profile.about}
        </div>
      </div>
      <div className="hidden md:flex items-center">
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
