import './Cuadro.css'
function Cuadro(props){
    return(
    <div >
        <div  style={{background:  props.cuadro.color }} className="cuadro"></div>
    </div>
    )
}

export default Cuadro;