import React from "react";
import { Outlet, Link } from "react-router-dom";
import Menu from "../components/menu";
import onePieceLogo from "../assets/images/One_Piece_Logo.png";

const Layout = () => {
  const listMenu = Menu.map((menu) => (
    <Link className="menu-item" key={menu.id} to={menu.to}>
      {menu.name}
    </Link>
  ));

  return (
    <>
      <div className="layout">
        <div>
          <img className="LogoHome" src={onePieceLogo} alt="Logo One Piece" />
        </div>
        <nav>{listMenu}</nav>
       
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
