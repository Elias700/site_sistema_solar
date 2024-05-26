
import './App.css'
import Introducao from './components/Introducao/Introducao'
import Jupiter from './components/Jupiter/Jupiter'
import Mercurio from './components/Mercurio/Mercurio'
import Terra from './components/Terra/Terra'
import Venus from './components/Venus/Venus'

function App() {
  

  return (

    <>

      <Introducao />

      <Mercurio mercurioFoto={'https://img.freepik.com/fotos-gratis/planetas-do-sistema-solar_23-2150042467.jpg?t=st=1716656191~exp=1716659791~hmac=5ad1455cdf2fce6a435f6b3538678fd25e655ccb6096875c6baa22db1da5f8c8&w=826'}/>

      <Venus venusFoto={'https://img.freepik.com/fotos-gratis/planetas-do-sistema-solar_23-2150042465.jpg?t=st=1716657123~exp=1716660723~hmac=8d986431ca62e1eea2754587f0b5cc380bcc1fbf5405deb9237a600ae3b68583&w=826'}/>

      <Terra terraFoto={'https://img.freepik.com/fotos-gratis/planeta-terra-fotorrealista_23-2151075922.jpg?t=st=1716665176~exp=1716668776~hmac=6f69371effb574eb80769f56048d9392cd2a6885e74b47cc39c64256c1057915&w=1380'}/> 
   
      <Jupiter jupiterFoto={'https://img.freepik.com/fotos-gratis/renderizacao-3d-da-terra-escura-no-espaco_23-2151051308.jpg?t=st=1716666862~exp=1716670462~hmac=b60fa121185a06239b94ecf895c6cc9b7c3ac0f0722e16f6b64f2802fadfd404&w=826'}/>

    </>
  )
}

export default App
