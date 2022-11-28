import { useState } from "react";


export const helperFunctions = () => {

    const barsContainer = document.getElementById('barsContainer');
    const [numSwaps, setNumSwaps] = useState(0)
    const speed = 1;
    const numberOfBars = 30 ;
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
    }
}