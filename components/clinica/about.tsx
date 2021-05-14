import Image from "next/image";

export default function About({ text }: { text: string }) {
  return (
    <div>
      <div className="container md:grid md:grid-cols-3 md:gap-24 py-24">
        <div className="hidden md:flex justify-end items-end">
          <Image src="/images/animals-playing.png" height={174} width={261} />
          <Image src="/images/dr-graphic.png" height={361} width={70} />
        </div>
        <div className="px-8 md:px-0 md:col-span-2">
          <div className="font-display text-4xl text-green mb-2">
            Sobre nos...
          </div>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </div>
  );
}
