import Image from "next/image";
import About from "../components/clinica/about";

export default function Clinica() {
  return (
    <div>
      <Image src="/images/herocropped.png" width={2700} height={836} />
      <About />
    </div>
  );
}
