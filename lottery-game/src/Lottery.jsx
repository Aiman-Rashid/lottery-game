import { useState } from "react";
import { randomNum, sum } from "./function";
import "./Lottery.css";
import Ticket from "./ticket";
import PropTypes from "prop-types";

const Lottery = ({ count = 3, winningSum = 15 }) => {
  // Maintain an array of tickets
  const [tickets, setTickets] = useState([randomNum(count)]);

  // Add a new ticket on button click
  const GenNewTicket = () => {
    setTickets([...tickets, randomNum(count)]);
    console.log(tickets);
  };

  return (
    <>
      <h1>Lottery Tickets</h1>
      <div className="ticket-container">
        {tickets.map((ticketArr, idx) => {
          const isWinner = sum(ticketArr) === winningSum;
          return (
            <div key={idx} className="single-ticket">
              <Ticket ticket={ticketArr} />
              <h3>
                {isWinner
                  ? "Congratulations, you win this lottery ticket!"
                  : "Oh no! Better luck next time."}
              </h3>
            </div>
          );
        })}
      </div>
      <button onClick={GenNewTicket}>Buy new ticket</button>
    </>
  );
};

Lottery.propTypes = {
  count: PropTypes.number, // No need for `isRequired` since count has a default value
  winningSum: PropTypes.number.isRequired, // Required because it doesn't have a default
};

export default Lottery;
