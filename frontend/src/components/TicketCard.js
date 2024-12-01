import React from 'react';
import { updateTicketStatus } from '../api';

const TicketCard = ({ ticket, onStatusChange }) => {
    const statuses = ['Pending', 'Accepted', 'Resolved', 'Rejected'];

    const handleStatusChange = (newStatus) => {
        updateTicketStatus(ticket.id, newStatus).then(() => {
            onStatusChange(); // รีโหลดข้อมูลใหม่หลังอัปเดต
        });
    };

    return (
        <div className="ticket-card">
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Contact: {ticket.contact_info}</p>
            <p>Status: {ticket.status}</p>
            <div className="status-buttons">
                {statuses
                    .filter((status) => status !== ticket.status)
                    .map((status) => (
                        <button key={status} onClick={() => handleStatusChange(status)}>
                            Change to {status}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default TicketCard;
