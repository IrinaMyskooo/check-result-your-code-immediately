import React, {useState, useLayoutEffect} from "react";
import '../index.css'

const WindowWidth = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const resizeWindow = () => {
        setwindowWidth(window.innerWidth);
    };

    useLayoutEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);

        return () => {
            window.removeEventListener("resize", resizeWindow);
        }
    }, [])

    return(
<div>
    <span>width: {windowWidth}</span>
    </div>
    ) 
};

export default WindowWidth;