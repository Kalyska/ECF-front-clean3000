import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ()=> {
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate("/");
    }
    
    const goToList = () => {
        navigate("/liste-interventions");
    }

    const goToNew= () => {
        navigate("/nouveau-bon");
    }
    
    return (
        <header className="App-header">
            <img src="img/logo-clean3000-transparent.png" alt="logo de Clean 3000" onClick={()=>goToHome()}/>
            <ul>
                <li onClick={()=>goToNew()}>Nouveau bon</li>
                <li onClick={()=>goToList()}>Liste des interventions</li>
            </ul>
        </header>
    )
}

export default Header;