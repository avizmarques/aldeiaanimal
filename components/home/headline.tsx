import Image from "next/image";

import { HeadlineText } from "../../model";
import { Button } from "../button";

export default function Headline({ headline }: { headline: HeadlineText }) {
  return (
    <div className="md:flex py-24 items-center justify-end">
      <div className="md:w-1/2 flex flex-col md:justify-end md:items-end justify-center items-center p-6">
        <div className="font-display text-5xl text-center md:text-right mb-8">
          {headline.title}
        </div>
        <div className="text-center md:text-right md:w-1/2 mb-8 leading-normal">
          {headline.content}
        </div>
        <Button label="Ler mais" href="/clinica" />
      </div>
      <div className="md:block hidden md:w-1/2 flex items-center justify-center p-6">
        <Image
          src="/images/heart-dogs.png"
          height={347 * 0.9}
          width={406 * 0.9}
        />
      </div>
    </div>
  );
}
