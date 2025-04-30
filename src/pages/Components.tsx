import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Avatar from "./components/Avatar/Avatar";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";

const Components: React.FC = () => {
  return (
    <div>
      <h1>Componentes</h1>
      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: "1rem 0",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <li>
            <Link to="/components/avatar">Avatar</Link>
          </li>
          <li>
            <Link to="/components/breadcrumb">Breadcrumb</Link>
          </li>
          <li>
            <Link to="/components/button">Button</Link>
          </li>
          <li>
            <Link to="/components/checkbox">Checkbox</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
        <Routes>
          <Route path="avatar" element={<Avatar />} />
          <Route path="breadcrumb" element={<Breadcrumb />} />
          <Route path="button" element={<Button />} />
          <Route path="checkbox" element={<Checkbox />} />
        </Routes>
      </div>
    </div>
  );
};

export default Components;
