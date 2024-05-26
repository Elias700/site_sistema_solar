

import React from 'react'
import './Urano.css'

const Urano = ({uranoFoto}) => {

  return (

    <div>

        <aside>

            <div className="background7">

                <div>

                    <h2 id='title7'>Urano</h2>

                    <p id="text7">Urano é um planeta de pouca luminosidade e encontra-se a cerca de 2.880.990.000 km do Sol. Apresenta massa menor que Júpiter, porém apresenta um núcleo mais denso, o que possibilita dizer que talvez possua um núcleo rochoso.

                    Urano foi descoberto em 1781. O planeta possui anéis, os quais foram descobertos em 1977 e são bastante opacos à luz. Além disso, apresenta cerca de 27 satélites naturais e cerca de 27 luas. Sua atmosfera é composta por hidrogênio, hélio e metano, sendo esse último o responsável pela sua cor azulada. A temperatura no planeta é de aproximadamente -218ºC.
                    </p>

                </div>

                    <img id='imagemUrano' src={uranoFoto} alt="" />

            </div>

        </aside>

    </div>

  )
}


export default Urano
