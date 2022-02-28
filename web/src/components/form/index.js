import React, { useState } from 'react';
import api from '../../services/api';

import './style.css';
// import './scripts';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [blood, setBlood] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            blood
        };

        try {
            const response = await api.post('/donors', data);
            alert(`Obrigado pelo cadastro ${response.data.name}`);
        } catch (err) {
            alert('Erro ao cadastrar, tente novamente');
        }
    }

    return (
        <section className="form hide">
            <h2>Entre na lista de doadores</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Nome completo" required value={name}
                    onChange={e => setName(e.target.value)} />

                <input type="text" placeholder="Email" required value={email}
                    onChange={e => setEmail(e.target.value)} />

                <input type="text" placeholder="Tipo Sanguíneo" required value={blood}
                    onChange={e => setBlood(e.target.value)} />
                <button type="submit">Quero Ajudar</button>
            </form>
        </section>
    );
}

export default Form;