import { useRef } from "react";
import { FaBook, FaHeart, FaHome, FaList, FaSearch, FaStore, FaTags, FaTimes, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
    const navRef = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("login-form");
    }

    return (
        <div>
           <header className="header">
            <div className="header_one">
            <a href="\#"  className="logo" ><FaBook />Bookly</a>       
            <form action="" className="search-form">
            <input type="search" id="search-box" placeholder="search here..."/>
           <label htmlFor="search-box"><FaSearch/></label>
            </form>
            <div className="icons">
                <div id="search-btn"><FaSearch/></div>
                <a id="menu-btn" href="\#"><FaHeart/></a>
                <a id="cart-btn" href="\#"><FaCartShopping/></a>
                <div id="login-btn" className="user-btn" onClick={showNavbar}><FaUser/></div>
            </div>
        </div>
        <div className="header_two">
            <div className="navbar">
                <a href="\#">Home</a>
                <a href="\#">Featured</a>
                <a href="\#">Arrivals</a>
                <a href="\#">Reviews</a>
                <a href="\#">Blogs</a>
            </div>
            </div>

            <div className="bottom-navbar">
                <a href="\#"><FaHome/></a>
                <a href="\#"><FaList/></a>
                <a href="\#"><FaTags/></a>
                <a href="\#"><FaStore/></a>
            </div>

            <div className="login-form-container" ref={navRef}>
                <div id="close-login-btn" onClick={showNavbar}> <FaTimes/> </div>
                <form action="#">
                    <h3>Sign in</h3>
                    <span>email</span>
                    <input type="email" placeholder="enter your email" className="box"/>
                    <span>password</span>
                    <input type="password" placeholder="enter your password" className="box"/>

                    <div className="check-box">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="">remember me</label>
                    </div>

                    <input type="submit" value="sign in" className="btn"/>
                    <p>Forget password? <a href="\#">click here</a></p>
                    <p>don't have an account? <a href="\#">register now</a></p>
                </form>
        
        </div>
           </header>
           </div>
    )
}

export default Navbar;