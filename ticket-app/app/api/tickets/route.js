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

export async function GET(req) {
  return new Response(JSON.stringify(tickets), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const newTicket = await req.json();
  newTicket.id = Date.now().toString();
  tickets.push(newTicket);
  return new Response(JSON.stringify(newTicket), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
