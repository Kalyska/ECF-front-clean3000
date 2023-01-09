import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="not-found">
            <h2 className='notFound'>Page non trouvée</h2>
            <button onClick={navigate("/")}>Retour à l'accueil</button>
        </div>
    )
}

export default NotFound;