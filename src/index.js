import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import game_list from './game_list.json';
import server_list from './server_list.json';
import './reset.css';
import './index.css';
import './loading.css';


const HeaderTop = ({tab, sub}) => {
  if (!Boolean(sub)) {
    return(
      <div id="header_top">
        <div className="link"></div>
        <div className="logo"></div>
        <div className="config_app"></div>
      </div>
    );
  } else {
    return(
      <div id="header_top">
        <div className="back"></div>
        <div className="title">{sub}</div>
        {/* <div className="star"></div> */}
      </div>
    )
  }
}

const MenuTab = ({tab, setTab, sub}) => {
  if (Boolean(sub)) return;
  return(
    <>
      <ul id="menu_tab">
        <li className="home" onClick={() => setTab("home")} >홈</li>
        <li className="search_game" onClick={() => setTab("search")}>게임검색</li>
        <li className="favorite_game" onClick={() => setTab("favorite")}>관심게임</li>
        <li className="trade_rank" onClick={() => setTab("rank")}>거래순위</li>
      </ul>
      <div id="tab_indicate" className={tab}></div>
    </>
  )
}

function Container({tab, sub, setSub}) {
  if (!Boolean(sub)) {
    switch(tab) {
      case "search":
        return <SearchList tab={tab} setSub={setSub} />
      case "favorite":
        return <FavoriteList tab={tab} setSub={setSub} />
      case "rank":
        return <RankList tab={tab} setSub={setSub} />
      case "home":
      default:
        return <HomeList tab={tab} setSub={setSub} />;
    }
  } else {
    switch(sub) {
      case "game":
        return <GameList sub={sub} setSub={setSub} />
      case "server":
        return <ServerList sub={sub} setSub={setSub} />
      default: return;
    }
  }
}

function IconWrap({tab}) {
  let subTitle;
  switch(tab) {
    case "favorite":
      subTitle = "관심 게임"
      break;
    case "rank":
      subTitle = "2022년 06월 16일 순위"
      break;
    case "home":
    default:
      subTitle = "대표 게임"
      break;
  }
  return (
    <div className="icon_wrap">
      <span className="icon"></span>{subTitle}
    </div>
  )
}

function HomeList({tab, setSub}) {
  const list_value = game_list.slice(0, 12).map((item, i) => {
    return (
      <li key={i} className="item" onClick={() => setSub("game")}>
        {item.game_name}
      </li>
    );
  });
  return (
    <div id="container" >
      <div className="cont">
        <IconWrap tab={tab} />
        <ul id="list">
          {list_value}
        </ul>
      </div>
    </div>
  );
}
function SearchList({tab, setTab}) {
  return (
    <div id="container" ></div>
  );
}
function FavoriteList({tab, setTab}) {
  return (
    <div id="container" ></div>
  );
}
function RankList({tab, setTab}) {
  return (
    <div id="container" ></div>
  );
}

function GameList({sub, setSub}) {
  return (
    <div id="container" ></div>
  );
}
function ServerList({sub, setSub}) {
  return (
    <div id="container" ></div>
  );
}

function Loading({setIsReady}) {
  // setIsReady
  /* 
  onClick={() => setIsReady(true)}
  */
  return(
    <div class="loading_wrap">
      <div className="load-dots">
        <div className="load-dot"></div>
        <div className="load-dot"></div>
        <div className="load-dot"></div>
        <div className="load-dot"></div>
        <div className="load-dot"></div>
      </div>
      <div className="copy">Copyrights ITEMMANIA</div>
    </div>
  )
}

const App = () => {
  const [isReady, setIsReady] = useState(true);
  const [tab, setTab] = useState("home");
  const [sub, setSub] = useState("");
  if(isReady === true) {
    return(
      <>
        <HeaderTop tab={tab} setTab={setTab} sub={sub} />
        <MenuTab tab={tab} setTab={setTab} sub={sub} />
        <Container tab={tab} sub={sub} setSub={setSub} />
      </>
    )
  } else {
    return(
      <Loading setIsReady={setIsReady} />
    );
  }
}

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<App />);

export default App;