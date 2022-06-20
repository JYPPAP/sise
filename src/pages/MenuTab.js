import React from "react";
import { Outlet } from "react-router-dom";

const MenuTab = ({ tab, setTab }) => {
  setTab(localStorage.getItem("tab"));
  
  function handleChangeTab(tab) {
    localStorage.setItem("tab", tab);
    setTab(tab);
  }
  return (
    <>
      <ul id="menu_tab">
        <li className="home" onClick={() => handleChangeTab("home")}>
          홈
        </li>
        <li className="search_game" onClick={() => handleChangeTab("search")}>
          게임검색
        </li>
        <li className="favorite_game" onClick={() => handleChangeTab("favorite")}>
          관심게임
        </li>
        <li className="trade_rank" onClick={() => handleChangeTab("rank")}>
          거래순위
        </li>
      </ul>
      <div id="tab_indicate" className={tab}></div>
      <Outlet />
    </>
  );
};

export default MenuTab;