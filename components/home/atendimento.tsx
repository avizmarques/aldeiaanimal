import Image from "next/image";

import { Button } from "../button";

export default function Atendimento({
  openingTimes,
}: {
  openingTimes: string;
}) {
  return (
    <div className="flex items-center bg-blue-light">
      <Image
        src="/images/cat-bg-green.jpg"
        width={5026 / 8}
        height={3458 / 8}
      />
      <div className="w-1/2 pl-24 flex flex-col items-center text-center ">
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
