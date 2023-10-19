import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {getGame} from './data/game_data';
import {IconTitle, ChangeUp, ChangeDown, ChangeNone} from './icons/IconBox';
import {GetServerList, getServer} from './data/server_data';

const ServerList = () => {
    const params = useParams();
    const gameInfo = getGame(params.gameName);
    const serverInfo = getServer(params.serverName);
    const serverList = GetServerList();
    const [viewTable, setViewTable] = useState(true);
    console.log("🚀 ~ Games.js ");
    console.log("params");
    console.log(params);
    console.log("gameInfo");
    console.log(gameInfo);
    console.log("serverInfo");
    console.log(serverInfo);
    console.log("serverList");
    console.log(serverList);
    
    function getToday(i) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const year = ('0' + date.getFullYear()).slice(-2);
        const month = ('0' + (1 + date.getMonth())).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return year + '.' + month + '.' + day;
    }
    
    const list_value = serverList.map((item, i) => {
        const changePrice = Number(item.date_price[i].price) - Number(item.date_price[i + 1].price);
        console.log(`changePrice: ${changePrice}`);
        let sign;
        if (changePrice > 0) {
            sign = <ChangeUp/>;
        } else if (changePrice < 0) {
            sign = <ChangeDown/>;
        } else {
            sign = <ChangeNone/>;
        }
        
        // console.log("item");
        // console.log(item);
        return (
            <li key={i} className="item">
                <div className="date">{getToday(i)}</div>
                <div className="day_price">{Number(item.date_price[i].price)}</div>
                <div className="change_price">
                    {sign}
                    {Number(item.date_price[i].price) -
                        Number(item.date_price[i + 1].price)}
                </div>
            </li>
        );
    });
    
    return (
        <div id="container">
            <div className="cont">
                <IconWrap standard={gameInfo.standard}/>
                <div className="view_toggle">
                    <div
                        className={'view_table' + (viewTable ? ' on' : '')}
                        onClick={() => setViewTable(true)}
                    >
                        표 보기
                    </div>
                    <div
                        className={'view_graph' + (viewTable ? '' : ' on')}
                        onClick={() => setViewTable(false)}
                    >
                        그래프 보기
                    </div>
                </div>
                {viewTable ? (
                    <ServerTable list_value={list_value}/>
                ) : (
                    <ServerGraph list_value={list_value}/>
                )}
            </div>
        </div>
    );
};

function ServerTable({list_value}) {
    return (
        <ul id="server_table">
            <li className="subtitle">
                <div className="date" children="날짜"/>
                <div className="day_price" children="평균가"/>
                <div className="change_price" children="등락"/>
            </li>
            {list_value}
        </ul>
    );
}

function ServerGraph({ServerList}) {
    return <div>그래프 입니다.</div>;
}

function IconWrap({standard}) {
    return (
        <div className="icon_wrap">
            <IconTitle/>
            {standard}
        </div>
    );
}

export default ServerList;
