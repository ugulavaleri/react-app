import "./inputPart.css";
import BgPhoto from "../../images/inputPhoto.jpg";

const inputPartFunc = () => {
    return (
        <div className="inputContainer">
            <img src={BgPhoto} alt="" />
            <div className="inputBox">
                <div className="textPart">
                    <p>Subscribe to our Newsletter</p>
                </div>
                <div className="inputPart">
                    <input type="text" placeholder="Your Email Address" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default inputPartFunc;
