import React, {
    Component
} from 'react';
import api from '../../services/api';

import './style.css';

class Main extends Component {

    state = {
        donors: [],
    };

    componentDidMount() {
        this.loadDonors();
    }

    loadDonors = async () => {
        const response = await api.get('/donors');
        console.log(response);

        this.setState({
            donors: response.data
        });
    };

    render() {

        const { donors } = this.state;

        return (
            <main>
                <h2>Últimos <span>Doadores</span></h2>
                <section className="donors">
                    {donors.map(donor => (
                        <div className="donor" key={donor._id}>
                            <div className="blood">{donor.blood}</div>
                            <p>{donor.name}</p>
                        </div>
                    ))}
                </section>
            </main>
        );
    }
}

export default Main;