import React from 'react';
import Container from './Container';

function MenuTab({tab, setTab}) {
    return (
        <>
            <ul id="menu_tab">
                <li className="home" onClick={() => setTab('home')} children="홈"/>
                <li className="search_game" onClick={() => setTab('search')} children="게임검색"/>
                <li className="favorite_game" onClick={() => setTab('favorite')} children="관심게임"/>
                <li className="trade_rank" onClick={() => setTab('rank')} children="거래순위"/>
            </ul>
            <div id="tab_indicate" className={tab}></div>
        </>
    );
}

const Main = ({tab, setTab}) => {
    return (
        <>
            <MenuTab tab={tab} setTab={setTab}/>
            <Container tab={tab}/>
        </>
    );
};

export default Main;
