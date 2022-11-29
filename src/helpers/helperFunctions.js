import { useState } from "react";


export const helperFunctions = () => {

    const width = innerWidth;

    const barsContainer = document.getElementById('barsContainer');
    const [numSwaps, setNumSwaps] = useState(0)
    const speed = 1;
    const numberOfBars = width / 14 ;
    const colors = {
        purple: 'rgb(233, 96, 233)',
        green: 'rgb(94, 219, 121)',
        blue: 'rgb(112, 146, 214)',
        pink: 'pink',
        red: 'red'
    }

    const resetColor = (array, colors) => {
        array.map( ( v, index ) => {
            barsContainer.childNodes[ index ].style.background = colors.blue;
        });
    }

    const resetSwapsNum = () => {
        setNumSwaps(0)
    }

    const swap = (array,i,j) => {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        setNumSwaps((previousNum) => {
                return previousNum + 1;
            }
        )
        
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
        speed,
        numberOfBars,
        colors, 
        resetColor,
        swap,
        numSwaps,
        wait,
        barsContainer,
        resetSwapsNum,
        sortedAnimation,
    }
}