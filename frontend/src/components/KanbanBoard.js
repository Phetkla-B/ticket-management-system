import React, { useEffect, useState } from 'react';
import { getTickets } from '../api';
import TicketCard from './TicketCard';
import '../index.css';

const KanbanBoard = () => {
    const [tickets, setTickets] = useState([]);
    const [filters, setFilters] = useState({ status: '', ordering: '-updated_timestamp' });

    const fetchTickets = () => {
        getTickets(filters).then((response) => setTickets(response.data));
    };

    useEffect(() => {
        fetchTickets();
    }, [filters]);

    const statuses = ['Pending', 'Accepted', 'Resolved', 'Rejected'];

    return (
        <div>
            {/* Filters */}
            <div className="filters">
                <select
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                    value={filters.status}
                >
                    <option value="">All Status</option>
                    {statuses.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
                <select
                    onChange={(e) => setFilters({ ...filters, ordering: e.target.value })}
                    value={filters.ordering}
                >
                    <option value="-updated_timestamp">Latest Updated</option>
                    <option value="updated_timestamp">Oldest Updated</option>
                    <option value="created_timestamp">Oldest Created</option>
                </select>
            </div>

            {/* Kanban Board */}
            <div className="kanban-board">
                {statuses.map((status) => (
                    <div key={status} className="kanban-column">
                        <h2>{status}</h2>
                        {tickets
                            .filter((ticket) => ticket.status === status)
                            .map((ticket) => (
                                <TicketCard key={ticket.id} ticket={ticket} onStatusChange={fetchTickets} />
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanBoard;
