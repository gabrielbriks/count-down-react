import { useEffect, useState } from 'react'
import './App.css'

const COUNTDOWN_INITIAL_TIME_iN_SECONDS = 25 * 60;//25 minutes

function App() {

  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_iN_SECONDS)

  useEffect(() => {
     

    if(secondsAmount > 0){
      /*Pq utilizar o arrowFunction dentro do set?
        Utilizando um arrow function, para ajudar o react não se perder
        nos fluxos de renderizações que ele tem. Pois dependemos do valor 
        anterior para fazermos os calculos;

        Provavelmente tériamos alguns problemas ao utilizar o set direto
        como no exemplo abaixo:
          setSecondsAmount(secondsAmount - 1);
      */
      setTimeout(() => {
        setSecondsAmount(state => state - 1);
      }, 1000);
    }
    else {
      alert("Chegou ao fim ")
    }

  }, [secondsAmount]);

  
  /*Calcula o numero de minutos
    Para isso precisamos aplicar um arrendodamento dos segundos para baixo,
    pois pode surgir uma dizima periodica ao calcular minutos quebrados

    Math.floor = Arredonda para baixo
  */
  const minutes = Math.floor(secondsAmount / 60);

  /*Caulcula o numero de segundos
    Para calcular a quantidade de segundos de forma cnsistente,
    utilizamos o operador "%". 

    Esse operador nos trás o resto da divisão, que em nosso cenário
    vai ser os segundos restantes, que não coube no minuto calculado acima.
  
  */
 const seconds = secondsAmount % 60;

  return (
    <div className="App">
      <span>{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    {/* Funcao "padStart()": Funciona somente para strings; Ela adiciona uma qtd de
     caracteres a esquerda até completar o numero de caracteres que eu desejo. */}
    </div>
  )
}

export default App
