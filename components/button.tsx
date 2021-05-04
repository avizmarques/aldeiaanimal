import Link from "next/link";

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export function Button({ label, href, onClick }: Props) {
  return (
    <button
      className="py-2 px-4 bg-green-dark rounded rounded-md text-white"
      onClick={onClick}
    >
      {href ? <Link href={href}>{label}</Link> : <div>{label}</div>}
    </button>
  );
}
