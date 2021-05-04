import Image from "next/image";

import { Button } from "../button";

export default function Headline() {
  return (
    <div className="flex py-24 items-center justify-end">
      <div className="w-1/2 flex flex-col justify-end items-end pr-24">
        <div className="font-display text-5xl text-right mb-8">
          Os bichos ficam mesmo <br /> a vontade connosco...
        </div>
        <div className="text-right w-1/2 mb-8">
          Na clincia da Dra. Barbara Vizinho tratamos todos os bichos assim e
          assado. Escreve aqui qualquer coisa fixe sobre a tua clinica e porque
          e que gostas de tratar dos bichinhos ou outra cena qq que queiras
          dizer
        </div>
        <Button label="Ler mais" href="/clinica" />
      </div>
      <div className="w-1/2 pl-24 flex items-center">
        <Image
          src="/images/heart-dogs.png"
          height={347 * 0.9}
          width={406 * 0.9}
        />
      </div>
    </div>
  );
}
