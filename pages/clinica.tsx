import axios from "axios";
import remark from "remark";
import html from "remark-html";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Review } from "../model";

import About from "../components/clinica/about";
import PageTopImage from "../components/pageTopImage";
import ReviewCard from "../components/reviewCard";
import Atendimento from "../components/home/atendimento";
import { url } from "./_app";

export async function getStaticProps() {
  const { data: reviews } = await axios.get(`${url}/reviews`);
  const { data: openingTimes } = await axios.get(
    `${url}/horario-de-atendimento`
  );
  const htmlTimes = await remark().use(html).process(openingTimes.horario);

  const { data: about } = await axios.get(`${url}/about`);

  const htmlAbout = await remark().use(html).process(about.about);

  return {
    props: {
      reviews,
      openingTimes: htmlTimes.contents,
      about: htmlAbout.contents,
    },
  };
}

export default function Clinica({
  reviews,
  openingTimes,
  about,
}: {
  reviews: Review[];
  openingTimes: string;
  about: string;
}) {
  return (
    <div>
      <PageTopImage label="Sobre a nossa clinica" />
      <About text={about} />
      <Atendimento openingTimes={openingTimes} />
      <div className="p-24 flex flex-col items-center justify-center max-w-screen overflow-hidden">
        <div className="font-display text-5xl text-green mb-12">Avaliações</div>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          width={300}
        >
          {reviews.map((review, i) => (
            <ReviewCard review={review} centered key={i} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
