


import React from 'react'
import './Mercurio.css'

const Mercurio = ({mercurioFoto}) => {



  return (

    <div>
      
        <aside className='background'>

            <div className='parteDoTexto'>

                <h2 id='title1'>Mercúrio</h2>

                <p id='text2'>Mercúrio é o planeta mais próximo do Sol. Esse planeta é capaz de refletir <br /> cerca de 12% da luz solar, sendo um dos astros mais brilhantes vistos da <br /> Terra. Encontra-se a cerca de 57.910.000 km do Sol.

                Sua superfície é <br /> repleta de crateras, enquanto seu núcleo é rico em ferro, e a espécie de <br /> atmosfera existente no planeta é composta, em sua maioria, por hélio <br /> (98%) e hidrogênio (2%). A temperatura do planeta durante o dia atinge <br /> 430ºC.

                </p>

            </div>


            <div className='parteDaImagem'>

                <img id='imagemMercurio' src={mercurioFoto} alt="" />

            </div>
        
        </aside>

    </div>

  )
}


export default Mercurio
