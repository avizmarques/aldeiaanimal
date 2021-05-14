import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-blue md:grid grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <Image
          src="/images/logo-white.png"
          height={1650 / 4}
          width={1683 / 4}
          alt="logo"
        />
      </div>
      <div className="relative">
        <Image
          src="/images/herodog.jpg"
          alt="dog"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
