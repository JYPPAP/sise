import React, { useState } from "react";
import MenuTab from "./MenuTab";
import Container from "./Container";

const Main = () => {
  const [tab, setTab] = useState("");
  console.log("Main -> tab");
  console.log(tab);
  return (
    <>
      <MenuTab tab={tab} setTab={setTab} />
      <Container tab={tab} />
    </>
  );
};

export default Main;