import Image from "next/image";

import { Button } from "../button";

export default function Atendimento({
  openingTimes,
}: {
  openingTimes: string;
}) {
  return (
    <div className="flex items-center justify-center md:justify-start bg-blue-light">
      <div className="hidden md:block md:w-1/2">
        <Image
          src="/images/cat-bg-green.jpg"
          width={5026 / 8}
          height={3458 / 8}
        />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col items-center text-center">
        <div className="font-display text-4xl mb-4">Horario de atendimento</div>
        <div
          dangerouslySetInnerHTML={{ __html: openingTimes }}
          className="mb-4"
        />
        <Button label="Fazer marcacao" />
      </div>
    </div>
  );
}
