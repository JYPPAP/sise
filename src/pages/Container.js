import React, { useState } from "react";
import Games from "./Games.js";
import GameList from "./GameList.js";

// const Container = ({ tab, sub, setSub }) => {
  // if (!Boolean(sub)) {
  //   switch (tab) {
  //     case "search":
  //       return <SearchList tab={tab} setSub={setSub} />;
  //     case "favorite":
  //       return <FavoriteList tab={tab} setSub={setSub} />;
  //     case "rank":
  //       return <RankList tab={tab} setSub={setSub} />;
  //     case "home":
  //     default:
  //       return <HomeList tab={tab} setSub={setSub} />;
  //   }
  // } else {
  //   switch (sub) {
  //     case "game":
  //       return <Games sub={sub} setSub={setSub} />;
  //     case "server":
  //       return <ServerList sub={sub} setSub={setSub} />;
  //     default:
  //       return;
  //   }
  // }
// }

const Container = () => {
  return (
    <div>Container 입니다.</div>
  );
}

function HomeList({ tab, setSub }) {
  const list_value = GameList.slice(0, 12).map((item, i) => {
    return (
      <li key={i} className="item" onClick={() => setSub("game")}>
        {item.game_name}
      </li>
    );
  });
  return (
    <div id="container">
      <div className="cont">
        <IconWrap tab={tab} />
        <ul id="list">{list_value}</ul>
      </div>
    </div>
  );
}
function SearchList({ tab, setTab }) {
  return <div id="container"></div>;
}
function FavoriteList({ tab, setTab }) {
  return <div id="container"></div>;
}
function RankList({ tab, setTab }) {
  return <div id="container"></div>;
}

function IconWrap({ tab }) {
  let subTitle;
  switch (tab) {
    case "favorite":
      subTitle = "관심 게임";
      break;
    case "rank":
      subTitle = "2022년 06월 16일 순위";
      break;
    case "home":
    default:
      subTitle = "대표 게임";
      break;
  }
  return (
    <div className="icon_wrap">
      <span className="icon"></span>
      {subTitle}
    </div>
  );
}

export default Container;