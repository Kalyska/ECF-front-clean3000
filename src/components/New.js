import React, { useState } from 'react';
import Header from './Header';

function New(){
    const [tech, setTech] = useState("");
    const [client, setClient] = useState("");
    const [text, setText] = useState("");
    const [interventions, setInterventions] = useState([]);

    const addInt = () => {
        const newInt = {
            id: new Date(),
            tech,
            client,
            text,
        };

        setInterventions([...interventions, newInt]);
        setTech("");
        setClient("");
        setText("");
    }


    return (
        <div className="App">
            <Header />
            <div className="New">
                <form>
                    <input
                        type="text"
                        className="new-input"
                        placeholder='nom du technicien'
                        onChange={(e) => setTech(e.target.value)}
                        value={tech}
                        required
                    />
                    <input
                        type="text"
                        className="new-input"
                        placeholder='nom du client'
                        onChange={(e) => setClient(e.target.value)}
                        value={client}
                        required
                    />
                    <textarea
                        className="new-input"
                        placeholder='observations (facultatif)'
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                    <button onClick={() => addInt()}>Valider</button>
                </form>
            </div>
        </div>
    );
}

export default New