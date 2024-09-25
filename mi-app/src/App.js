import React, { useState } from 'react';
import styles from './App.module.css';
import portada from './adivina.png';

function App() {
  let [num, setNumero] = useState(1);
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  function generarNumero(){
    let nuevoNum = Math.floor(Math.random()*10) +1;
    setNumero(nuevoNum);
    }
    



  function chequearNumero(){
    let tuNum = parseInt(userInput, 10);
    if(num === tuNum){
      setMessage(`¡GANASTE! el número es ${tuNum}`);
    }else{
      setMessage(`¡Perdiste! el número es ${num}`);
    }

  }

  const messageColor = message.includes('¡GANASTE!') ? 'green' : 'red';

  return (
    <div className={styles.container}>
      <h1 className={styles.randomNumber}>Adivina el número</h1>
      <img src={portada} alt='img_adivina' ></img>
      <button className={styles.button} onClick={generarNumero}>Generar Nuevo Número</button>
      <div>
        <input id='miNumero' 
        type='number' 
        min={1} 
        max={10} 
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder='Select'
        className={styles.input}>
        </input>
        <button className={styles.buttonCheck} onClick={chequearNumero}>Chequear</button>
      </div>
     
      <h3 style={{color: messageColor}}
      >
        {message}
      </h3>

    </div>
  );
}


export default App;
