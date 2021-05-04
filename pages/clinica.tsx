import Image from "next/image";
import About from "../components/clinica/about";
import PageTopImage from "../components/pageTopImage";

export default function Clinica() {
  return (
    <div>
      <PageTopImage label="Sobre a nossa clinica" />
      <About />
    </div>
  );
}
