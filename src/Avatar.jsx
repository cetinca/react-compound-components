import React from "react";
import { IoPersonSharp } from "react-icons/io5"

function Avatar (props) {

    return (
        <div >
            {props.src && < img className="avatar" src={props.src} />}
            {props.children && <div className="avatar avatar-letters">{props.children}</div>}
            {(!props.src && !props.children) && < IoPersonSharp className="avatar avatar-icon"/>}
        </div>
    )
}

export default Avatar