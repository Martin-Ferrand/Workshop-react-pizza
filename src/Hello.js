import logo from './img/logoPizza.png'
import { Link } from "react-router-dom";
function Hello() {
    return (
            <nav>
                <div class="nav-wrapper">
                    <img src={logo} style={{width:'80px'}}></img>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>

    );
}
export default Hello;