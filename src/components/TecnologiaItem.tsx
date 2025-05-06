import React from "react";
import type { Tecnologia } from "../data/tecnologias";

const TecnologiaItem: React.FC<Tecnologia> = ({
  id,
  title,
  name,
  desc,
  more,
  link,
}) => (
  <section
    aria-labelledby={id}
    className="tecnologia-item mb-4"
    data-testid={id}
  >
    <h2 id={id} className="text-xl font-bold text-primary mb-2">
      {title}
    </h2>
    <p className="mb-2">
      <strong>{name}</strong> – {desc}
    </p>
    <p className="text-secondary">{more}</p>
    <div className="mt-3">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        <i className="fas fa-external-link-alt mr-1" aria-hidden="true" />
        Documentação {title.split(" ")[0]}
      </a>
    </div>
  </section>
);

export default TecnologiaItem;
