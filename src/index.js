import React from 'react';
import ReactDOM from 'react-dom';
import data from './sise.json';
import './index.css';

class HeaderTop extends React.Component {
  render() {
    return(
      <div></div>
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
    const list_value = (data[0].game_list).map((value, i) => {
      console.log("🚀 ~ file: index.js ~ line 32 ~ Container ~ constlist_value= ~ this", this)
      console.dir(this);
      console.log(i);
      return (
        <li key={i} className="item">
          <Detail
          value = {value.game_name}
          onClick={() => this.props.onClick(value.game_name)}
          />
          <p>rank : {value.rank}</p>
          <p>standard : {value.standard}</p>
        </li>
      )
    });
    
    return (
      <div id="container" >
        <div className="rank_date">{data[0].create_date}</div>
        <ul id="list">
        {list_value}
        </ul>
      </div>
    );
  }
}

class Root extends React.Component {
  render() {
    return (
      <>
        <HeaderTop />
        <Container />
      </>
    );
  }
}



// ============================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);