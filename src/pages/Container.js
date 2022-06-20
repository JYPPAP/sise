import React from "react";
import { Link } from "react-router-dom";
import { getGameList } from "./game_data.js";

const Container = ({ tab }) => {
  const gamelist = getGameList();
  let tabContainer;
  switch (tab) {
    case "search":
      tabContainer = <SearchList list={gamelist} tab={tab} />;
      break;
    case "favorite":
      tabContainer = <FavoriteList list={gamelist} tab={tab} />;
      break;
    case "rank":
      tabContainer = <RankList list={gamelist} tab={tab} />;
      break;
    case "home":
    default:
      tabContainer = <HomeList list={gamelist} tab={tab} />;
  }

  return (
    <div id="container">
      <div className="cont">
        {tabContainer}
      </div>
    </div>
  );
};

function HomeList({ navigate, list, tab }) {
  const list_value = list.slice(0, 12).map((item, i) => {
    return (
      <li key={i} onClick={() => navigate(`/games${item.name}`, { tab })} className="item">
        {item.name}
      </li>
    );
  });
  return (
    <div className="cont">
      <IconWrap tab={tab} />
      <ul id="home_list">{list_value}</ul>
    </div>
  );
}
function SearchList({ list, tab }) {
  const list_value = list.map((item, i) => {
    return (
      <Link to={`/games/:${item.name}`} key={i} tab={tab} className="item">
        {item.name}
      </Link>
    );
  });

  return (
    <div className="cont">
      <ul id="search_list">{list_value}</ul>
    </div>
  );
}
function FavoriteList({ tab }) {
  return (
    <div className="cont">
      <IconWrap tab={tab} />
      <ul id="list">{"list_value"}</ul>
    </div>
  );
}
function RankList({ tab }) {
  return (
    <div className="cont">
      <IconWrap tab={tab} />
      <ul id="list">{"list_value"}</ul>
    </div>
  );
}

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return year + "년 " + month + "월 " + day + "일 순위";
}

function IconWrap({ tab }) {
  let subTitle;
  switch (tab) {
    case "favorite":
      subTitle = "관심 게임";
      break;
    case "rank":
      subTitle = getToday();
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
