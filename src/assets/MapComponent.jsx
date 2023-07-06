import React, { useState } from "react";
import "./mapComponent.css"; // Importa el archivo CSS para la hoja de estilos

const top = {
  top: "47%",
  left: "20%",
};
const bottom = {
  top: "65%",
  left: "36%",
};

const right = {
  top: "74%",
  left: "41%",
  
};

const left = {
  top: "75%",
  left: "72%",
};

const MapComponent = () => {
  const [showAnim1, setShowAnim1] = useState(true);
  const [showAnim2, setShowAnim2] = useState(false);
  const [car, setCar] = useState(false);
  const [battery, setBattery] = useState(false);
  const [ups, setUps] = useState(false);
  const [panel, setPanel] = useState(false);

  const changeAnim = () => {
    setShowAnim1(!showAnim1);
    setShowAnim2(true);
    setBattery(false);
    setPanel(false);
    setUps(false);
    setCar(false);
  };

  const changeAnim2 = () => {
    setShowAnim2(false);
    setShowAnim1(true);
  };

  const HandleModal = () => {
    setModal(true);
  };

  const toggleTooltip = () => {
    //setShowAnim1(false);
    setBattery(false);
    setPanel(false);
    setUps(false);
    setCar(!car);
  };
  const toggleBattery = () => {
    setCar(false);
    setPanel(false);
    setUps(false);
    setBattery(!battery);
  };
  const toggleUps = () => {
    setCar(false);
    setBattery(false);
    setPanel(false);
    setUps(!ups);
  };
  const togglePanel = () => {
    setCar(false);
    setBattery(false);
    setUps(false);
    setPanel(!panel);
  };

  return (
    <div className="principal">
      {showAnim1 ? (
        <div className="container">
          <div className="image-hotspot">
            <img
              src="https://www.solarxs.de/wp-content/uploads/2023/07/casa-1-1.png"
              alt=""
            />

            <div className="item top " style={top}>
              <div className="icon" onClick={changeAnim}></div>
              <div className={`tooltip ${panel ? "show" : ""}`}>
                
              </div>
            </div>

            <div className="item bottom" style={bottom}>
              <div className="icon" onClick={changeAnim}></div>
              <div className={`tooltip ${ups ? "show" : ""}`}>
                
              </div>
            </div>

            <div className="item right" style={right}>
              <div className="icon" onClick={changeAnim}></div>
              <div className={`tooltip ${battery ? "show" : ""}`}>
                
              </div>
            </div>

            <div className="item left" style={left}>
              <div className="icon" onClick={changeAnim}></div>
              <div className={`tooltip ${car ? "show" : ""}`}>
           
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="image-hotspot">
            <img
              src="https://www.solarxs.de/wp-content/uploads/2023/07/casa-2-1.png"
              alt=""
              onClick={changeAnim}
            />

            <div className="item top " style={top}>
              <div className="icon" onClick={togglePanel}></div>
              <div className={`tooltip ${panel ? "show" : ""}`}>
                <div class="line-animation"></div>
                <h3>techo Solarmodule</h3>
                <p>
                  Vsun GlasGlas Bifacial 30 Jahre Garantie Full Black Recom
                  Tech. Lion GlasGlas HJT-Technik, Bifacial 30 Jahre Garantie
                  (Europäischen Produkt)
                </p>
              </div>
            </div>

            <div className="item bottom" style={bottom}>
              <div className="icon" onClick={toggleUps}></div>
              <div className={`tooltip ${ups ? "show" : ""}`}>
              <div class="line-animation"></div>
                <h3>ups HUAWEI LUNA-2000-S0</h3>
                <p>
                  HUAWEI LUNA-2000-S0 Das Speichersystem von HUAWEI ist ein
                  modulares System, das jederzeit um ein weiteres Speicherpaket
                  erweitert werden kann. Die Herstellergarantie bei diesem
                  Produkt beträgt 10 Jahre.
                </p>
              </div>
            </div>

            <div className="item right" style={right}>
              <div className="icon" onClick={toggleBattery}></div>
              <div className={`tooltip ${battery ? "show" : ""}`}>
              <div class="line-animation"></div>
              <div className="contenido">
                <h3>bateria HUAWEI SUN-2000-M1</h3>
                <p>
                  Der Wechselrichter von HUAWEI wandelt den erzeugten
                  zuverlässig Gleichstrom in Wechselstrom um, damit dieser für
                  Ihren Anschluss verwendet werden kann. Die Herstellergarantie
                  bei diesem Produkt beträgt 10 Jahre.
                </p>
                </div>
              </div>
            </div>

            <div className="item left" style={left}>
              <div className="icon" onClick={toggleTooltip}></div>
              <div className={`tooltip ${car ? "show" : ""}`}>
              <div class="line-animation"></div>
                <h3>carro Wallbox</h3>
                <p>Lädt Dein E-Auto: schnell, sauber, sicher.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
