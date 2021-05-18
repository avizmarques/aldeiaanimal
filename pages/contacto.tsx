import { ImFacebook2, ImInstagram } from "react-icons/im";
import { MdPhone, MdEmail, MdPlace } from "react-icons/md";

import PageTopImage from "../components/pageTopImage";

export default function Contacto() {
  return (
    <div>
      <PageTopImage label="Contacte-nos" />
      <div className="px-8 py-24 flex flex-col items-center lg:p-24 lg:grid lg:grid-cols-2 lg:gap-24">
        <div className="mb-12 lg:mb-0 hidden md:flex md:justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8640570117614!2d-8.696213984333719!3d40.632879879340564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23976d8589cc67%3A0x884408394304eeed!2sAldeia%20Animal%20Vet!5e0!3m2!1sen!2snl!4v1621275459893!5m2!1sen!2snl"
            width="400"
            height="350"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="mb-4">Contacto</h2>
          <a className="flex mb-4" href="https://goo.gl/maps/F88WLsMEwdvu5m3R9">
            <MdPlace size={30} color="#364F59" className="mr-4" />
            <p>
              Rua Dom Manuel Trindade Salgueiro 100B,
              <br /> 3830-655 Gafanha da Nazaré, <br />
              Portugal
            </p>
          </a>
          <div className="flex mb-4">
            <MdPhone size={30} color="#364F59" className="mr-4" />
            <p>
              <a href="tel:+35191282977">+351 912 829 779</a>
            </p>
          </div>
          <div className="flex mb-4">
            <MdEmail size={30} color="#364F59" className="mr-4" />
            <p>
              <a href="mailto:bavrocha@gmail.com">bavrocha@gmail.com</a>
            </p>
          </div>
          <h2 className="mb-4">Redes sociais</h2>
          <div className="flex items-center">
            <a
              className="mr-4"
              href="https://www.instagram.com/animalaldeia/"
              target="_blank"
              rel="noreferrer"
            >
              <ImInstagram color="#364F59" size={35} />
            </a>
            <a
              className="mr-4"
              href="https://www.facebook.com/Aldeia-Animal-Vet-111287060343996"
              target="_blank"
              rel="noreferrer"
            >
              <ImFacebook2 color="#364F59" size={35} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
