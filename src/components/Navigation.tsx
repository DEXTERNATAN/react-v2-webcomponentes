import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/components">Componentes</Link></li>
        <li><Link to="/colors">Cores</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;