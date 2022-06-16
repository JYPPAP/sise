import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import game_list from './game_list.json';
// import server_list from './server_list.json';
import './reset.css';
import './index.css';
import './loading.css';


function HeaderTop(props) {
  // console.log("");
  // console.log("##############");
  // console.log("HeaderTop");
  // console.log("props");
  // console.log(props);
  // console.log("##############");
  // console.log("");
  return(
    <div id="header_top">
      <div className="link"></div>
      <div className="logo"></div>
      <div className="config_app"></div>
    </div>
  )
}

const MenuTab = ({tabValue, setTabValue}) => {
  console.log("");
  console.log("##############");
  console.log("MenuTab");
  console.log("{tabValue, setTabValue}");
  console.log({tabValue, setTabValue});
  console.log("##############");
  return(
    <>
      <ul id="menu_tab">
        <li className="home" onClick={() => setTabValue("home")} >홈</li>
        <li className="search_game" onClick={() => setTabValue("search")}>게임검색</li>
        <li className="favorite_game" onClick={() => setTabValue("favorite")}>관심게임</li>
        <li className="trade_rank" onClick={() => setTabValue("rank")}>거래순위</li>
      </ul>
      <div id="tab_indicate" className={tabValue}></div>
    </>
  )
}


function Container(props) {
  // console.log("");
  // console.log("##############");
  // console.log("Container");
  // console.log("props");
  // console.log(props);
  // console.log("game_list");
  // console.log(game_list);
  // console.log("##############");
  // console.log("");
  const home_list = game_list.slice(0, 12);
  const list_value = (home_list).map((item, i) => {
    return (
      <li key={i} className="item">
        {item.game_name}
      </li>
    );
  });
  return (
    <div id="container" >
      <div className="cont">
        <div className="icon_home">대표 게임</div>
        <ul id="list">
        {list_value}
        </ul>
      </div>
    </div>
  );
}

function Loading() {
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
  const [tabValue, setTabValue] = useState("home");
  if(isReady === true) {
    return(
      <>
        <HeaderTop tabValue={tabValue} setTabValue={setTabValue} />
        <MenuTab tabValue={tabValue} setTabValue={setTabValue} />
        <Container tabValue={tabValue} setTabValue={setTabValue} />
      </>
    )
  } else {
    return(
      <Loading isReady={isReady} setIsReady={setIsReady} />
    );
  }
}
// ============================
const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<App />);

export default App;