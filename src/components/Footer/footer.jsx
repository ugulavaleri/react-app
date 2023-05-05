import "./footer.css";
import logo from "../../images/Logo.png";

import Fb from "../../images/Fb.png";
import Insta from "../../images/Insta.png";
import Twiter from "../../images/Twiter.png";
import Pinterest from "../../images/Pintrest.png";

const footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerLeft">
                    <h2>Contact Us</h2>
                    <div>
                        <h5>Email</h5>
                        <p>needhelp@Organia.com</p>
                    </div>
                    <div>
                        <h5>Phone </h5>
                        <p>666 888 888</p>
                    </div>
                    <div>
                        <h5>Address</h5>
                        <p>88 road, borklyn street, USA</p>
                    </div>
                </div>
                <div className="footerMiddle">
                    <div className="middleLogo">
                        <img src={logo} alt="logo" />
                        <h1>Organick</h1>
                    </div>
                    <div>
                        <p>
                            Simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum simply dummy text of the
                            printing
                        </p>
                    </div>
                    <div className="iconsBox">
                        <div className="footerIconBox">
                            <a href="https://www.instagram.com/">
                                <img src={Insta}></img>
                            </a>
                        </div>
                        <div className="footerIconBox">
                            <a href="https://www.facebook.com/">
                                <img src={Fb}></img>
                            </a>
                        </div>
                        <div className="footerIconBox">
                            <a href="https://twitter.com/">
                                <img src={Twiter}></img>
                            </a>
                        </div>
                        <div className="footerIconBox">
                            <a href="https://www.pinterest.com/">
                                <img src={Pinterest}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footerRight">
                    <h2>Utility Pages</h2>
                    <div>
                        <p>Style Guide</p>
                        <p>404 Not Found</p>
                        <p>Password Protected</p>
                        <p>Licences</p>
                        <p>Changelog</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default footer;
