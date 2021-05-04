import Image from "next/image";
import About from "../components/clinica/about";
import PageTopImage from "../components/pageTopImage";
import ExpandableService from "../components/services/expandableService";

export default function Servicos() {
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
        <ExpandableService />
        <ExpandableService />
        <ExpandableService />
        <ExpandableService />
      </div>
    </div>
  );
}
