import React, { useState } from "react";

const MenuTab = ({ tab, setTab, sub }) => {
  if (Boolean(sub)) return;
  return (
    <>
      <ul id="menu_tab">
        <li className="home" onClick={() => setTab("home")}>
          홈
        </li>
        <li className="search_game" onClick={() => setTab("search")}>
          게임검색
        </li>
        <li className="favorite_game" onClick={() => setTab("favorite")}>
          관심게임
        </li>
        <li className="trade_rank" onClick={() => setTab("rank")}>
          거래순위
        </li>
      </ul>
      <div id="tab_indicate" className={tab}></div>
    </>
  );
};

export default MenuTab;