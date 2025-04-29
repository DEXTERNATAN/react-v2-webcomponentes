import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Avatar from './components/Avatar';
import Breadcrumb from './components/Breadcrumb';
import Button from './components/Button';

const Components: React.FC = () => {
  return (
    <div>
      <h1>Componentes</h1>
      <nav>
        <ul style={{ listStyle: 'none', padding: '1rem 0', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <li><Link to="/components/avatar">Avatar</Link></li>
          <li><Link to="/components/breadcrumb">Breadcrumb</Link></li>
          <li><Link to="/components/button">Button</Link></li>
        </ul>
      </nav>
      <div>
        <Outlet />
        <Routes>
          <Route path="avatar" element={<Avatar />} />
          <Route path="breadcrumb" element={<Breadcrumb />} />
          <Route path="button" element={<Button />} />
        </Routes>
      </div>
    </div>
  );
};

export default Components;