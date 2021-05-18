import Link from "next/link";
import Image from "next/image";
import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { MdPhone, MdEmail, MdPlace } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-blue-dark p-24">
      <div className="sm:grid sm:grid-cols-3 sm:gap-24 sm:items-center flex flex-col items-center">
        <div className="flex items-center mb-8 md:mb-0">
          <div>
            <Image
              src="/images/logo-white.png"
              height={1650 / 11}
              width={1683 / 11}
              alt="logo"
            />
            <div className="flex justify-center">
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
        <div className="">
          <div className="font-display text-3xl text-white mb-2 hidden sm:block">
            Contacto
          </div>
          <div className="flex">
            <MdPhone color="white" size={25} className="mr-2 hidden md:block" />
            <div className="text-white">+351 912 829 779</div>
          </div>
          <div className="flex">
            <MdEmail color="white" size={25} className="mr-2 hidden md:block" />
            <div className="text-white">
              <a href="mailto:bavrocha@gmail.com">bavrocha@gmail.com</a>
            </div>
          </div>
          <div className="hidden md:flex">
            <MdPlace color="white" size={25} className="mr-2" />
            <div>
              <div className="text-white">
                <a
                  className="flex mb-4"
                  href="https://goo.gl/maps/F88WLsMEwdvu5m3R9"
                >
                  Rua Dom Manuel Trindade Salgueiro 100B
                  <br />
                  3830-655 Gafanha da Nazare
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
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
