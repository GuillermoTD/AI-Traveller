import type { ReactNode } from "react";
import "./CardOption.css";


interface CardOptionsProps{
  onClick?: ()=> void,
  children?: ReactNode,
}      


const CardOption = ({children, onClick}:CardOptionsProps) => {
  return (
    <div className="CardOption" onClick={onClick}>
        {children}
    </div>
  )
}

export default CardOption