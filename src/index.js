import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import game_list from './game_list.json';
// import server_list from './server_list.json';
import './reset.css';
import './index.css';
import './loading.css';


class HeaderTop extends React.Component {
  render() {
    return(
      <div id="header_top">
        <div className="link"></div>
        <div className="logo"></div>
        <div className="config_app"></div>
      </div>
    )
  }
}

function MenuTab(props) {
  const [tabValue, setTabValue] = useState("home");
  return(
    <>
      <ul id="menu_tab">
        <li className="home" onClick={() => setTabValue("home")} >홈</li>
        <li className="search_game" onClick={() => setTabValue("search_game")}>게임검색</li>
        <li className="favorite_game" onClick={() => setTabValue("favorite_game")}>관심게임</li>
        <li className="trade_rank" onClick={() => setTabValue("trade_rank")}>거래순위</li>
      </ul>
      <div id="tab_indicate" className={tabValue}></div>
    </>
  )
}

class Container extends React.Component {
  render() {
    console.log("game_list");
    console.log(game_list);
    const list_value = (game_list).map((item, i) => {
      return (
        <li key={i} className="item">
          {item.game_name}
        </li>
      );
      
    });
    console.log("list_value");
    console.log(list_value);
    console.log("################");
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
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  render() {
    /* 로딩을 체크할 수 있는 부분을 추가하기
    값 변경은 
    this.setState((state)) => {
      return {isReady: true}
    }
    로 하면 될 것 같음.
    todo json 파일이 정상적으로 받아와졌는지 확인하는 부분 추가하기.
    todo 파일을 받은 뒤 isReady를 false로 변경할 수 있도록 만들기
    
     */

    /* 로딩이 완료되면 출력할 홈 페이지 */
    if(this.state.isReady === true) {
      return(
        <>
          <HeaderTop />
          <MenuTab tab="home" />
          <Container />
        </>
      )
    } else {
      /* 로딩중일 때 출력할 로딩 페이지 */
      return(
        <>
          <div className="load-dots">
            <div className="load-dot"></div>
            <div className="load-dot"></div>
            <div className="load-dot"></div>
            <div className="load-dot"></div>
            <div className="load-dot"></div>
          </div>
          <div className="copy">Copyrights ITEMMANIA</div>
        </>
      );
    }
  }
}

// ============================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);