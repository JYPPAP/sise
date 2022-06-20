import React from "react";
import MenuTab from './MenuTab';
import Container from './Container';

// const App = () => {
//   const [isReady, setIsReady] = useState(true);
//   const [tab, setTab] = useState("home");
//   const [sub, setSub] = useState("");
//   if (isReady === true) {
//     return (
//       <>
//         <HeaderTop tab={tab} setTab={setTab} sub={sub} />
//         <MenuTab tab={tab} setTab={setTab} sub={sub} />
//         <Container tab={tab} sub={sub} setSub={setSub} />
//       </>
//     );
//   } else {
//     return <Loading setIsReady={setIsReady} />;
//   }
// };

const Main = () => {
  return (
    <>
      <MenuTab />
      {/* <Con /> */}
    </>
    // <div>
    //   <h1>메인 페이지 입니다.</h1>
    // </div>
  );
};

export default Main;