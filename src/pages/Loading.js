import React, {useState} from 'react';
import '../loading.css';

const Loading = ({setIsReady}) => {
    // setIsReady
    /*
     onClick={() => setIsReady(true)}
     */
    return (
        <div className="loading_wrap">
            <div className="load-dots">
                <div className="load-dot"></div>
                <div className="load-dot"></div>
                <div className="load-dot"></div>
                <div className="load-dot"></div>
                <div className="load-dot"></div>
            </div>
            <div className="copy">Copyrights ITEMMANIA</div>
        </div>
    );
}

export default Loading;