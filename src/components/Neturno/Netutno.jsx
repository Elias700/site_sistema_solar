

import React from 'react'
import './Neturno.css'

function Netutno({neturnoFoto}) {

  return (

    <div>

        <aside>

            <div className="backgound8">

                    <img id='fotoNeturno' src={neturnoFoto} alt="" />

                    <div>

                        <h2 id="title8">Neturno</h2>

                        <p id="text8">Netuno é o planeta mais recentemente descoberto. <br /> Sua presença foi notada no ano de 1845. Encontra-se a aproximadamente 4.504.300.000 km do Sol. O planeta possui características semelhantes às de Urano em termos de massa e composição atmosférica. Sua atmosfera é composta por hidrogênio, hélio e metano, e possui temperatura média de -218ºC. Acredita-se que seu interior seja semelhante também ao de Urano.

                        Netuno possui um sistema de anéis. Além disso, apresenta treze satélites, sendo o seu maior conhecido como Tritão.
                    </p>

                    </div>

            </div>

        </aside>
      
    </div>

  )
}

export default Netutno
