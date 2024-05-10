import {Link} from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <header className={classes.Navbar}>
            <nav className={classes.nav}>
                <div>
                    <h3>
                        <Link to={"/"}>Fabulous programmers</Link>
                    </h3>
                </div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>{" "}
                    </li>
                    <li>
                        <Link to={"/about"}>About us</Link>
                    </li>
                    <li>
                        <Link to={"/projects"}>Projects</Link>
                    </li>
                    <li>
                        <Link to={"/achivments"}>Achivments</Link>
                    </li>
                </ul>


            </nav>
        </header>
    );
};

export default Navbar;
