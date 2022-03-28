import './App.css';
import {useState} from 'react';
import Cuadro from './componentes/Cuadro/Cuadro';

function App() {
  const todosCuadros = [ ];
  const [cuadro,setNuevoCuadro]=useState(todosCuadros);
  const [NuevoColor,setNuevoColor]=useState(''); 

  const agregarNuevoColor = (event) =>{
    event.preventDefault();
    let NuevoCuadro = {
      color:NuevoColor
    }
    setNuevoCuadro((CuadroPrev)=>[...cuadro,NuevoCuadro]);
    setNuevoColor('');
  }
  return (
    <div className='pagina'>
      <form  onSubmit={agregarNuevoColor}>
        <div>
          <label htmlFor='color'>
            Color:
          </label>
          <input type="text" id='color' 
                value={NuevoColor} 
                onChange={(event)=> setNuevoColor(event.target.value)}/>
        </div>
        <button type='submit'>
          Send
        </button>
      </form>
      <div className='lista'>
        {
          cuadro.map((cuadro,indice)=>{
          return(
            <Cuadro cuadro={cuadro} key={'todo_'+indice}/>
          )
          })
        }
      </div>
    </div>
  );
}

export default App;
