import React from 'react';
import ReactDOM from 'react-dom';
import data from './sise.json';
import './index.css';

class HeaderTop extends React.Component {
  render() {
    /* 
    * TEST
    ? TEST
    ! TEST
    TODO TEST
    @param TEST
    red
     */
    console.log("");
    console.log("data");
    console.dir(data[0].create_date);
    console.log(data[0].create_date);
    console.log("🚀 ~ file: index.js ~ line 20 ~ HeaderTop ~ render ~ data[0].create_date", data[0].create_date)
    console.log("");
    const list_value = (data[0].game_list).map((value, i) => {
      console.log(value);
      console.log(i);
      return (
      <li key={i} className="item">
        {value.game_name}
        <p>rank : {value.rank}</p>
        <p>standard : {value.standard}</p>
      </li>
      )
    });
    
    return (
      <div id="header_top" >
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
      <HeaderTop />
    );
  }
}



// ============================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);