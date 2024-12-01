import React, { useState, useEffect } from 'react';
import { getTickets } from '../api';

function TicketList() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        getTickets().then((response) => setTickets(response.data));
    }, []);

    return (
        <div>
            <h1>Tickets</h1>
            {tickets.map((ticket) => (
                <div key={ticket.id}>
                    <h2>{ticket.title}</h2>
                    <p>{ticket.description}</p>
                    <p>Status: {ticket.status}</p>
                </div>
            ))}
        </div>
    );
}

export default TicketList;
