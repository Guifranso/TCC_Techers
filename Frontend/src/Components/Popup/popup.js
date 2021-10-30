import React, { useContext } from 'react';
import { useState } from 'react';
import "./style.scss";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                {/* <button className="closeBtn" onClick={() => props.setTrigger(false)}>close</button> */}
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;