import Image from "next/image";

export default function About({ text }: { text: string }) {
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
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </div>
  );
}
