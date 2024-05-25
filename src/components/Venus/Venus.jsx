

import React from 'react'
import './Venus.css'

const Venus = ({venusFoto}) => {



  return (

    <div>
      
        <aside className='background1'>

            <div className="parteDaImagem">

                <img id='imagemVenus' src={venusFoto} alt="" />

            </div>

            <div className="text3">

                <h2 id='title2'>Vênus</h2>

               <p id='text3'>Vênus é o segundo planeta em relação ao Sol, conhecido também como <br /> Estrela D'alva, por ser, muitas vezes, um dos astros mais brilhantes no céu <br /> no período da noite. Encontra-se a aproximadamente 108.200.000 km do Sol. Possui características semelhantes às da Terra como tamanho e massa, mas difere-se nas condições que propiciam a vida.

                Possui uma atmosfera 92 vezes mais densa que a atmosfera terrestre, estando o planeta quase sempre envolto por nuvens. Essa atmosfera é composta especialmente por CO2, o que contribui para que a temperatura do planeta chegue a 460ºC.
                </p>

            </div>

        </aside>

    </div>

  )
}


export default Venus
