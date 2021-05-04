import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div className="flex m-6 justify-end items-center">
      <MenuItem label="Home" href="/" />
      <Separator />
      <MenuItem label="Clinica" href="/clinica" />
      <Separator />
      <MenuItem label="Serviços" href="/servicos" />
      <Separator />
      <MenuItem label="Produtos" href="/produtos" />
      <Separator />
      <MenuItem label="Contacto" href="/contacto" />
      <div className="ml-10 mr-10">
        <Image
          src="/images/logo.png"
          height={171 / 2}
          width={129 / 2}
          alt="logo"
        />
      </div>
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
      <a className="font-display text-4xl">{label}</a>
    </Link>
  );
}

function Separator() {
  return <div className="font-display text-4xl ml-4 mr-4">|</div>;
}
