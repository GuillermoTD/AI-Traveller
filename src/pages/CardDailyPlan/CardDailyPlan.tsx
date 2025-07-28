import "./CardDailyPlan.css"

interface CardDailyPlanProps{
    Data?:unknown,
    index?:number
}

const CardDailyPlan = ({Data}:CardDailyPlanProps) => {
  return (
    <div className="CardDailyPlan">
        {Data?.placeName}
    </div>
  )
}

export default CardDailyPlan