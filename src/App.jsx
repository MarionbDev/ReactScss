import { useState } from "react";
import "./App.css";
import "./style.scss";
import image from "./bulbasaur.jpg";

function App() {
  return (
    <div className="App">
      <section className="section bulbasaur">
        <figure>
          <img src={image} alt="bulbasaur" />
        </figure>
      </section>
      <section className="section">
        <div className="description">
          <h2>Title</h2>
          <p className="stars">★★★★★ 4.5 (415)</p>
          <h3>Secondary Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            incidunt aliquid ad, sit harum vitae!
          </p>
        </div>
        <hr align="center" width="360"></hr>
      </section>

      <section className="section">
        <p className="subtitle">Subtitle</p>
        <div className="button">
          <button type="button">Item1</button>
          <button type="button">Item2</button>
          <button type="button">Item3</button>
          <button type="button">Item4</button>
        </div>
        <p className="action">Action 1</p>
      </section>
    </div>
  );
}

export default App;
