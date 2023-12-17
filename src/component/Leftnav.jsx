import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenu";
import { categories } from "../util/constants";
import { Context } from "../context/contextApi";

const Leftnav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;

      default:
        break;
    }
  };
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-[#444] fixed md:fixed z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-[0]" : ""
      }`}
    >
      <div className="flex px-5 h-full flex-col">
        {categories.map((item, index) => {
          return (
            <div key={index}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectCategories === item.name ? "bg-white/[0.15]" : " "
                }`}
              />
            </div>
          );
        })}
       
      </div>
    </div>
  );
};

export default Leftnav;
