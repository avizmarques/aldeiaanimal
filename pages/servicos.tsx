import Image from "next/image";
import About from "../components/clinica/about";
import ExpandableService from "../components/services/expandableService";

export default function Servicos() {
  return (
    <div>
      <Image src="/images/herocropped.png" width={2700} height={836} />
      <div className="flex py-24">
        <div className="w-1/3">image</div>
        <div className="w-2/3">
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
      <div className="flex bg-blue-light py-24">
        <div className="w-1/2">
          <ExpandableService />
        </div>
      </div>
    </div>
  );
}
