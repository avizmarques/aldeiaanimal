import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";
import cn from "classnames";

export default function Menu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-end md:flex-row">
      <button
        className="in-line-block p-4 md:hidden self-end z-20"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <MdClose size={40} /> : <MdMenu size={40} />}
      </button>
      <nav
        className={cn(
          "md:flex md:flex-row flex-wrap justify-between items-center md:justify-end md:items-center md:m-6 absolute md:relative top-10 right-0 md:top-0 z-10 bg-white md:bg-transparent w-full pt-12 pb-8 md:p-0",
          showMenu ? "flex flex-col" : "hidden"
        )}
      >
        <MenuItem label="Home" href="/" />
        <Separator />
        <MenuItem label="Clinica" href="/clinica" />
        <Separator />
        <MenuItem label="Serviços" href="/servicos" />
        <Separator />
        <MenuItem label="Produtos" href="/produtos" />
        <Separator />
        <MenuItem label="Contacto" href="/contacto" />
        <div className="ml-10 mr-10 hidden md:block">
          <Image
            src="/images/logo.png"
            height={1650 / 11}
            width={1683 / 11}
            alt="logo"
          />
        </div>
      </nav>
    </div>
  );
}

type MenuItemProps = {
  label: string;
  href: string;
};

function MenuItem({ label, href }: MenuItemProps) {
  return (
    <Link href={href}>
      <a className="font-display text-4xl mb-4 md:mb-0 hover:underline">
        {label}
      </a>
    </Link>
  );
}

function Separator() {
  return (
    <div className="font-display text-4xl ml-4 mr-4 hidden md:block">|</div>
  );
}
