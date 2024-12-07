import TicketCard from "../components/TicketCard";

const TicketPage = ({ ticket }) => {
  return (
    <div>
      <h1 className="text-white">Ticket Details</h1>
      <TicketCard ticket={ticket} />
    </div>
  );
};

export default TicketPage;
