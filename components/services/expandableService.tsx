import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

import { Service } from "../../model/service";

export default function ExpandableService({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-end mr-12">
      <div className="flex items-center justify-end mb-4">
        <div className="font-display text-4xl">{service.name}</div>
        <button onClick={() => setExpanded(!expanded)}>
          <MdExpandMore size={30} />
        </button>
      </div>
      {expanded && <p className="text-right w-1/2">{service.description}</p>}
    </div>
  );
}
