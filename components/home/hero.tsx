import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-blue flex justify-end">
      <div className="w-1/2 p-10 flex flex-col items-center justify-center">
        <Image
          src="/images/logo-white.png"
          height={1650 / 4}
          width={1683 / 4}
          alt="logo"
        />
      </div>
      <Image
        src="/images/herodog.jpg"
        width={600 * 1.5}
        height={400 * 1.5}
        alt="dog"
      />
    </div>
  );
}
