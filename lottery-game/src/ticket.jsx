
import TicketNum from './TicketNum'

const ticket = ({ticket}) => {
  return (
    <div>
     {
        ticket.map((num,idx)=>{
         return <TicketNum num={num} key={idx}/>
        })
     }
    </div>
  )
}

export default ticket
