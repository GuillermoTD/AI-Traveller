import type { ReactNode } from "react";
import "./CardOption.css";


interface CardOptionsProps{
  onClick?: ()=> void,
  children?: ReactNode,
  isSelected:boolean
}      


const CardOption = ({children, onClick,isSelected}:CardOptionsProps) => {
  return (
    <div className={`CardOption ${isSelected ? "borderedOption": ""}`} onClick={onClick}>
        {children}
    </div>
  )
}

export default CardOption