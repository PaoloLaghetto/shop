import logo from "../../../assets/laptop.png";
import { NavLink, useNavigate } from "react-router-dom";
import { CartPanel } from "./CartPanel.tsx";
import {
  selectCartIsEmpty,
  selectTotalCartItems,
  useCart,
  useCartPanel,
} from "../../../services/cart";
import { useState } from "react";
import { selectAuthIsLogged, useAuth } from "../../../services/auth";
import { IfLogged } from "../auth/IfLogged.tsx";

const isActive = (obj: { isActive: boolean }) =>
  obj.isActive ? "text-xl text-sky-400 font-bold" : "text-xl text-white";

export function NavBar() {
  const navigate = useNavigate();
  const logout = useAuth((state) => state.logout);
  const isCartPanelOpened = useCartPanel((state) => state.open);
  const toggleCartPanel = useCartPanel((state) => state.toggle);
  const totalCartItems = useCart(selectTotalCartItems);
  const isEmpty = useCart(selectCartIsEmpty);

  function logoutHandler() {
    logout();
    navigate("login");
  }
  return (
    <div className="fixed z-10 top-0 left-0 right-0 shadow-2xl">
      <div className="flex items-center justify-between h-20 bg-slate-900 text-white shadow-2xl">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img className="w-16" src={logo} alt="logo" />
          <NavLink to="shop" className={isActive}>
            PL SHOP
          </NavLink>
        </div>

        {/* Cart Button Badge */}
        <div>
          <button
            disabled={isEmpty}
            className="btn accent lg"
            onClick={toggleCartPanel}
          >
            Cart: {totalCartItems}
          </button>
        </div>

        {/* Cart Panel */}
        {isCartPanelOpened && <CartPanel />}

        {/* Login / CMS Logout buttons */}
        <div className="fixed bottom-2 right-2 text-white p-5">
          <NavLink to="cms" className="btn accent lg">
            cms
          </NavLink>
          <IfLogged
            else={
              <NavLink to="login" className="btn accent lg">
                login
              </NavLink>
            }
          >
            <button className="btn primary lg" onClick={logoutHandler}>
              logout
            </button>
          </IfLogged>
        </div>
      </div>
    </div>
  );
}
