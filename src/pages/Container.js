import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getGameList } from "./game_data.js";

const Container = ({ tab }) => {
  const gamelist = getGameList();
  const [search, setSearch] = useState("");
  let tabContainer;
  switch (tab) {
    case "search":
      tabContainer = (
        <SearchList search={search} setSearch={setSearch} list={gamelist} />
      );
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
      <div className="cont">{tabContainer}</div>
    </div>
  );
};

function HomeList({ list, tab }) {
  const list_value = list.slice(0, 12).map((item, i) => {
    return (
      <li key={i} className="item">
        <Link to={`/games/:${item.name}`} children={item.name} />
      </li>
    );
  });
  return (
    <>
      <IconWrap tab={tab} />
      <ul id="home_list">{list_value}</ul>
    </>
  );
}

function SearchList({ search, setSearch, list }) {
  const filteredList = list.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const list_value = filteredList.map((item, i) => {
    return (
      <li key={i} className="item">
        <Link to={`/games/:${item.name}`} children={item.name} />
      </li>
    );
  });

  return (
    <div className="cont">
      <div
        className="search_wrap"
        onClick={() => {
          document.getElementById("search_bar").focus();
        }}
      >
        <div className="search_icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </div>
        <input
          id="search_bar"
          placeholder="게임명을 입력해 주세요."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
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
function RankList({ list, tab }) {
  const sort_list = [].concat(list).sort((a, b) => a.rank > b.rank ? 1 : -1)
  const list_value = sort_list.map((item, i) => {
    const { rank, name, rank_before } = item;
    let change = Number(rank_before) - Number(rank);
    let sign;
    if(change > 0) {
      sign = <ChangeUp />;
    } else if(change < 0) {
      sign = <ChangeDown />;
    } else {
      sign = <ChangeNone />;
    }
    
    return (
      <li key={i} className="item">
        <div className="rank">{rank}</div>
        <div className="name">{name}</div>
        <div className="change">
          {sign}
          {change}
        </div>
      </li>
    );
  });

  return (
    <div className="cont">
      <IconWrap tab={tab} />
      <ul id="rank_list">
        <li className="subtitle">
          <div className="rank" children="순위" />
          <div className="name" children="게임명" />
          <div className="change" children="등락" />
        </li>
        {list_value}
      </ul>
    </div>
  );
}

function ChangeUp() {
  return (
    <svg
      className="ChangeUp"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" />
    </svg>
  );
}

function ChangeDown() {
  return (
    <svg
      className="ChangeDown"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
    </svg>
  );
}
function ChangeNone() {
  return (
    <svg
      className="ChangeNone"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
    </svg>
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
      <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM160 224C177.7 224 192 238.3 192 256V320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320V256C128 238.3 142.3 224 160 224zM288 320C288 337.7 273.7 352 256 352C238.3 352 224 337.7 224 320V160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160V320zM352 192C369.7 192 384 206.3 384 224V320C384 337.7 369.7 352 352 352C334.3 352 320 337.7 320 320V224C320 206.3 334.3 192 352 192zM480 320C480 337.7 465.7 352 448 352C430.3 352 416 337.7 416 320V96C416 78.33 430.3 64 448 64C465.7 64 480 78.33 480 96V320z"/></svg>
      </div>
      {subTitle}
    </div>
  );
}

export default Container;
