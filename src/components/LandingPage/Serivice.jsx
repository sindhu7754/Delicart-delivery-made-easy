import React, { Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const Serivice = ({ setOpen, setToggleService }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="absolute top-12 lg:top-8 bg-white lg:p-4">
        <ul className="space-y-2 lg:ml-2 text-base md:text-lg flex flex-col">
          <li
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
              setToggleService(false);
              if (!user) {
                toast.error("Please Sign In Before You Access This Page");
                return;
              } else {
                navigate("/ride");
              }
            }}
          >
            Order
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Serivice;
