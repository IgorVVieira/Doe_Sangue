import React from 'react';
import api from '../../services/api';

import './style.css';

const Delete = () => {

    async function deleteDonors(e) {
        e.preventDefault();

        try {
            const response = await api.post('/delete');
            alert('Todos os usuários foram deletados!');
        } catch (err) {
            console.log('Erro ao deletar usuários, tente novamente!');
        }
    }

    return (
        <form onSubmit={deleteDonors}>
            <button type="submit" id="btnLimpar">Deletar todos doadores</button>
        </form>
    );
}

export default Delete;