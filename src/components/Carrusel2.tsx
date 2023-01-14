import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img from '../assets/naruto01.jpg'
import img2 from '../assets/naruto02.jpg'
import img3 from '../assets/naruto03.jpg'

export const Carrusel2 = () => {
    const indicatorStyles = {
        background: 'red',
        width: 8,
        height: 8,
        display: 'inline-block',
        margin: '0 8px',
        position:'absolute',
        right:0,
        bottom:450
    };
  return (
    <Carousel
    autoPlay
    infiniteLoop
    showArrows={false}
    showThumbs={false}
    showStatus={false}
    width={'100vw'}
    renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
            return (
                <li
                    style={{ ...indicatorStyles, background: '#000' }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                />
            );
        }
        return (
            <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
            />
        );
    }}
    >
                <div>
                    <img src={img} />
                    <p className="legend">Legeasdnd 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}
