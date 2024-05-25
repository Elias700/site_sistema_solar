

import React from 'react'
import './style.css'


const Introducao = () => {



  return (

<div>
      
      <header>

            <nav className='navegacao'>

                    <ul>

                        <div className="estiloLogo">
                            <li id='logo'>Aprenda <span id='logo2'> Mais</span> </li>
                        </div>
                        
                        <li>Mercúrio</li>
                        <li>Vênus</li>
                        <li>Terra</li>
                        <li>Marte</li>
                        <li>Júpiter</li>
                        <li>Saturno</li>
                        <li>Urano</li>
                        <li>Neturno</li>
                        
                    </ul>

            </nav>

      </header>


        <div>

            <h1>Sistema Solar</h1>

            <p id='text1'>"O Sistema Solar é um conjunto formado por oito planetas e outros corpos celestes, que orbitam o Sol, <br /> a sua principal estrela. Está localizado na Via Láctea, uma das galáxias que formam o Universo. <br /> São planetas do Sistema Solar: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno."
            </p>


                <div className="botao">

                    <button id='botaoDocumentario'>Documentário</button>

                    <button id='botaoArtigo'>Artigo</button>

                </div>

        </div>

      



</div>

  )
}


export default Introducao

