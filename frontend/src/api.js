import axios from 'axios';

// Base URL for Backend API
const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

// Fetch tickets with filters
export const getTickets = (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    return API.get(`tickets/?${params}`);
};

// Create a new ticket
export const createTicket = (ticket) => {
    return API.post('tickets/', ticket);
};

// Update ticket status or information
export const updateTicket = (id, data) => {
    return API.patch(`tickets/${id}/`, data);
};

// Update ticket status only
export const updateTicketStatus = (id, status) => {
    return API.patch(`tickets/${id}/`, { status });
};
