import React, { useState } from "react";
import "./timeline.css"; // Asegurate de que esto exista

const Timeline = ({ timeline }) => {
  const [activePoint, setActivePoint] = useState(null);

  return (
    <section className="container">
      <div className="timeline-container">
        <div className="line">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`point point-${index + 1} ${activePoint === item ? "point-active" : ""}`}
              onMouseEnter={() => {
                setActivePoint(item);
              }}
              onClick={() => {
                setActivePoint(item);
              }}
            >
              <h3>{item.titulo}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="info-container  visible">
        <h3 className="info-title">
          {activePoint ? activePoint.titulo : "Linea de tiempo"}
        </h3>
        <p className="info-year">
          {activePoint ? activePoint.anio : "Selecciona un punto"}
        </p>
        <p className="info-text">
          {activePoint ? activePoint.descripcion : ""}
        </p>
      </div>
    </section>
  );
};

export default Timeline;
