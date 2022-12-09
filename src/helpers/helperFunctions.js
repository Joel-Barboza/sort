import { useState } from 'react';

export const helperFunctions = () => {

    const barForWidth = Math.floor(innerWidth / 10);

    const barsContainer = document.getElementById('barsContainer');
    const [numComps, setNumComps] = useState(0)
    let numberOfBars = 100;
    barForWidth < 100 && ( numberOfBars = barForWidth );
    
    const colors = {
        purple: 'rgb(233, 96, 233)',
        green: 'rgb(94, 219, 121)',
        blue: 'rgb(112, 146, 214)',
        pink: 'pink',
        red: 'red',
        black: 'black',
    }

    const resetColor = (array, colors) => {
        array.map( ( v, index ) => {
            barsContainer.childNodes[ index ].style.background = colors.blue;
        });
    }

    const comps = () => {
        setNumComps((previousNum) => {
                return previousNum + 1;
            }
        )
    }

    const resetCompsNum = () => {
        setNumComps(0)
    }

    const swap = (array,i,j) => {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
    }

    const wait = (milisec) => {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, milisec);
        })
    }

    const sortedAnimation = (array) => {
        array.map( ( v, index ) => {

            setTimeout(() => {
                if ( index === 0 ) {
                    barsContainer.childNodes[ index ].style.background = colors.red;

                } else {
                    
                    barsContainer.childNodes[ index - 1].style.background = colors.pink;
                    barsContainer.childNodes[ index ].style.background = colors.red;
                }
                if ( index === array.length - 1) {

                    barsContainer.childNodes[ index ].style.background = colors.pink;
                }
            }, 15 * (index + 5));

        });
    }

    return {
        numberOfBars,       // number
        colors,             // object
        resetColor,         // function
        swap,               // function
        sortedAnimation,    // function
        comps,              // function
        resetCompsNum,      // function
        numComps,           // state number
        wait,               // timeout promise
        barsContainer,      // DOM element
    }
}