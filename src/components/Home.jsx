import { useEffect, useState } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import "./styles/Home.css";
import clickerImage from "./styles/images/clicker-image.jpg";
const Home = () => {
    const [clicks, setClicks] = useState(0)
    const [upgrade, setUpgrade] = useState(1)
    const [priceMulti, setPriceMulti] = useState(10)
    const [priceAuto, setPriceAuto] = useState(20)
    const [isAuto, setIsAuto] = useState(false)
    let disMultiButton = true
    let disAutoButton = true
    
    
    const increment = () =>{
        setClicks(clicks => clicks + upgrade);
    }
    if (clicks >= priceMulti ) {
        disMultiButton = false
    } else {
        disMultiButton = true
    }

    if (clicks >= priceAuto){
        disAutoButton = false
    } else{
        disAutoButton = true
    }
    useEffect(() => {
        let interval;
        if (isAuto){
            interval = setInterval(() => {setClicks(clicks => clicks + upgrade)}, 1000);
        }

        return () => clearInterval(interval);
    }, [isAuto, upgrade])

    const autoClick = () => {
        if (clicks >= priceAuto){
            setIsAuto(true)
        }
        setPriceAuto(priceAuto * 3);
        setClicks(clicks - priceAuto)
    }
    const resetAuto = () => {
        setIsAuto(false)
        setPriceAuto( 20)
    }
    const isUpgrade = () => {
        if (clicks >= priceMulti){
        setUpgrade(upgrade + 1);
        };
        setPriceMulti(priceMulti * 2);
        setClicks(clicks - priceMulti);
    }
    const resetUpgrade = () => {
        setUpgrade(1);
        setPriceMulti(10);
    }
    const resetClicks = () => {
        setClicks(0);
    }

    return(
        <><Header />
        <div className="HomePage">
            <h1 className="HomeTitle">Тапай монетку пж</h1>
            <h2 className="HomeText">{clicks}</h2>
            <button className="autoClicks" onClick={autoClick} disabled={disAutoButton}>Автокклик</button>
            <button className="resetAutoBtn" onClick={resetAuto}>Сбросить автоклик</button>
            <button className="upgradeBtn" onClick={isUpgrade} disabled = {disMultiButton}>Мультиклик</button>
            <button className="resetUpgrades" onClick={resetUpgrade}>Сбросить улучшение</button>
            <div className="btn-container">
                <button className="clickerButton" onClick={increment}>
                    <img className="btn-img" src={clickerImage} alt="Картинка-кнопка" />
                </button>
                <button className="resetbtn" onClick={resetClicks}>Сбросить</button>
            </div>
        </div><Footer className="HomeFooter"/></>
        
        );
};

export default Home;