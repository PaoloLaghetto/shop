import { NavLink, Outlet } from "react-router-dom";
const isActive = (obj: { isActive: boolean }) =>
  obj.isActive ? "btn primary" : "btn";

export function CMSPage() {
  return (
    // per allineare correttamente i div uso le parentesi tonde
    <div>
      <NavLink to="/cms/products" className={isActive}>
        Products
      </NavLink>
      <NavLink to="/cms/orders" className={isActive}>
        Orders
      </NavLink>
      <Outlet />
    </div>
  );
}
