import React from "react";
import { Link } from 'react-router-dom';


function MenuLinks(props){
    return(
        <div className="p-2 w-full">
            <div className="font-bold border-b p-2 w-full">
                appName
            </div>
            <ul className="w-full">
                <li  className="border-b border-t p-2 block w-full">
                <Link to="/" onClick={props.closeMenu}>Home</Link>
                </li>
                <li className="border-b p-2">
                <Link to="/about"  onClick={props.closeMenu}>About</Link>
                </li>
                {/* <li className="border-b p-2">
                <Link to="/products"  onClick={props.closeMenu}>Products</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default MenuLinks;