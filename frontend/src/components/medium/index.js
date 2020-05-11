import React from 'react';

import './style.css';

const Delete = () => {
    return (
        <form action="/delete" method="GET">
            <button id="btnLimpar">Deletar todos doadores</button>
        </form>
    );
}

export default Delete;