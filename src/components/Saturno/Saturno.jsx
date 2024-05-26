

import React from 'react'
import './Saturno.css'

const Saturno = ({saturnoFoto}) => {

  return (


    <div>

        <aside>

            <div className="background6">

                <img id='imagemSturno' src={saturnoFoto} alt="" />

                <div>
                    <h2 id='title6'>Saturno</h2>

                    <p id='text6'>Saturno é o segundo maior planeta do Sistema Solar, estando a aproximadamente 1.429.400.000 km do Sol. O planeta gasoso é <br /> conhecido por seus anéis e acredita-se que esses são compostos <br /> por gelo, devido ao seu intenso brilho, podendo refletir até 80% da <br /> luz solar. O planeta possui um único grande satélite conhecido como <br /> Titã.

                    A atmosfera do planeta é constituída, principalmente, por hidrogênio <br /> e hélio. A densidade do planeta é bastante inferior à da Terra, por causa da sua composição. Há indícios de que o planeta possua um núcleo sólido, assim como Júpiter.</p>
               </div>

            </div>

        </aside>

    </div>

  )
}


export default Saturno
