import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-blue md:flex md:justify-end">
      <div className="md:w-1/2 flex items-center justify-center">
        <Image
          src="/images/logo-white.png"
          height={1650 / 4}
          width={1683 / 4}
          alt="logo"
        />
      </div>
      <div className="hidden md:block flex justify-end items-center">
        <Image
          src="/images/herodog.jpg"
          width={600 * 1.5}
          height={400 * 1.5}
          alt="dog"
        />
      </div>
    </div>
  );
}
