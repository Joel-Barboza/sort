import { useState, useEffect } from 'react';


export const getArray = () => {
    
    const [disableBtn, setDisableBtn] = useState(false)
    const [arr, setArr] = useState({array: []});

    const { array } = arr;
    const arrayLength = array.length;
    const speed = 10;
    const numberOfBars = 50;
    const colors = {
        purple: 'rgb(233, 96, 233)',
        green: 'rgb(94, 219, 121)',
        blue: 'rgb(112, 146, 214)',
    }
    
    const newArray = () => {

        const array = []
        let max = 60;
        let min = 3;

        for (let i = 0; i < numberOfBars; i++) {
            array.push(Math.floor(Math.random() * ( max - min ) + min ));
        }
    
        setArr({array});

    }

    useEffect(() => {
        newArray();
    }, []);
    
    function wait(milisec) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, milisec);
        })
    }

    const bubbleSort = async() => {
    
        // array.sort( ( a, b ) => parseInt(a) - parseInt(b) )
        // setArr( [...array] )
    
        // iterates when all the elements of the array have been checked
        // each lap should be a new fully sorted element
        for (let i = 0; i < arrayLength; i++) {
            
            setDisableBtn( true );
            const barsContainer = document.getElementById('barsContainer');
            const iteration = arrayLength - i - 1;
            if (!!barsContainer.children[ iteration + 1] === !undefined ) {
                barsContainer.children[ iteration + 1].style.background = colors.green;
                barsContainer.children[ iteration ].style.background = colors.blue;
            }
            await wait(( -speed * i + arrayLength ) );
            
            // iterates for every array item 
            for (let j = 0; j < iteration; j++) {
                await wait(speed);
                if (!!barsContainer.children[ iteration ] === !undefined ) {

                    barsContainer.children[ j ].style.background = colors.purple;
                    barsContainer.children[ j + 1 ].style.background = colors.purple;

                }

                if ( array[ j ] > array[ j + 1]){
    
                    let temp = array[ j ];
                    array[ j ] = array[ j + 1 ];
                    array[ j + 1] = temp;
    
                } 
                
                setArr({array});
                
    
                if (!!barsContainer.children[ j - 1 ] === !undefined ) {

                    barsContainer.children[ j - 1].style.background = colors.blue;

                }
                
            }
            
            setDisableBtn( false );

        }
    
        array.map( ( v, index ) => {

            setTimeout(() => {
                barsContainer.childNodes[ index ].style.background = colors.blue;
            }, 15 * (index + 5));

        });
        
    
    }

    const mergeSort = () => {
        console.log('Merge Sort')
    }

    return {
        array,
        newArray,
        disableBtn,
        bubbleSort,
        mergeSort
    }
}
