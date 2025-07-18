import "./CardHotelRecomendation.css"

interface CardHotelRecomendationProps {
    children?: React.ReactNode;
}


const CardHotelRecomendation = ({children}:CardHotelRecomendationProps) => {
  return (
    <div className="CardHotelRecomendation">
        {children}
    </div>
  )
}

export default CardHotelRecomendation