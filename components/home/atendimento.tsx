import Image from "next/image";
import { Button } from "../button";

export default function Atendimento() {
  return (
    <div className="flex items-center justify-end bg-blue-light">
      <div className="w-1/2">
        <Image src="/images/cat-bg-green.jpg" width={5026} height={3458} />
      </div>
      <div className="w-1/2 pl-24">
        <div className="font-display text-4xl mb-4">Horario de atendimento</div>
        <div className="mb-4">
          <div className="font-bold">Segunda a sexta</div>
          <div>10h-13h00 / 14h30 -19h</div>
        </div>
        <div className="mb-4">
          <div className="font-bold">Sabado</div>
          <div>10h00-12h30</div>
        </div>
        <Button label="Fazer marcacao" />
      </div>
    </div>
  );
}
