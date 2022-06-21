import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";
import HeaderTop from "./pages/HeaderTop";
import Main from "./pages/Main";
import Games from "./pages/Games";
import Settings from "./pages/Settings";
import PrivateInfo from "./pages/PrivateInfo";
import Servers from "./pages/Servers";

const App = () => {
  const [loading, setLoading] = useState(false);
  // const [tab, setTab] = useState("home");
  const [tab, setTab] = useState("rank");

  setInterval(() => {
    setLoading(false);
  },2000);

  if(loading) {
    return <Loading />
  }
  return (
    <Routes>
      <Route path="/" element={<HeaderTop />}>
        <Route index element={<Main tab={tab} setTab={setTab}/>} />
        <Route path="/games" element={<Games />}>
          <Route path=":gameId" element={<Servers />} />
        </Route>
        <Route path="/settings" element={<Settings />}>
          <Route path="/settings/privateinfo" element={<PrivateInfo />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
