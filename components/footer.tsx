import Link from "next/link";
import Image from "next/image";
import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { MdPhone, MdEmail, MdPlace } from "react-icons/md";
import IconLogo from "./iconlogo";

export default function Footer() {
  return (
    <div className="bg-blue-dark py-24">
      <div className="flex items-center">
        <div className="w-1/3 flex items-center ml-24">
          <div>
            <IconLogo size={50} />
            <div className="font-display text-4xl text-white mt-4">
              Aldeia Animal
            </div>
            <div className="font-display text-2xl text-white mb-4">
              Consultorio Veterinario
            </div>
            <div className="flex">
              <a
                className="mr-2"
                href="https://www.instagram.com/animalaldeia/"
                target="_blank"
                rel="noreferrer"
              >
                <ImInstagram color="white" size={30} />
              </a>
              <a
                className="mr-2"
                href="https://www.facebook.com/Aldeia-Animal-Vet-111287060343996"
                target="_blank"
                rel="noreferrer"
              >
                <ImFacebook2 color="white" size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="font-display text-3xl text-white mb-2">Contacto</div>
          <div className="flex">
            <MdPhone color="white" size={25} className="mr-2" />
            <div className="text-white">96 123 456</div>
          </div>
          <div className="flex">
            <MdEmail color="white" size={25} className="mr-2" />
            <div className="text-white">barbara@barbara.com</div>
          </div>
          <div className="flex">
            <MdPlace color="white" size={25} className="mr-2" />
            <div>
              <div className="text-white">
                Rua Dom Manuel Trindade Salgueiro 100B
                <br />
                3830-655 Gafanha da Nazare
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="font-display text-3xl text-white mb-2">Links</div>
          <div className="text-white flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/clinica">Sobre a clinica</Link>
            <Link href="/servicos">Os nossos servicos</Link>
            <Link href="/produtos">Os nossos produtos</Link>
            <Link href="/contacto">Contacte-nos</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
