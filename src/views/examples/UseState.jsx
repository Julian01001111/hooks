import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setNome] = useState("Juliano")
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Estudos UseStates #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +1
          </button>
        </div>
      </div>
      <SectionTitle title="Estudos UseStates #02" />
        <div className="center">
            <label className="text">{"O nome atua é: "+name}</label>
            <input type="text" className="input"
            value={name} onChange={a => setNome(a.target.value)}>
            </input>
        </div>
    </div>
  );
};


export default UseState;
