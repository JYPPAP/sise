import React from 'react';
import ReactDOM from 'react-dom';
import data from './sise.json';
import './index.css';

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
class HeaderTab extends React.Component {
  render() {
    return(
      <>
        <ul id="header_tab">
          <li className="home">홈</li>
          <li className="search_game">게임검색</li>
          <li className="favorite_game">관심게임</li>
          <li className="trade_rank">거래순위</li>
        </ul>
        <div id="tab_indicate"></div>
      </>
    )
  }
}

function Detail(props) {
  console.log(props);
  return (
    <button
    onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Container extends React.Component {
  render() {
    console.log("");
    console.log("data");
    console.log(data[0].create_date);
    console.log("");
    let j=1;
    const list_value = (data[0].game_list).map((value, i) => {
      // console.log("🚀 ~ file: index.js ~ line 32 ~ Container ~ constlist_value= ~ this", this)
      // console.dir(this);
      // console.log(i);
      console.log("j");
      console.log(j);
      
      if(j > 12)return;
      j++;
      return (
        <li key={i} className="item">
          <Detail
          value = {value.game_name}
          // onClick={() => this.props.onClick(value.game_name)}
          />
          {/* <p>rank : {value.rank}</p>
          <p>standard : {value.standard}</p> */}
        </li>
      )
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
}

class Root extends React.Component {
  render() {
    return (
      <>
        <HeaderTop />
        <HeaderTab />
        <Container />
      </>
    );
  }
}



// ============================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);