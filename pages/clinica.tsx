import axios from "axios";
import Image from "next/image";
import remark from "remark";
import html from "remark-html";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Review } from "../model";

import About from "../components/clinica/about";
import PageTopImage from "../components/pageTopImage";
import ReviewCard from "../components/reviewCard";
import Atendimento from "../components/home/atendimento";

export async function getStaticProps() {
  const { data: reviews } = await axios.get("http://localhost:1337/reviews");
  const { data: openingTimes } = await axios.get(
    "http://localhost:1337/horario-de-atendimento"
  );

  const htmlTimes = await remark().use(html).process(openingTimes.horario);

  return { props: { reviews, openingTimes: htmlTimes.contents } };
}

export default function Clinica({
  reviews,
  openingTimes,
}: {
  reviews: Review[];
  openingTimes: string;
}) {
  return (
    <div>
      <PageTopImage label="Sobre a nossa clinica" />
      <About />
      <Atendimento openingTimes={openingTimes} />
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
