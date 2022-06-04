import React, { useState } from "react";
import { useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";

function calcParImpar(number) {
  if (number < 0) return "Negativo";
  if (number > 20) return "Maior que 20";
  if (number % 2 === 0) return "Par";
  return "Impar";
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(0);
  const [parimpar, setParImpar] = useState(0);

  useEffect(
    function () {
      setParImpar(calcParImpar(number));
    },
    [number]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <div className="center">
        <label className="text red">{" O número é: " + parimpar + "."}</label>

        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
