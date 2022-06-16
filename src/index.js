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
class MenuTab extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTab(e) {
    console.log("###########");
    console.log("handleTab");
    console.log("e");
    console.log(e);
    console.log("e.target.className");
    console.log(e.target.className);
    console.log("###########");
    this.props.onTabClick(e.target.className);
  }
  render() {
    const tabValue = this.props.tabValue;
    // console.log("##############");
    // console.log("MenuTab");
    // console.log(props);
    // console.log(props.handleTab);
    // console.log("##############");
    // const [tabValue, setTabValue] = useState("home");
    return(
      <>
        <ul id="menu_tab">
          <li className="home" onClick={console.log(this.props)} >홈</li>
          <li className="search_game" onClick={this.props.onTabClick}>게임검색</li>
          <li className="favorite_game" onClick={this.props.onTabClick}>관심게임</li>
          <li className="trade_rank" onClick={this.props.onTabClick}>거래순위</li>
        </ul>
        <div id="tab_indicate" className={tabValue}></div>
      </>
    )
  }
}

function Container (props) {
  
  console.log("##################");
  console.log("Container");
  console.log("props");
  console.log(props);
  console.log("props.tabValue");
  console.log(props.tabValue);
  console.log("##################");
  /* 값의 출력을 어떻게 할 것인지
  [컴포넌트]
  1. State에 따라서 다른 컴포넌트를 출력하도록 한다.
  2. tab 값과 연동해서 tab 값에 따라서 다른 컴포넌트를 출력한다.
  3. 출력되는 컴포넌트는 switch...case 문을 이용한다.
  */

  console.log("game_list");
  console.log(game_list);
  const home_list = game_list.slice(0, 12);
  const list_value = (home_list).map((item, i) => {
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

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.handleTab = this.handleTab.bind(this);
    this.state = {
      isLoading: false,
      tabValue: "home",
    };
  }
  
  handleTab(e) {
    this.props.setState({tabValue: e.target.className});
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
    ? 그런데 받아와졌는지 확인하는 부분은 어디에 넣어야 하지?
      - Root에 넣고 바꿔야 할 것 같은데
    
     */

    /* 로딩이 완료되면 출력할 홈 페이지 */
    if(this.state.isLoading === false) {
      return(
        <>
          <HeaderTop props/>
          <MenuTab tabValue={this.state.tabValue} />
          <Container tabValue={this.state.tabValue} />
        </>
      )
    } else {
      /* 로딩중일 때 출력할 로딩 페이지 */
      return(
        <Loading />
      );
    }
  }
}

// ============================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);