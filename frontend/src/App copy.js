import logo from './logo.svg';
import './App.css';
import React from 'react';
import TicketList from './components/TicketList';
import TicketForm from './components/TicketForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TicketForm />
      <TicketList />
    </div>
    
  );
}

export default App;
