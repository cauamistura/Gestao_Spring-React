import icon from '../../assets/img/logo.svg'; 

import './styles.css'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src= {icon} alt="Logo-Gestao"/>
                    <h1>Gestão de Vendedores</h1>
                    <p>Desenvolvido por
                        <a href="https://www.instagram.com/caua_mistura/"> @caua_mistura</a>
                    </p>
            </div>
        </header>
    )
  }
  
export default Header;
  