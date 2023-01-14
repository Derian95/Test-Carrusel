import { useEffect, useState } from 'react'
import img from '../assets/naruto01.jpg'
import img2 from '../assets/naruto02.jpg'
import img3 from '../assets/naruto03.jpg'

export const Carrusel5 = () => {
    const images = [img, img2, img3]
    const [indexA, setIndexA] = useState(0)

    useEffect(() => {
        if (true) {
          const interval = setInterval(() => {

            if(indexA ==images.length-1){
                setIndexA(prev=>prev=0)
            }else{
            setIndexA(prev=>prev+1)
            }
        }, 2000);
          return () => clearInterval(interval);
        }
      })
      

    return (
    <div style={{overflow:'hidden',height:200}}>
        {
            images.map((image,index)=>(
                <div key={image}>
                    {
                        index==indexA?
                        <img src={images[index]} alt="" width={500} height={200} className='Slect'/>:
                        <img src={images[index]} alt="" width={500} height={200} className='noSlect'/>
                    }
                   
                </div>
            ))
        }
    </div>
  )
}
