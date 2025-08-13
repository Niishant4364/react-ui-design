
import "./style.css"

function Header()
{
    return(
        <>
        <div className="header-section">

            <div className="nav-bar">
            <div className="logo-sec">
                <img src="https://themewagon.github.io/Joyseno/images/logo.png" alt="logo" />
            </div>
            <div className="nav-sec">
                <a href="home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/portfolio">portfolio</a>                
                <a href="/services">Services</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact US</a>
            </div>
            </div>
        </div>
        </>
    )
}
export default Header

