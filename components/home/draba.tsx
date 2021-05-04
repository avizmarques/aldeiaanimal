import { MdStar } from "react-icons/md";
import Image from "next/image";

export default function DraBa() {
  return (
    <div className="py-24 flex items-center">
      <div className="w-1/2 pr-24 flex flex-col justify-end items-end">
        <Image src="/images/ba.png" width={170} height={170} />
        <div className="font-display text-4xl mt-4 mb-4">
          Dra. Barbara Vizinho
        </div>
        <div className="w-1/2 text-right">
          Qualquer coisa sobre ti :) A Dra. Barbara formou-se na faculdade
          whatever e bladibla.
        </div>
      </div>
      <div className="w-1/2 pl-24">
        <div className="flex mb-4">
          <MdStar color="#364F59" size={40} />
          <MdStar color="#364F59" size={40} />
          <MdStar color="#364F59" size={40} />
          <MdStar color="#364F59" size={40} />
          <MdStar color="#364F59" size={40} />
        </div>
        <div className="text-xl font-bold w-1/2 mb-4">
          A Dra. Barbara e sempre muito atenciosa com o meu gatinho.
        </div>
        <div>- senhora que mora na esquina</div>
      </div>
    </div>
  );
}
