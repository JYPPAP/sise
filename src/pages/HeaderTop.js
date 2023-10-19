import React, {useState, useEffect} from 'react';
import {Link, Outlet, useLocation, useNavigate, useParams} from 'react-router-dom';
import {LinkIcon, ConfigIcon, BackIcon, StarIcon} from './IconBox';

const HeaderTop = () => {
    const location = useLocation();
    const params = useParams();
    const serverInfo = params.serverName ? params.gameName + ',' + params.serverName : '';
    let navigate = useNavigate();
    // localStorage.setItem("favorite_list", "");
    let favorite = localStorage.getItem('favorite_list') || '';
    const [star, setStar] = useState('false');
    
    useEffect(() => {
        console.log('로컬스토리지에 저장된 값');
        console.log(favorite);
        console.log('현재 서버 정보');
        console.log(serverInfo);
        const toggleStar = Boolean(Number(favorite.indexOf(serverInfo)) >= 0) || false;
        setStar(toggleStar);
    }, [serverInfo]);
    
    if (location.pathname === '/') {
        return (
            <>
                <div id="header_top">
                    <Link to="/" className="link">
                        <LinkIcon/>
                    </Link>
                    <div className="logo"></div>
                    <Link to="/settings" className="config_app">
                        <ConfigIcon/>
                    </Link>
                </div>
                <Outlet/>
            </>
        );
    } else {
        let title;
        let headerTop;
        
        if (Object.keys(params) !== undefined) {
            title = Object.keys(params)[1] === 'serverName' ? Object.values(params)[1] : Object.values(params);
        }
        
        headerTop = (
            <>
                <BackBtn navigate={navigate}/>
                <Title title={title}/>
            </>
        );
        
        if (Object.keys(params)[1] === 'serverName') {
            headerTop = (
                <>
                    <BackBtn navigate={navigate}/>
                    <Title title={title}/>
                    <ToggleStar
                        star={star}
                        setStar={setStar}
                        favorite={favorite}
                        serverInfo={serverInfo}
                    />
                </>
            );
        }
        
        return (
            <>
                <div id="header_top">{headerTop}</div>
                <Outlet/>
            </>
        );
    }
};

function BackBtn({navigate}) {
    return (
        <div onClick={() => navigate(-1)} className="back">
            <BackIcon/>
        </div>
    );
}

const Title = ({title}) => {
    return <div className="title">{title}</div>;
};

function toggleFavorite({star, setStar, favorite, serverInfo}) {
    if (star) {
        favorite = favorite.replace(favorite.indexOf(serverInfo) === 0 ? serverInfo + '|' : '|' + serverInfo, '');
    } else {
        let add_game = favorite.length > 0 ? '|' + serverInfo : serverInfo;
        favorite = favorite + add_game;
    }
    localStorage.setItem('favorite_list', favorite);
    setStar(!star);
}

const ToggleStar = ({star, setStar, favorite, serverInfo}) => {
    return (
        <div
            className={'star' + (star ? ' on' : '')}
            onClick={() => toggleFavorite({star, setStar, favorite, serverInfo})}
        >
            <StarIcon/>
        </div>
    );
};

export default HeaderTop;
