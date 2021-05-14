import { useState } from "react";
import cn from "classnames";
import { MdExpandMore } from "react-icons/md";

import { Service } from "../../model";

export default function ExpandableService({
  service,
  i,
}: {
  service: Service;
  i: number;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const side = i % 2 === 0 ? "right" : "left";

  return (
    <div>
      <div
        className={cn(
          "flex items-center mb-4",
          side === "left" ? "justify-start" : side === "right" && "justify-end"
        )}
      >
        {side === "left" && (
          <button onClick={() => setExpanded(!expanded)}>
            <MdExpandMore size={30} />
          </button>
        )}
        <div className="font-display text-4xl">{service.name}</div>
        {side === "right" && (
          <button onClick={() => setExpanded(!expanded)}>
            <MdExpandMore size={30} />
          </button>
        )}
      </div>
      {expanded && (
        <p
          className={cn(
            side === "right" ? "text-right" : side === "left" && "text-left"
          )}
        >
          {service.description}
        </p>
      )}
    </div>
  );
}
