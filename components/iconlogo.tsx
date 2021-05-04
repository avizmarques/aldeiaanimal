import { FaDog, FaCat } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

export default function IconLogo({ size }: { size: number }) {
  return (
    <div className="flex items-end">
      <FaDog color="white" size={size * 0.7} />
      <GiHealthNormal color="white" size={size} />
      <FaCat
        color="white"
        size={size * 0.7}
        style={{ transform: "scaleX(-1)" }}
        className={size >= 90 ? "ml-2" : "ml-1"}
      />
    </div>
  );
}
