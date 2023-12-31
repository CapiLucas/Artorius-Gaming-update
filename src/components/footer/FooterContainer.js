import React from 'react'
import { Link } from 'react-router-dom'

function FooterContainer() {
  return (
        <footer>
            <div className="container">
                <div className="mail">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:ventas@ArtoriusGaming.com.ar">ArtoriusGaming.com.ar</a>
                </div>

                <div className="info">
                <Link className='Nosotros' to="/Nosotros">Nosotros</Link>
                <p>Somos un comercio dedicado a ofrecer los mejores productos y servicios a nuestros clientes. Contamos con una amplia experiencia y un equipo profesional que garantiza la calidad y la satisfacción.</p>
                </div>

                <div className="credits">
                <p>© 2023 Todos los derechos reservados. ArtoriusGamingCompany.</p>
                <p>Encontranos en Av.Fake 123</p>
                </div>
            </div>
        </footer>
  )
}

export default FooterContainer