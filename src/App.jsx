
import './App.css'
import Introducao from './components/Introducao/Introducao'
import Mercurio from './components/Mercurio/Mercurio'
import Venus from './components/Venus/Venus'

function App() {
  

  return (

    <>

      <Introducao />

      <Mercurio mercurioFoto={'https://img.freepik.com/fotos-gratis/planetas-do-sistema-solar_23-2150042467.jpg?t=st=1716656191~exp=1716659791~hmac=5ad1455cdf2fce6a435f6b3538678fd25e655ccb6096875c6baa22db1da5f8c8&w=826'}/>

      <Venus venusFoto={'https://img.freepik.com/fotos-gratis/planetas-do-sistema-solar_23-2150042465.jpg?t=st=1716657123~exp=1716660723~hmac=8d986431ca62e1eea2754587f0b5cc380bcc1fbf5405deb9237a600ae3b68583&w=826'}/>

   
    </>
  )
}

export default App
