"use client";

import React, { useEffect, useState } from "react";
import TicketCard from "../../(components)/TicketCard";
const TicketPage = ({ params }) => {
  const [ticketDetails, setTicketDetails] = useState(null);

  useEffect(() => {
    const fetchTicketDetails = async () => {
      const response = await fetch(`/api/tickets/${params.id}`);
      const data = await response.json();
      setTicketDetails(data);
    };

    fetchTicketDetails();
  }, [params.id]);

  if (!ticketDetails) return <div>Loading...</div>;

  return (
    <div>
      <TicketCard ticket={ticketDetails} />
    </div>
  );
};

export default TicketPage;
