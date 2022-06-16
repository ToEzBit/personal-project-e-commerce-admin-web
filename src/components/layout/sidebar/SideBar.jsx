import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RiBillLine } from "react-icons/ri";
import { BiShoppingBag, BiLogOut } from "react-icons/bi";
import { removeAccessToken } from "../../../services/localStorage";

function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeAccessToken();
    navigate("/login");
    window.location.reload(false);
  };
  return (
    <div className="flex  h-full min-h-screen ">
      <div className="bg-main-theme-color text-white w-48  px-4 pt-16 ">
        <div className={`flex my-4  rounded-lg `}>
          <RiBillLine />
          <h1>Orders</h1>
        </div>
        <div className="ml-4 my-4 flex flex-col">
          <Link
            className={`hover:text-orange-300 my-4 rounded-lg px-4 ${
              location.pathname === "/all-order" ? "bg-violet-300" : ""
            }`}
            to="/all-order"
          >
            All Order
          </Link>
          <Link
            className={`hover:text-orange-300 my-4 rounded-lg px-4 ${
              location.pathname === "/payment-order" ? "bg-violet-300" : ""
            }`}
            to="/payment-order"
          >
            Payment Order
          </Link>
          <Link
            className={`hover:text-orange-300 my-4 rounded-lg px-4 ${
              location.pathname === "/pending-order" ? "bg-violet-300" : ""
            }`}
            to="/pending-order"
          >
            Pending Order
          </Link>
          <Link
            className={`hover:text-orange-300 my-4 rounded-lg px-4  ${
              location.pathname === "/cancel-order" ? "bg-violet-300" : ""
            }`}
            to="/cancel-order"
          >
            Cancel Order
          </Link>
        </div>

        <div className="flex">
          <BiShoppingBag />
          <h1>Products</h1>
        </div>
        <div className="ml-4 my-4 flex flex-col">
          <Link
            className={`hover:text-orange-300 my-4  rounded-lg px-4 ${
              location.pathname === "/product-view" ? "bg-violet-300" : ""
            }`}
            to="/product-view"
          >
            Products View
          </Link>
          <Link
            className={`hover:text-orange-300 my-4  rounded-lg px-4 ${
              location.pathname === "/product-add" ? "bg-violet-300" : ""
            }`}
            to="/product-add"
          >
            Products Add
          </Link>
          <Link
            className={`hover:text-orange-300 my-4  rounded-lg px-4 ${
              location.pathname === "/product-edit" ? "bg-violet-300" : ""
            }`}
            to="/product-edit"
          >
            Products Edit
          </Link>
          <Link
            className={`hover:text-orange-300 my-4  rounded-lg px-4 ${
              location.pathname === "/product-remove" ? "bg-violet-300" : ""
            }`}
            to="/product-remove"
          >
            Products Remove
          </Link>
        </div>
        <hr className="mx-4 my-4" />
        <div className="flex">
          <BiLogOut />
          <button className="mx-4 hover:text-orange-300" onClick={handleLogout}>
            Log out
          </button>
        </div>
        <div></div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideBar;
