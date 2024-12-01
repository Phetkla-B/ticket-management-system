import React, { useState } from 'react';
import { createTicket } from '../api';

const TicketForm = () => {
    const [form, setForm] = useState({ title: '', description: '', contact_info: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        createTicket(form).then(() => {
            alert('Ticket created!');
            setForm({ title: '', description: '', contact_info: '' });
        });
    };

    return (
        <form onSubmit={handleSubmit} className="ticket-form">
            <input
                type="text"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
            />
            <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Contact Info"
                value={form.contact_info}
                onChange={(e) => setForm({ ...form, contact_info: e.target.value })}
                required
            />
            <button type="submit">Create Ticket</button>
        </form>
    );
};

export default TicketForm;
