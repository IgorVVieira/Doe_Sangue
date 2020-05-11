import React from 'react';

import './style.css';
// import './scripts';

const Form = () => {
    return (
        <section className="form hide">
            <h2>Entre na lista de doadores</h2>
            <form action="/donors" method="POST">
                <input type="text" placeholder="Nome completo" required />
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Tipo Sanguíneo" required />
                <button>Quero Ajudar</button>
            </form>
        </section>
    );
}

export default Form;