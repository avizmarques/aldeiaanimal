import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import { Review } from "../../model/review";
import ReviewCard from "../reviewCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function DraBa({ reviews }: { reviews: Review[] }) {
  return (
    <div className="py-24 flex items-center">
      <div className="w-1/2 pr-24 flex flex-col justify-end items-end">
        <Image src="/images/ba.png" width={170} height={170} />
        <div className="font-display text-4xl mt-4 mb-4">
          Dra. Barbara Vizinho
        </div>
        <div className="w-1/2 text-right">
          Qualquer coisa sobre ti :) A Dra. Barbara formou-se na faculdade
          whatever e bladibla.
        </div>
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
