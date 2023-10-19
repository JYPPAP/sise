import React, {useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {IconTitle, ChangeUp, ChangeDown, ChangeNone, SearchIcon} from './icons/IconBox';
import {getGameList} from './data/game_data.js';

const Container = ({tab}) => {
    const gamelist = getGameList();
    const [find, setFind] = useState('');
    const [modal, setModal] = useState('');
    const [search, setSearch] = useSearchParams();
    let tabContainer;
    
    switch (tab) {
        case 'search':
            tabContainer = <SearchList find={find} setFind={setFind} search={search} setSearch={setSearch} list={gamelist}/>;
            break;
        case 'favorite':
            tabContainer = <FavoriteList list={gamelist} tab={tab} search={search} setSearch={setSearch}/>;
            break;
        case 'rank':
            tabContainer = <RankList list={gamelist} tab={tab} setModal={setModal}/>;
            break;
        case 'home':
        default:
            tabContainer = <HomeList list={gamelist} tab={tab} search={search} setSearch={setSearch}/>;
    }
    
    return (
        <div id="container">
            {modal === '' ? null : <RankModal modal={modal} setModal={setModal}/>}
            {tabContainer}
        </div>
    );
};

function HomeList({list, tab}) {
    const list_value = list.slice(0, 12).map((item, i) => {
        return (
            <li key={i} className="item">
                <Link to={`/games/${item.name}`} children={item.name}/>
            </li>
        );
    });
    return (
        <div className="cont">
            <IconWrap tab={tab}/>
            <ul id="home_list">{list_value}</ul>
        </div>
    );
}

function SearchList({find, setFind, list}) {
    const filteredList = list.filter((item) => {
        return item.name.toLowerCase().includes(find.toLowerCase());
    });
    
    const list_value = filteredList.map((item, i) => {
        return (
            <li key={i} className="item">
                <Link to={`/games/${item.name}`} children={item.name}/>
            </li>
        );
    });
    
    return (
        <div className="cont">
            <div
                className="search_wrap"
                onClick={() => {
                    document.getElementById('search_bar').focus();
                }}
            >
                <SearchIcon/>
                <input
                    id="search_bar"
                    placeholder="게임명을 입력해 주세요."
                    onChange={(e) => {
                        setFind(e.target.value);
                    }}
                />
            </div>
            <ul id="search_list">{list_value}</ul>
        </div>
    );
}

function FavoriteList({tab}) {
    let favorite_game = localStorage.getItem('favorite_list');
    let list_value;
    if (Boolean(favorite_game)) {
        list_value = favorite_game.split('|').map((item, i) => {
            const itemArray = item.split(',');
            return (
                <li key={i} className="item">
                    <Link
                        to={`/games/${itemArray[0]}/servers/${itemArray[1]}`}
                        children={itemArray[0] + ' > ' + itemArray[1]}
                    />
                </li>
            );
        });
    } else {
        list_value = (
            <li className="favorite_info">
                아래 (+) 버튼을 사용하여 관심게임을 추가 해주세요.
            </li>
        );
    }
    return (
        <div className="cont">
            <IconWrap tab={tab}/>
            <ul id="favorite_list">{list_value}</ul>
            <div id="add_list"></div>
        </div>
    );
}

function RankList({list, tab, setModal}) {
    const sort_list = [].concat(list).sort((a, b) => (a.rank > b.rank ? 1 : -1));
    const list_value = sort_list.map((item, i) => {
        const {rank, name, rank_before} = item;
        let change = Number(rank_before) - Number(rank);
        let sign;
        if (change > 0) {
            sign = <ChangeUp/>;
        } else if (change < 0) {
            sign = <ChangeDown/>;
        } else {
            sign = <ChangeNone/>;
        }
        
        return (
            <li key={i} className="item" onClick={() => setModal(name)}>
                <div className="rank" children={rank}/>
                <div className="name" children={name}/>
                <div className="change">
                    {sign}
                    {change}
                </div>
            </li>
        );
    });
    
    return (
        <div className="cont">
            <IconWrap tab={tab}/>
            <ul id="rank_list">
                <li className="subtitle">
                    <div className="rank" children="순위"/>
                    <div className="name" children="게임명"/>
                    <div className="change" children="등락"/>
                </li>
                {list_value}
            </ul>
        </div>
    );
}

function RankModal({modal, setModal}) {
    return (
        <div className="modal_wrap" onClick={() => setModal('')}>
            <div className="modal">
                <h4 className="modal_title">안내</h4>
                <p className="modal_text">더 많은 시세 정보를 보시겠습니까?</p>
                <div className="modal_btn_wrap">
                    <button
                        className="modal_btn modal_close"
                        onClick={() => setModal('')}
                        children="취소"
                    />
                    <Link
                        to={'http://m.itemmania.com/game_info/money/?gamename=' + modal}
                        className="modal_btn modal_confirm"
                        target="_blank"
                        children="확인"
                    />
                </div>
            </div>
        </div>
    );
}

function getToday() {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (1 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return year + '년 ' + month + '월 ' + day + '일 순위';
}

function IconWrap({tab}) {
    let subTitle;
    switch (tab) {
        case 'favorite':
            subTitle = '관심 게임';
            break;
        case 'rank':
            subTitle = getToday();
            break;
        case 'home':
        default:
            subTitle = '대표 게임';
            break;
    }
    return (
        <div className="icon_wrap">
            <IconTitle/>
            {subTitle}
        </div>
    );
}

export default Container;
