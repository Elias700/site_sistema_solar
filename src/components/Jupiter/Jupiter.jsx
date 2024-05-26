


import React from 'react'
import './Jupiter.css'

const Jupiter = ({jupiterFoto}) => {

  return (


    <div>
      
      <aside className='background5'>

        <div className='parteDoTexto2'>

            <div id="display">

                   <h2 id='title5'>Jupiter</h2>

                    <p id='text5' >A Terra é o planeta que mais se difere dos demais, visto suas condições e características que permitem a existência de vida. O planeta encontra-se a uma distância favorável do Sol, cerca de 149.600.000 km. Seu dinamismo proporcionado pela radiação solar, forças da maré e o calor proveniente do seu núcleo o tornam um planeta único no Sistema Solar.

                    Sua temperatura média é de 14ºC, e apenas 60% da energia solar é absorvida. A atmosfera terrestre é atualmente composta por gases como nitrôgenio, oxigênio, gás carbônico e vapor d'água. Sua estrutura interna é composta por núcleo, manto e crosta terrestre. Possui um satélite natural, a Lua, com rotação sincronizada à da Terra.</p>

            </div>


            <img id='imagemJupiter' src={jupiterFoto} alt="" />

        </div>

      </aside>

    </div>

  )
}


export default Jupiter
