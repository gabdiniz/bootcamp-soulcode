import "./Desafio1.css";
import { useState } from "react";

export function Desafio1() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(-1);

  function calcularImc() {
    const resultado = peso / (altura * altura);
    setImc(resultado);
  }

  function limpar() {
    setPeso('');
    setAltura('');
    setImc(-1);
  }

  return (
    <div>
      <h3>Calculadora de IMC</h3>
      <input type="number" placeholder="Digite o peso" onChange={(e) => setPeso(e.target.value)} value={peso} />
      <input type="number" placeholder="Digite a altura" onChange={(e) => setAltura(e.target.value)} value={altura} />
      <br />
      <button onClick={calcularImc}>Calcular</button>
      <button onClick={limpar}>Limpar</button>
      {imc > -1 && <p>O seu IMC é: {imc.toFixed(2)}</p>}
      <hr />
    </div>
  )
}

//Capturando dados do input
// - onChange
// - Função para coletar o valor
// - Estado para armazenar o valor