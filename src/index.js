import React from 'react';
import ReactDOM from 'react-dom';
import game_list from './game_list.json';
import server_list from './server_list.json';
import './reset.css';
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
class MenuTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedMenu: "home",
    };
    this.handleclick = this.handleClick.bind(this);
  }
  handleClick(props) {
    console.log("");
    console.log("this.props");
    console.log(props.target.className);
  }

  render() {
    return(
      <>
        <ul id="menu_tab">
          <li className="home" onClick={this.handleClick} >홈</li>
          <li className="search_game" onClick={this.handleClick}>게임검색</li>
          <li className="favorite_game" onClick={this.handleClick}>관심게임</li>
          <li className="trade_rank" onClick={this.handleClick}>거래순위</li>
        </ul>
        <div id="tab_indicate"></div>
      </>
    )
  }
}

function Detail(props) {
  console.log("props: " +props.value);
  console.log(props);
  return (
    <a href="javascript:;" className="home_link" children={props.value} />
  );
}

class Container extends React.Component {
  render() {
    let j=1;
    const list_value = (game_list).map((value, i) => {
      if(j > 12)return;
      j++;
      return (
        <li key={i} className="item">
          <Detail
          value = {value.game_name}
          onClick={() => this.props.onClick(this.props)}
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
        <MenuTab />
        <Container />
      </>
    );
  }
}

// ============================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);