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
  const side = i % 2 === 0 ? "left" : "right";

  return (
    <div>
      <div
        className={cn(
          "flex items-center mb-4",
          side === "left"
            ? "md:justify-end"
            : side === "right" && "md:justify-start"
        )}
      >
        {side === "right" && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="hidden md:inline-block"
          >
            <MdExpandMore size={30} />
          </button>
        )}
        <div className="font-display text-4xl">{service.name}</div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(side === "right" && "md:hidden")}
        >
          <MdExpandMore size={30} />
        </button>
      </div>
      {expanded && (
        <p className={cn("text-left", side === "left" && "md:text-right")}>
          {service.description}
        </p>
      )}
    </div>
  );
}
