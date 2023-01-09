import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';

function InterventionsList() {

    const interventions = useSelector(state => state.data.interventions);

    const intList = interventions.map(int => {
        return (
            <tr key={int.id}>
                <td>{int.id}</td>
                <td>{int.tech}</td>
                <td>{int.client}</td>
                <td>{int.text}</td>
            </tr>
        )
    })

    return (
        <div className="App">
            <Header />
            <div className="int">
                <h2>Liste des interventions</h2>
                <div className="int-list">

                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Technicien</th>
                                <th>Client</th>
                                <th>Observations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {intList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default InterventionsList