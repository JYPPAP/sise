import React from "react";
import { Link, useParams } from "react-router-dom";
// import { getGameList } from "./game_data";
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
        <Link to={`games/servers/${params.gameName}/${item.server_name}`} >
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
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM160 224C177.7 224 192 238.3 192 256V320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320V256C128 238.3 142.3 224 160 224zM288 320C288 337.7 273.7 352 256 352C238.3 352 224 337.7 224 320V160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160V320zM352 192C369.7 192 384 206.3 384 224V320C384 337.7 369.7 352 352 352C334.3 352 320 337.7 320 320V224C320 206.3 334.3 192 352 192zM480 320C480 337.7 465.7 352 448 352C430.3 352 416 337.7 416 320V96C416 78.33 430.3 64 448 64C465.7 64 480 78.33 480 96V320z" />
        </svg>
      </div>
      {standard}
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

export default Games;