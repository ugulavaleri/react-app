import "./main.css";

const MainSection = ({ array }) => {
    return (
        <div className="middleContainer">
            {array.map((e) => (
                <div className="insideMiddleContainer">
                    <img src={e.imageURL} alt="" className="productsImage" />
                    <p className="productsName">{e.productName}</p>
                    <p className="productsKind">{e.productKind}</p>
                </div>
            ))}
        </div>
    );
};
export default MainSection;
