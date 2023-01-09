import { useNavigate } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header'

function App(){
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header/>
      <div className="menu-App">
        <button onClick={() => navigate("/nouveau-bon")}>Nouveau bon d'intervention</button>
        <button onClick={() => navigate("/liste-interventions")}>Liste des interventions</button>
      </div>
    </div>
  );
}

export default App;
