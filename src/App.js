import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";
import HeaderTop from "./pages/HeaderTop";
import Main from "./pages/Main";
import Games from "./pages/Games";
import Settings from "./pages/Settings";
import PrivateInfo from "./pages/PrivateInfo";
import Servers from "./pages/Servers";

const App = () => {
  const [loading, setLoading] = useState(true);

  const mainApi = async () => {
    setLoading(true);
    try {
      const response = await fetch('api url', {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      const result = await response.json();
      console.log('mainData', result);
      setLoading(false);
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    mainApi();
  }, []);

  if(loading) {
    return <Loading />
  }
  return (
    <Routes>
      <Route path="/" element={<HeaderTop />}>
        <Route index element={<Main />} />
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
