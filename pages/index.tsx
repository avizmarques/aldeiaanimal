import axios from "axios";
import remark from "remark";
import html from "remark-html";

import { Review, HeadlineText } from "../model";

import Hero from "../components/home/hero";
import Headline from "../components/home/headline";
import Atendimento from "../components/home/atendimento";
import DraBa from "../components/home/draba";
import { Head } from "next/document";

export async function getStaticProps() {
  const { data: headline } = await axios.get("http://localhost:1337/headline");
  const { data: reviews } = await axios.get("http://localhost:1337/reviews");
  const { data: openingTimes } = await axios.get(
    "http://localhost:1337/horario-de-atendimento"
  );

  const htmlTimes = await remark().use(html).process(openingTimes.horario);

  const { data: profile } = await axios.get(
    "http://localhost:1337/dra-barbara"
  );

  return {
    props: { reviews, headline, openingTimes: htmlTimes.contents, profile },
  };
}

export default function Home({
  reviews,
  headline,
  openingTimes,
  profile,
}: {
  reviews: Review[];
  headline: HeadlineText;
  openingTimes: string;
  profile: any;
}) {
  return (
    <div>
      <Hero />
      <Headline headline={headline} />
      <Atendimento openingTimes={openingTimes} />
      <DraBa reviews={reviews} profile={profile} />
    </div>
  );
}
