import { useState } from "react";
import { planets } from "../data/planets.json";
import "./Versus.css";
import RulerIcon from "../assets/vsIcons/ruler.svg";
import ThermometerIcon from "../assets/vsIcons/thermometer.svg";
import SatelliteIcon from "../assets/vsIcons/satellite.svg";
import ClockIcon from "../assets/vsIcons/clock.svg";
import CalendarIcon from "../assets/vsIcons/calendar.svg";
import CloudIcon from "../assets/vsIcons/cloud.svg";
import RulerVsIcon from "../assets/vsIcons/rulerVs.svg";
import ThermometerVsIcon from "../assets/vsIcons/thermometerVs.svg";
import SatelliteVsIcon from "../assets/vsIcons/satelliteVs.svg";
import ClockVsIcon from "../assets/vsIcons/clockVs.svg";
import CalendarVsIcon from "../assets/vsIcons/calendarVs.svg";
import CloudVsIcon from "../assets/vsIcons/cloudVs.svg";
import { planetImages } from "../data/planetsImages.ts";

const Versus = ({ actualPlanet }) => {
  // Inicializa con un planeta diferente al actual para que no se repita
  const initialVsPlanet =
    planets.find((p) => p.name !== actualPlanet.name) || planets[0];
  const [vsPlanet, setVsPlanet] = useState(initialVsPlanet);
  const handleSelectChange = (e) => {
    console.log("Selected planet:", e.target.value);
    const selectedName = e.target.value;
    const selectedPlanet = planets.find((p) => p.name === selectedName);
    setVsPlanet(selectedPlanet);
  };

  return (
    <section className="versus-container">
      <h2 className="title-global title">Comparador de planetas</h2>
      <select
        className="select-planet"
        onChange={handleSelectChange}
        value={vsPlanet.name}
      >
        {planets
          .filter((p) => p.name !== actualPlanet.name)
          .map((planet) => (
            <option value={planet.name} key={planet.name}>
              {planet.name}
            </option>
          ))}
      </select>
      <div className="planet-info-container">
        <div className="planet-info">
          <h3 className="planet-title-actual">{actualPlanet.name}</h3>
          <div className="planet-grid">
            <div className="planet-item">
              <img src={RulerIcon.src} alt="diámetro" className="icon" />
              <p>
                <strong>Diámetro:</strong>{" "}
                {actualPlanet.diameterKm?.toLocaleString()} km
              </p>
            </div>
            <div className="planet-item">
              <img
                src={ThermometerIcon.src}
                alt="temperatura"
                className="icon"
              />
              <p>
                <strong>Temperatura media:</strong>{" "}
                {actualPlanet.averageTemperatureC} °C
              </p>
            </div>
            <div className="planet-item">
              <img src={SatelliteIcon.src} alt="lunas" className="icon" />
              <p>
                <strong>Lunas:</strong> {actualPlanet.moons}
              </p>
            </div>
            <div className="planet-item">
              <img src={ClockIcon.src} alt="día" className="icon" />
              <p>
                <strong>Día:</strong> {actualPlanet.dayLengthHours} h
              </p>
            </div>
            <div className="planet-item">
              <img src={CalendarIcon.src} alt="año" className="icon" />
              <p>
                <strong>Año:</strong> {actualPlanet.yearLengthDays} días
              </p>
            </div>
            <div className="planet-item">
              <img src={CloudIcon.src} alt="atmósfera" className="icon" />
              <p>
                <strong>Atmósfera:</strong> {actualPlanet.atmosphere}
              </p>
            </div>
          </div>
        </div>
        <div className="planet-info">
          <h3 className="planet-title-vs">{vsPlanet.name}</h3>
          <div className="planet-grid">
            <div className="planet-item">
              <img src={RulerVsIcon.src} alt="diámetro" className="icon" />
              <p>
                <strong>Diámetro:</strong>{" "}
                {vsPlanet.diameterKm?.toLocaleString()} km
              </p>
            </div>
            <div className="planet-item">
              <img
                src={ThermometerVsIcon.src}
                alt="temperatura"
                className="icon"
              />
              <p>
                <strong>Temperatura media:</strong>{" "}
                {vsPlanet.averageTemperatureC} °C
              </p>
            </div>
            <div className="planet-item">
              <img src={SatelliteVsIcon.src} alt="lunas" className="icon" />
              <p>
                <strong>Lunas:</strong> {vsPlanet.moons}
              </p>
            </div>
            <div className="planet-item">
              <img src={ClockVsIcon.src} alt="día" className="icon" />
              <p>
                <strong>Día:</strong> {vsPlanet.dayLengthHours} h
              </p>
            </div>
            <div className="planet-item">
              <img src={CalendarVsIcon.src} alt="año" className="icon" />
              <p>
                <strong>Año:</strong> {vsPlanet.yearLengthDays} días
              </p>
            </div>
            <div className="planet-item">
              <img src={CloudVsIcon.src} alt="atmósfera" className="icon" />
              <p>
                <strong>Atmósfera:</strong> {vsPlanet.atmosphere}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="planet-compare-container">
        <div className="planet-column">
          <img
            className="planet-img ac"
            src={planetImages[actualPlanet.imageUrl.toLowerCase()].src}
            style={{
              '--planet-scale': actualPlanet.diameterKm / planets[0].diameterKm
            }}
            title={actualPlanet.name}
            alt={actualPlanet.name}
          />
          <span className="planet-name">{actualPlanet.name}</span>
        </div>
        <div className="planet-column">
          <img
            className="planet-img vs"
            src={planetImages[vsPlanet.imageUrl.toLowerCase()].src}
            style={{
              '--planet-scale-vs': vsPlanet.diameterKm / planets[0].diameterKm
            }}            
            title={vsPlanet.name}
            alt={vsPlanet.name}
          />
          <span className="planet-name">{vsPlanet.name}</span>
        </div>
      </div>
    </section>
  );
};
//(diámetro del planeta / diámetro del Sol) * 100
export default Versus;
