import "./header.css";
import HeaderBg from "../../images/Image.png";

const Header = () => {
    return (
        <header className="headerDiv">
            <img
                src={HeaderBg}
                alt="Header-Background"
                className="headerBachground"
            />
            <img />
            <p className="headerTitle">Portfolio Standard</p>
        </header>
    );
};
export default Header;
