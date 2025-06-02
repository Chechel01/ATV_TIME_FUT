// front/src/components/Pagina_Inicial/index.js

import './styles.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logoBahia.jpg';

function Pagina_Inicial() {
    const navigate = useNavigate();

    const irParaCadastro = () => {
        navigate('/cadastro');
    };

    return (
        <div className="pagina-inicial-container">
            <div className="content-wrapper">
                <img src={logo} alt="Logo do time" className="logo" />
                <h1 className="title">Sport Club Bahia</h1>
                <div className="button-group">
                    <button className="btn primary" onClick={irParaCadastro}>Cadastrar jogador</button>
                    <button className="btn secondary" onClick={() => navigate('/usuarios')}>Listar jogadores</button>
                </div>
            </div>
        </div>
    );
}

export default Pagina_Inicial;
