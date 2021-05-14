import Link from "next/link";
import { IconType } from "react-icons";

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
  Icon?: IconType;
};

export function Button({ label, href, onClick, Icon }: Props) {
  return (
    <button
      className="py-2 px-4 bg-green-dark rounded rounded-md text-white flex items-center justify-center"
      onClick={onClick}
    >
      {Icon && <Icon size={13} color="white" className="mr-2" />}
      {href ? <Link href={href}>{label}</Link> : <div>{label}</div>}
    </button>
  );
}
