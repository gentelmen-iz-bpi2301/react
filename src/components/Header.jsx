import { useNavigate } from 'react-router-dom';
import "./styles/Header.css";

const Header = () => {
    const navigate = useNavigate();

    return (
    <header className="header">
        <div className="logo">Мой Сайт</div>
        <nav className="nav">
        <button
            className="nav-button"
            onClick={() => navigate('/')}
        >
        Главная
        </button>
        <button
            className="nav-button"
            onClick={() => navigate('/about')}
            target="_blank"
        >
        О нас
        </button>
        <button
            className="nav-button"
            onClick={() => navigate('/contact')}
        >
            Контакты
        </button>
        </nav>
    </header>
    );
};

export default Header;