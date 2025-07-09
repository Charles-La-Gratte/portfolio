import React, { useState } from "react";
import { connect } from "react-redux";
import { changeTabActive } from "../redux/action";

const NavBar = ({activeTab}) => {
  alert (activeTab);
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
const mapStateToProps = (state) => ({
  activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive})(NavBar);
