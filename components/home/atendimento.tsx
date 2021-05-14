import Image from "next/image";
import { MdPhone } from "react-icons/md";

import { Button } from "../button";

export default function Atendimento({
  openingTimes,
}: {
  openingTimes: string;
}) {
  return (
    <div className="bg-blue-light md:grid md:grid-cols-2">
      <div className="relative h-60 md:h-auto">
        <Image src="/images/cat-bg-green.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center text-center py-24">
        <div className="font-display text-4xl mb-4">Horario de atendimento</div>
        <div
          dangerouslySetInnerHTML={{ __html: openingTimes }}
          className="mb-4"
        />
        <Button label="Fazer marcação" Icon={MdPhone} />
      </div>
    </div>
  );
}
