import Image from "next/image";
import axios from "axios";

import { Service } from "../model/service";
import PageTopImage from "../components/pageTopImage";
import ExpandableService from "../components/services/expandableService";

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:1337/services");

  return {
    props: { services: data },
  };
}

export default function Servicos({ services }: { services: Service[] }) {
  return (
    <div>
      <PageTopImage label="Os nossos servicos" />
      <div className="flex py-24 items-center">
        <div className="w-1/2 flex justify-center">
          <Image
            src="/images/heart-dogs.png"
            height={347 * 0.9}
            width={406 * 0.9}
          />
        </div>
        <div className="w-1/2">
          <div className="font-display text-4xl text-green">
            Os nossos servicos
          </div>
          <div className="font-display text-5xl mb-8">
            O que podemos fazer pelos seus bichinhos
          </div>
          <p className="w-1/2">
            Na clincia da Dra. Barbara Vizinho tratamos todos os bichos assim e
            assado. Escreve aqui qualquer coisa fixe sobre a tua clinica e
            porque e que gostas de tratar dos bichinhos ou outra cena qq que
            queiras dizer.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap bg-blue-light py-24">
        {services.map((service) => (
          <ExpandableService service={service} />
        ))}
      </div>
    </div>
  );
}
