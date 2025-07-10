import React, { useState } from "react";
import { Connect, connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";

const NavBar = ({activeTab}) => {
    alert (activeTab);
    const dispath = useDispatch();
  const [listNav] = useState(["home", "skills", "projects", "contacts"]);
  const changeTab = (value) => {
   dispath(changeTabActive(value));
  }
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <nav>
        {listNav.map((value, key) => (
          <span key={key} className={activeTab === value ? 'active' : ''} onClick={() => changeTab(value)}>{value}</span>
        ))}
      </nav>
    </header>
  );
};
const mapStateToProps = (state) => ({
  activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive})(NavBar)
