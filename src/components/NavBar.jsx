import React, { useState } from "react";

const NavBar = () => {
  const [listNav] = useState(["home", "skills", "projects", "contacts"]);
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <nav>
        {listNav.map((value, key) => (
          <span key={key} className="active">{value}</span>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
