import axios from "axios";

import { Review } from "../model/review";

import Hero from "../components/home/hero";
import Headline from "../components/home/headline";
import Atendimento from "../components/home/atendimento";
import DraBa from "../components/home/draba";

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:1337/reviews");
  return { props: { reviews: data } };
}

export default function Home({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <Hero />
      <Headline />
      <Atendimento />
      <DraBa reviews={reviews} />
    </div>
  );
}
