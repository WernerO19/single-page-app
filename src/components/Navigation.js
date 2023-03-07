import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from "react-spring";

import MenuLinks from "./menuLinks";


function Navigation (){
    const [showMenu,setShowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, {
        from : { position : 'absolute', opacity: 0 },
        enter : { opacity : 1 },
        leave : { opacity : 0 } 
    });

    const menuTransitions = useTransition(showMenu, {
        from : {  opacity: 0, transform: 'translateX(-100%)' },
        enter : { opacity : 1, transform: 'translateX(0%)' },
        leave : { opacity : 0, transform: 'translateX(-100%)' } 
    });
 

    //className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    //className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"


    return (
        <nav>
           <span className="text-xl">
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
            </span>
            {
              maskTransitions((props, item, key) => (
                item && 
                <animated.div key={key} style={props} onClick={() => setShowMenu(false)} className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"></animated.div>
              ))
            }
            {
              menuTransitions((props, item, key) => (
                item && 
                <animated.div key={key} style={props} className="p-3 fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow ">
                    <MenuLinks closeMenu={() => setShowMenu(false)} />
                </animated.div>
              ))
            }
        </nav>
    )
}

export default  Navigation;