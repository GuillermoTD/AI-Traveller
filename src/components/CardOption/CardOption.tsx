import type { ReactNode } from "react";
import "./CardOption.css";


interface CardOptionsProps{
  onClick?: ()=> void,
  children?: ReactNode,
  classBorder:string,
  isSelected?: boolean,
}      


const CardOption = ({children, onClick,classBorder}:CardOptionsProps) => {
  return (
    <div className={`CardOption ${classBorder}`} onClick={onClick}>
        {children}
    </div>
  )
}

export default CardOption