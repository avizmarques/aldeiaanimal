import axios from "axios";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import About from "../components/clinica/about";
import PageTopImage from "../components/pageTopImage";
import { Review } from "../model/review";
import ReviewCard from "../components/reviewCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:1337/reviews");
  return { props: { reviews: data } };
}

export default function Clinica({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <PageTopImage label="Sobre a nossa clinica" />
      <About />
      <div className="p-24 flex flex-col items-center justify-center">
        <div className="font-display text-5xl text-green mb-8">Avaliações</div>
        <div className="w-1/3 bg-blue-light rounded rounded-lg p-10 pl-24x">
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={false}
            showIndicators={false}
            showStatus={false}
          >
            {reviews.map((review) => (
              <ReviewCard
                review={review}
                className="flex flex-col items-center justify-center"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
