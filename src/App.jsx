
import './App.css'
import Introducao from './components/Introducao/Introducao'
import Jupiter from './components/Jupiter/Jupiter'
import Mercurio from './components/Mercurio/Mercurio'
import Netutno from './components/Neturno/Netutno'
import Saturno from './components/Saturno/Saturno'
import Terra from './components/Terra/Terra'
import Urano from './components/Urano/Urano'
import Venus from './components/Venus/Venus'

function App() {
  

  return (

    <>

      <Introducao />

      <Mercurio mercurioFoto={'https://img.freepik.com/fotos-gratis/planetas-do-sistema-solar_23-2150042467.jpg?t=st=1716656191~exp=1716659791~hmac=5ad1455cdf2fce6a435f6b3538678fd25e655ccb6096875c6baa22db1da5f8c8&w=826'}/>

      <Venus venusFoto={'https://img.freepik.com/fotos-gratis/planetas-do-sistema-solar_23-2150042465.jpg?t=st=1716657123~exp=1716660723~hmac=8d986431ca62e1eea2754587f0b5cc380bcc1fbf5405deb9237a600ae3b68583&w=826'}/>

      <Terra terraFoto={'https://img.freepik.com/fotos-gratis/planeta-terra-fotorrealista_23-2151075922.jpg?t=st=1716665176~exp=1716668776~hmac=6f69371effb574eb80769f56048d9392cd2a6885e74b47cc39c64256c1057915&w=1380'}/> 
   
      <Jupiter jupiterFoto={'https://img.freepik.com/fotos-gratis/renderizacao-3d-da-terra-escura-no-espaco_23-2151051308.jpg?t=st=1716666862~exp=1716670462~hmac=b60fa121185a06239b94ecf895c6cc9b7c3ac0f0722e16f6b64f2802fadfd404&w=826'}/>

      <Saturno saturnoFoto={'https://img.freepik.com/fotos-gratis/belos-planetas-no-espaco_23-2149288537.jpg?t=st=1716714600~exp=1716718200~hmac=a3cd071eab481ee1762943405626ccd0b77d032ccaa9e2802ead78cfe7ac10b0&w=1380'}/>

      <Urano uranoFoto={'https://img.freepik.com/fotos-gratis/colagem-do-planeta-do-sistema-solar_23-2150188974.jpg?t=st=1716715690~exp=1716719290~hmac=8660316f8ade940c9b813f5e232883c0f9a5ed902c0a137d8427144fc47243ca&w=1380'}/>

      <Netutno neturnoFoto={'https://img.freepik.com/fotos-gratis/galaxy-noite-panoramica_23-2148895359.jpg?t=st=1716716460~exp=1716720060~hmac=700b8dc5da867505caf59dd8ba018f06e20619f5a6e43268d61860334ff3f62b&w=996'}/>

    </>
  )
}

export default App
