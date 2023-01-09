import React from 'react';
import Header from './Header';

function InterventionsList() {


    // const intList = data.map(id => {
    //     return (
    //         <div className="int-detail" key={id}>
    //             {/* <span>{id}</span>
    //             <span>{tech}</span>
    //             <span>{client}</span>
    //             <span>{text}</span> */}
    //         </div>
    //     )
    // })

    return (
        <div className="App">
            <Header />
            <div className="Int-list">
            <h2>Liste des interventions</h2>
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
                        {/* {intList} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default InterventionsList