import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Carrusel } from './components/Carrusel'
import { Carrusel2 } from './components/Carrusel2'
import { Carrusel3 } from './components/Carrusel3'
import { Carrusel4 } from './components/Carrusel4'
import img from './assets/naruto01.jpg'
import img2 from './assets/naruto02.jpg'
import img3 from './assets/naruto03.jpg'
import { Carrusel5 } from './components/Carrusel5'

function App() {
  const [count, setCount] = useState(0)
  const images = [img, img2, img3]

  return (
    <div className="App">
    {/* <Carrusel4 images={images} autoPLay/> */}
    <Carrusel3/>
    </div>
  )
}

export default App
