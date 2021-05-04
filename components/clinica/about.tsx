import Image from "next/image";
import Atendimento from "../home/atendimento";

export default function About() {
  return (
    <div>
      <div className="flex my-24 items-center">
        <div className="w-1/3 flex justify-end items-end">
          <Image src="/images/animals-playing.png" height={174} width={261} />
          <Image src="/images/dr-graphic.png" height={361} width={70} />
        </div>
        <div className="w-2/3 pl-24">
          <div className="font-display text-4xl text-green mb-2">
            Sobre nos...
          </div>
          <div className="font-display text-5xl mb-4">A Aldeia Animal</div>
          <p className="w-1/2 mb-4">
            Na clincia da Dra. Barbara Vizinho tratamos todos os bichos assim e
            assado. Escreve aqui qualquer coisa fixe sobre a tua clinica e
            porque e que gostas de tratar dos bichinhos ou outra cena qq que
            queiras dizer Na clincia da Dra. Barbara Vizinho tratamos todos os
            bichos assim e assado. Escreve aqui qualquer coisa fixe sobre a tua
            clinica e porque e que gostas de tratar dos bichinhos ou outra cena
            qq que queiras dizer
          </p>
          <p className="w-1/2 mb-8">
            Na clincia da Dra. Barbara Vizinho tratamos todos os bichos assim e
            assado. Escreve aqui qualquer coisa fixe sobre a tua clinica e
            porque e que gostas de tratar dos bichinhos ou outra cena qq que
            queiras dizer Na clincia da Dra. Barbara Vizinho tratamos todos os
            bichos assim e assado. Escreve aqui qualquer coisa fixe sobre a tua
            clinica e porque e que gostas de tratar dos bichinhos ou outra cena
            qq que queiras dizer
          </p>
          <div className="font-display text-5xl mb-4">A Dra. Barbara</div>
          <p className="w-1/2">
            Na clincia da Dra. Barbara Vizinho tratamos todos os bichos assim e
            assado. Escreve aqui qualquer coisa fixe sobre a tua clinica e
            porque e que gostas de tratar dos bichinhos ou outra cena qq que
            queiras dizer Na clincia da Dra. Barbara Vizinho tratamos todos os
            bichos assim e assado. Escreve aqui qualquer coisa fixe sobre a tua
            clinica e porque e que gostas de tratar dos bichinhos ou outra cena
            qq que queiras dizer
          </p>
        </div>
      </div>
      <Atendimento />
    </div>
  );
}
