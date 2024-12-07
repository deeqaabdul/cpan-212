let tickets = [
  {
    id: "1",
    title: "Sample Ticket 1",
    description: "Description for ticket 1",
    priority: "High",
    progress: 50,
    status: "In Progress",
  },
  {
    id: "2",
    title: "Sample Ticket 2",
    description: "Description for ticket 2",
    priority: "Medium",
    progress: 20,
    status: "Open",
  },
];

export async function GET(req, { params }) {
  const ticket = tickets.find((ticket) => ticket.id === params.id);

  if (ticket) {
    return new Response(JSON.stringify(ticket), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "Ticket not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(req, { params }) {
  const ticketIndex = tickets.findIndex((ticket) => ticket.id === params.id);

  if (ticketIndex !== -1) {
    tickets.splice(ticketIndex, 1);
    return new Response(null, { status: 204 });
  } else {
    return new Response(JSON.stringify({ message: "Ticket not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
