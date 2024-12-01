import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import TicketForm from './components/TicketForm';
import './index.css';

const App = () => {
    return (
        <div className="app">
            <h1>Ticket Management System</h1>
            <TicketForm />
            <KanbanBoard />
        </div>
    );
};

export default App;
