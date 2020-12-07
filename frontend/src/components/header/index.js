import React from 'react';

import './style.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Imagem Doe Sangue" />
            <h2>A sua doação importa</h2>
            <p>Até 3 vidas com uma doação</p>
            <p>Mais de 38.000 doações são necessárias todos os dias</p>
            <p>Apenas 1,9% da população brasileira doa sangue.</p>
        </div>
    );
}

export default Header;