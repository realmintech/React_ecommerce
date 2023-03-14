import {Link} from "react-router-dom";
import './Header.css';

function Header(){
    return(
        <>
            <nav class="navbar navbar-expand-sm navbar-light sticky-top" style={{backgroundColor: "lightblue",zIndex:"1"}}>
                <div class="container-fluid" >
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                        <img src="" alt="" />
                        <ul class="navbar-nav" style={{marginLeft:""}}>
                            <li class="nav-item ">
                                <Link to={'pages/Home'} class="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/pages/About'} class="nav-link text-white" >About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/pages/Services'} class="nav-link text-white">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/pages/Contact'} class="nav-link text-white" >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;