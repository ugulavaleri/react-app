import "./App.css";
import Header from "./components/Header/header";
import MainSection from "./components/Main/main";
import InputPartFunc from "./components/InputPart/inputPart";
import Footer from "./components/Footer/footer";

import Photo1 from "./images/Photo1.png";
import Photo2 from "./images/Photo (2).png";
import Photo3 from "./images/Photo (3).png";
import Photo4 from "./images/Photo (4).png";
import Lemon from "./images/Lemon.png";
import Photo6 from "./images/Photo (6).png";

function App() {
    const products = [
        {
            imageURL: Photo1,
            productName: "Organic Carrot",
            productKind: "Fruits",
        },
        {
            imageURL: Photo2,
            productName: "Organic Betel Leafn",
            productKind: "Farmer",
        },
        {
            imageURL: Photo3,
            productName: "Natural Tommato",
            productKind: "Leaf",
        },
        {
            imageURL: Photo4,
            productName: "Black Raspberry",
            productKind: "Fruits",
        },
        {
            imageURL: Lemon,
            productName: "Honey Orange",
            productKind: "Farmer",
        },
        {
            imageURL: Photo6,
            productName: "Green & TastyLemon",
            productKind: "Farmer",
        },
    ];

    return (
        <div className="App">
            <Header />
            <MainSection array={products} />
            <InputPartFunc />
            <Footer />
        </div>
    );
}

export default App;
