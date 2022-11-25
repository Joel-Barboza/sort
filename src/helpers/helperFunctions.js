

export const helperFunctions = () => {

    const barsContainer = document.getElementById('barsContainer');
    const speed = 3;
    const numberOfBars = 300 ;
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

    return {
        speed,
        numberOfBars,
        colors, 
        resetColor,
        swap,
        wait,
        barsContainer,
    }
}