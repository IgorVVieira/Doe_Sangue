import React, { useState, useEffect } from "react";

import api from "../../services/api";
import Footer from "../../components/footer";
import logo from '../../images/logo.png';

import './styles.css';

const DonorsIndex = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [blood, setBlood] = useState('');
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/donors');
            let donorsArray = [];

            response.data.map((donor) => {
                return donorsArray.push(donor);
            });
            setDonors(donorsArray);
        }
        fetchData();
    }, []);

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            blood
        };

        try {
            const response = await api.post('/donors', data);

            const arrayDonors = Array.from(donors);
            arrayDonors.push(response.data);
            setDonors(arrayDonors);
            alert(`Obrigado pelo cadastro ${response.data.name}`);
        } catch (err) {
            alert('Erro ao cadastrar, tente novamente');
        }
    }

    return (
        <>
            <div className="header">
                <img src={logo} alt="Imagem Doe Sangue" />
                <h2>A sua doação importa</h2>
                <p>Até 3 vidas com uma doação</p>
                <p>Mais de 38.000 doações são necessárias todos os dias</p>
                <p>Apenas 1,9% da população brasileira doa sangue.</p>
            </div>

            <section className="form hide">
                <h2>Entre na lista de doadores</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Nome completo" required value={name}
                        onChange={e => setName(e.target.value)} />

                    <input type="email" placeholder="Email" required value={email}
                        onChange={e => setEmail(e.target.value)} />

                        <select placeholder="Tipo sanguínep" name="blood" id="blood" required onChange={e => setBlood(e.target.value)}>
                            <option value={null} disabled selected>Tipo sanguíneo</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">B+</option>
                            <option value="AB-">AB-</option>
                            <option value="O-">O-</option>
                            <option value="O+">O+</option>
                        </select>
                    <button type="submit">Quero Ajudar</button>
                </form>
            </section>

            <main>
                <h2>Últimos <span>Doadores</span></h2>
                <section className="donors">
                    {donors.map(donor => (
                        <div className="donor" key={donor.id}>
                            <div className="blood">{donor.blood}</div>
                            <p>{donor.name}</p>
                        </div>
                    ))}
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default DonorsIndex;