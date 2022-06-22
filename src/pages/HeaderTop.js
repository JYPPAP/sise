import React from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const HeaderTop = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const params = useParams();
  console.log("🚀 ~ file: HeaderTop.js ~ line 8 ~ HeaderTop ~ params");
  console.log(params);
  
  
  console.log("🚀 ~ file: HeaderTop.js ~ line 6 ~ HeaderTop ~ location");
  console.log(location);
  

  if (location.pathname === "/") {
    return (
      <>
        <div id="header_top">
          <Link to="/" className="link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z" />
            </svg>
          </Link>
          <div className="logo"></div>
          <Link to="/settings" className="config_app">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
              <path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z" />
            </svg>
          </Link>
        </div>
        <Outlet />
      </>
    );
  } else {
    let title;
    let headerTop;

    switch (location.pathname) {
      case "/settings":
        title = "설정";
        break;
      case "/games":
        title = params.gameName;
        break;
      default:
        title = params.gameName;
        break;
    }
    headerTop = (
      <>
        <BackBtn navigate={navigate} />
        <Title title={title} />
      </>
    );
    if (location.pathname === "/games/servers") {
      headerTop = (
        <>
          <BackBtn navigate={navigate} />
          <Title title={title} />
          <StarIcon toggleStar={"toggleStar"} />
        </>
      );
    }

    return (
      <>
        <div id="header_top">{headerTop}</div>
        <Outlet />
      </>
    );
  }
};

function BackBtn({ navigate }) {
  return (
    <div onClick={() => navigate(-1)} className="back">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" />
      </svg>
    </div>
  );
}

const Title = ({title}) => {
  return <div className="title">{title}</div>;
};

const StarIcon = (toggleStar) => {
  return (
    <svg
      className={"star" + toggleStar}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
    </svg>
  );
};

export default HeaderTop;
