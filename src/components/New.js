import React, { useState } from 'react';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addInt } from '../slices';


function New() {
    const dispatch = useDispatch()

    const [tech, setTech] = useState("");
    const [client, setClient] = useState("");
    const [text, setText] = useState("");


    function handleSubmit(tech, client, text) {
        const newInt = {
            id: new Date().toLocaleString(),
            tech,
            client,
            text,
        }
        dispatch(addInt(newInt));

        setTech("");
        setClient("");
        setText("");
    }


    return (
        <div className="App">
            <Header />
            <div className="New">
                <form onSubmit={() => handleSubmit(tech, client, text)}>
                    <h2>Bon d'intervention</h2>
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
                    <button type='submit'>Valider</button>
                </form>
            </div>
        </div>
    );
}

export default New