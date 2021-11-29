import React from 'react';
import '../../assets/css/Carousel.css';
import { useState } from 'react';

const Carousel = function({ children }){

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = function(newIndex){
        if (newIndex < 0){
            newIndex = 0;
        }
        else if (newIndex >= React.Children.Count(children)){
            newIndex = React.Children.Count(children) - 1
        }

        setActiveIndex(newIndex);
    };

    return(
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex*100})` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>

            <div>
                {React.Children.map(children, (child, index) => {
                    return(
                        <button 
                        onClick={() => {
                            updateIndex(index)
                        }}
                        >{index + 1}</button>
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;