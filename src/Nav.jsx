import React,{useState,useEffect} from 'react'
import "./Nav.css"


function Nav() {

    const [show,handleShow]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",null);
        }

    }, []);


    return (
        <div className={`nav ${show && "nav_back"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
                alt="Netflix Logo"
            />
            {/* <img
                className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
                alt="Netflix Logo" 
            /> */}
        </div>
    )
}

export default Nav;
