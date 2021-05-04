import Image from "next/image";

type Props = {
  label: string;
  imgSrc?: string;
};

export default function PageTopImage({ label, imgSrc }: Props) {
  return (
    <div className="w-screen bg-gradient-to-r from-blue to-green flex items-center justify-center overflow-hidden">
      <div className="font-display text-white text-5xl m-24">{label}</div>
    </div>
  );
}
