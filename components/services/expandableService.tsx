import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

export default function ExpandableService() {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-end mr-12">
      <div className="flex items-center justify-end mb-4">
        <div className="font-display text-4xl">Consulta de Clinica Geral</div>
        <button onClick={() => setExpanded(!expanded)}>
          <MdExpandMore size={30} />
        </button>
      </div>
      {expanded && (
        <p className="text-right w-1/2">
          Na clincia da Dra. Barbara Vizinho tratamos todos os bichos assim e
          assado. Escreve aqui qualquer coisa fixe sobre a tua clinica e porque
          e que gostas de tratar dos bichinhos ou outra cena qq que queiras
          dizer.
        </p>
      )}
    </div>
  );
}
