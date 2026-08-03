import { LOGO_URL } from "../utils/constants";
import {useState} from "react";


const Header = () =>
{
    const [btnNameReact, setBtnNameReact] = useState("login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={() =>{
                        btnNameReact==="login"
                        ?setBtnNameReact("Logout")
                        :setBtnNameReact("login");
                    }}
                    >
                    {btnNameReact}
                    </button>
                </ul>

            </div>

        </div>
    )
}

export default Header;
