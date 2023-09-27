import { Outlet, Link } from "react-router-dom";
import Menu from "../components/menu";

const Layout = () => {
  const listMenu = Menu.map((menu) => (
    <Link className="layout" key={menu.id} to={menu.to}>
      {menu.name}
    </Link>
  ));

  return (
    <>
      <nav>{listMenu}</nav>
      <Outlet />
    </>
  );
};

export default Layout;
