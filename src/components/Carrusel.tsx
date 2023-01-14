import { useEffect, useState } from "react"

import img from '../assets/naruto01.jpg'
import img2 from '../assets/naruto02.jpg'
import img3 from '../assets/naruto03.jpg'

export const Carrusel = () => {

    const images = [img, img2, img3]
    const [selectedindex, setSelectedIndex] = useState(0)
    const [selectImage, setselectImage] = useState(images[0])
    const [load, setLoad] = useState(false)
    const [change, setChange] = useState(false)


    const selectImg = (index: number) => {
        setChange(true)
        setSelectedIndex(prev => prev = index)
        setselectImage(images[selectedindex])

    }

    const setime = () => {


        setTimeout(() => {


            // selectedindex==images.length-1?
            // setSelectedIndex(prev=>prev=0)
            // :setSelectedIndex(prev=>prev+1)


        }, 5000)
    }



    useEffect(() => {

        // setime()
        setInterval(() => {

            selectedindex == images.length - 1 ?
                setSelectedIndex(prev => prev = 0)
                : setSelectedIndex(prev => prev + 1)

        }, 4000)


    }, [change])


    useEffect(() => {
    setTimeout(() => {
        
    }, 3000);
    
    }, [])
    

    return (
        <div>
        <div style={{ height: 200, overflow: 'hidden' }}>


            {/* <img src={images[selectedindex]} alt="dd" width={'100%'} height={300}   className={load ? "loaded" : "nolo"}/>
            <div>

                <button onClick={() => selectImg(0)}>1</button>
                <button onClick={() => selectImg(1)}>2</button>
                <button onClick={() => selectImg(2)}>3</button>
            </div> */}
            {
                images.map((im, index) => (
                    <div >
                        <img src={im} alt="" height={300} width={500} />
                    </div>
                ))
            }
       
        </div>
                 {
                images.map((im, index) => (
                    <div key={im}>
                        <button>sss</button>

                    </div>
                ))
            }
    </div>)
}
