import React from "react";
// import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

// const HeaderTop = ({ tab, sub }) => {
const HeaderTop = () => {
  // if (!Boolean(sub)) {
    return (
      <>
      <div id="header_top">
        <Link to="/" className="link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M208 80C208 53.49 229.5 32 256 32H320C346.5 32 368 53.49 368 80V144C368 170.5 346.5 192 320 192H312V232H464C494.9 232 520 257.1 520 288V320H528C554.5 320 576 341.5 576 368V432C576 458.5 554.5 480 528 480H464C437.5 480 416 458.5 416 432V368C416 341.5 437.5 320 464 320H472V288C472 283.6 468.4 280 464 280H312V320H320C346.5 320 368 341.5 368 368V432C368 458.5 346.5 480 320 480H256C229.5 480 208 458.5 208 432V368C208 341.5 229.5 320 256 320H264V280H112C107.6 280 104 283.6 104 288V320H112C138.5 320 160 341.5 160 368V432C160 458.5 138.5 480 112 480H48C21.49 480 0 458.5 0 432V368C0 341.5 21.49 320 48 320H56V288C56 257.1 81.07 232 112 232H264V192H256C229.5 192 208 170.5 208 144V80z"/></svg></Link>
        <div className="logo"></div>
        <Link to="/settings" className="config_app"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/></svg></Link>
      </div>
      <Outlet />
      </>
    );
  // } else {
  //   return (
  //     <div id="header_top">
  //       <div className="back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"/></svg></div>
  //       <div className="title">{sub}</div>
  //       {/* <div className="star"></div> */}
  //     </div>
  //   );
  // }
};

export default HeaderTop;