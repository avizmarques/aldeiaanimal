import Image from "next/image";
import axios from "axios";
import remark from "remark";
import html from "remark-html";

import { Service } from "../model";
import PageTopImage from "../components/pageTopImage";
import ExpandableService from "../components/services/expandableService";

export async function getStaticProps() {
  const { data: services } = await axios.get("http://localhost:1337/services");
  const { data: servicesText } = await axios.get(
    "http://localhost:1337/services-description"
  );

  const htmlText = await remark().use(html).process(servicesText.text);

  return {
    props: { services, servicesText: htmlText.contents },
  };
}

export default function Servicos({
  services,
  servicesText,
}: {
  services: Service[];
  servicesText: string;
}) {
  return (
    <div>
      <PageTopImage label="Os nossos servicos" />
      <div className="py-24 px-8 md:px-24 md:grid md:grid-cols-3 md:gap-8">
        <div className="flex justify-center relative h-60 mb-12 md:mb-0">
          <Image
            src="/images/heart-dogs.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="md:col-span-2">
          <div className="font-display text-4xl text-green">
            Os nossos servicos
          </div>
          <div dangerouslySetInnerHTML={{ __html: servicesText }} />
        </div>
      </div>
      <div className="bg-blue-light py-24">
        <div className="px-8 md:px-60 md:grid md:grid-cols-2 md:gap-x-24 md:gap-y-8">
          {services.map((service, i) => (
            <ExpandableService service={service} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
