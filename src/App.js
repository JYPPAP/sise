import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
// import Loading from './pages/Loading';
import HeaderTop from './pages/components/HeaderTop';
import Main from './pages/Main';
import Games from './pages/Games';
import Settings from './pages/Settings';
import PrivateInfo from './pages/PrivateInfo';
import Servers from './pages/Servers';

const App = () => {
    // const [loading, setLoading] = useState(false);
    const [tab, setTab] = useState('home');
    
    // setInterval(() => {
    //     setLoading(false);
    // }, 2000);
    
    return (
        <Routes>
            <Route path="/" element={<HeaderTop/>}>
                <Route index element={<Main tab={tab} setTab={setTab}/>}/>
                <Route path="/games/:gameName" element={<Games/>}/>
                <Route path="/games/:gameName/servers/:serverName" element={<Servers/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/privateInfo" element={<PrivateInfo/>}/>
                <Route path="*" element={<div className="page404" children="There is Nothing Here!"/>}/>
            </Route>
        </Routes>
    );
};

export default App;
