
import { FC, useEffect, useState } from 'react';
import img  from '../assets/naruto01.jpg'


interface Props{
    images:string[]
    autoPLay?:boolean
    
}
export const Carrusel4:FC<Props> = ({images, autoPLay}) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);
 

    useEffect(() => {
        if (autoPLay) {
          const interval = setInterval(() => {
            selectNewImage(selectedIndex,images);
          }, 2000);
          return () => clearInterval(interval);
        }
      })
      
      const selectNewImage = (index: number, images: string[],select?:boolean, next = true) => {
        setLoaded(false);

        setTimeout(() => {
         const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
          const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
            if(select){
                setSelectedImage(images[index]);
                setSelectedIndex(index);  
            }
            else{
          setSelectedImage(images[nextIndex]);
          setSelectedIndex(nextIndex);
            }
        }, 2000);
      };

      const selectImg=(index:number) => {
        selectNewImage(index,images,true)
      }
    return (
    <div style={{overflow:'hidden'}}>   

        <img src={selectedImage}  className={loaded ? "loaded" : "nolo"} alt=""  style={{width:'100%',height:500}} onLoad={() => setLoaded(true)}/>
        <button onClick={()=>selectImg(0)}>1      .</button>
        <button onClick={()=>selectImg(1)}>2     .</button>
        <button onClick={()=>selectImg(2)}>3     .</button>
    </div>
  )
}
