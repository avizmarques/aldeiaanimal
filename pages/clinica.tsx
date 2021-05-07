import axios from "axios";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Review } from "../model/review";

import About from "../components/clinica/about";
import PageTopImage from "../components/pageTopImage";
import ReviewCard from "../components/reviewCard";

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
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          width={600}
        >
          {reviews.map((review) => (
            <ReviewCard review={review} background />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
