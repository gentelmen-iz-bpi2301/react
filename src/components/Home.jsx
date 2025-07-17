import { useEffect, useState } from "react";
import "./styles/Home.css";
import clickerImage from "./styles/images/clicker-image.jpg";
const Home = () => {
    const [clicks, setClicks] = useState(0)
    const [upgrade, setUpgrade] = useState(1)
    const [priceMulti, setPriceMulti] = useState(10)
    const [isAuto, setIsAuto] = useState(false)
    const priceAuto = 20
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
        setClicks(clicks - priceAuto)
    }
    const resetAuto = () => {
        setIsAuto(false)
    }
    const isUpgrade = () => {
        if (clicks >= priceMulti){
        setUpgrade(upgrade * 2);
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
        
        <div className="HomePage">
            <h1 className="HomeTitle">Тапай монетку пж</h1>
            <h2 className="HomeText">{clicks}</h2>
            <div className="btn-container">
                <div className="autoclick">
                    {!isAuto && <h4 className="autoPrice">Стоимость: {priceAuto}</h4>}
                    {!isAuto && <button className="autoClicks" onClick={autoClick} disabled={disAutoButton}>Автокклик</button>}
                    <button className="resetAutoBtn" onClick={resetAuto}>Сбросить автоклик</button>
                </div>
                <div className="milticlick">
                    <h4 className="multiPrice">Стоимость: {priceMulti}</h4>
                    <button className="upgradeBtn" onClick={isUpgrade} disabled = {disMultiButton}>Мультиклик</button>
                    <button className="resetUpgrades" onClick={resetUpgrade}>Сбросить улучшение</button>
                </div>
                <div className="clikcer">
                    <button className="clickerButton" onClick={increment}>
                        <img className="btn-img" src={clickerImage} alt="Картинка-кнопка" />
                    </button>
                    <button className="resetbtn" onClick={resetClicks}>Сбросить</button>
                </div>
            </div>
        </div>
        
        );
};

export default Home;