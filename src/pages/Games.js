import React from "react";
import { Link, useParams } from "react-router-dom";
import { IconTitle, ChangeUp, ChangeDown, ChangeNone } from "./IconBox";
import { getGame } from "./game_data";
import { GetServerList } from "./server_data";

const Games = () => {
  const params = useParams();
  const gameInfo = getGame(params.gameName);
  const serverList = GetServerList();
  // console.log("🚀 ~ Games.js ");
  // console.log("params");
  // console.log(params);
  // console.log("gameInfo");
  // console.log(gameInfo);
  // console.log("serverList");
  // console.log(serverList);


  const list_value = serverList.map((item, i) => {
    const changePrice = Number(item.date_price[0].price) - Number(item.date_price[1].price);
    // console.log("changePrice");
    // console.log(changePrice);
    // console.log("item.date_price[0]");
    // console.log(item.date_price[0]);
    let sign;
    if (changePrice > 0) {
      sign = <ChangeUp />;
    } else if (changePrice < 0) {
      sign = <ChangeDown />;
    } else {
      sign = <ChangeNone />;
    }

    return (
      <li key={i} className="item">
        <Link to={`servers/${item.server_name}`} >
          <div className="server_name">{item.server_name}</div>
          <div className="day_price">{Number(item.date_price[0].price)}</div>
          <div className="change_price">{sign}</div>
        </Link>
      </li>
    )
  });
  
  return (
    <div id="container">
      <div className="cont">
      <IconWrap standard={gameInfo.standard} />
      <ul id="game_list">
        <li className="subtitle">
          <div className="server_name" children="서버명" />
          <div className="day_price" children="평균가" />
          <div className="change_price" children="등락" />
        </li>
        {list_value}
      </ul>
    </div>
    </div>
  );
};

function IconWrap({ standard }) {
  return (
    <div className="icon_wrap">
      <IconTitle />
      {standard}
    </div>
  );
}

export default Games;