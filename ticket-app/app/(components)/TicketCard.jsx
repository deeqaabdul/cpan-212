import React from "react";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <h2 className="text-white">{ticket.title}</h2>
      <p className="text-gray-400">{ticket.description}</p>
      <PriorityDisplay priority={ticket.priority} />
      <ProgressDisplay progress={ticket.progress} />
      <StatusDisplay status={ticket.status} />
    </div>
  );
};

export default TicketCard;
