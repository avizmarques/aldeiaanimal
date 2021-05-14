import Image from "next/image";

import { HeadlineText } from "../../model";
import { Button } from "../button";

export default function Headline({ headline }: { headline: HeadlineText }) {
  return (
    <div className="grid md:grid-cols-2 gap-24 py-24 md:px-0 px-12">
      <div className="flex flex-col md:items-end justify-center items-center">
        <div className="font-display text-5xl text-center md:text-right mb-8 xl:w-2/3">
          {headline.title}
        </div>
        <div className="text-center md:text-right xl:w-2/3 mb-8 leading-normal">
          {headline.content}
        </div>
        <Button label="Ler mais" href="/clinica" />
      </div>
      <div className="md:block hidden flex flex-col items-center justify-center">
        <Image
          src="/images/heart-dogs.png"
          height={347 * 0.8}
          width={406 * 0.8}
        />
      </div>
    </div>
  );
}
