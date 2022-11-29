import { useState, useEffect } from 'react';
import { helperFunctions } from './helperFunctions';


export const sortingAlgs = () => {
    
    const [disableBtn, setDisableBtn] = useState(false);
    const [isSorted, setIsSorted] = useState(false)
    const [arr, setArr] = useState({array: []});
    const { barsContainer, colors, numberOfBars, resetColor, swap, numSwaps, resetSwapsNum, wait, sortedAnimation } = helperFunctions();

    
    const speed = 1;
    const { array } = arr;
    const arrayLength = array.length;


    const newArray = () => {
        resetColor(array, colors);
        resetSwapsNum();
        const tempArray = [];
        let max = 500;
        let min = 4;
        
        for (let i = 0; i < numberOfBars; i++) {
            tempArray.push(Math.floor(Math.random() * ( max - min ) + min ));
        }
        
        setArr({ array: tempArray });
        setIsSorted(false);

    }

    useEffect(() => {
        newArray();
        
    }, []);

    const nextGap = (gap) => {

        if ( gap <= 1 ) return 0;
        return Math.floor(Math.ceil( gap / 2.0 ));
        
    }
    
    

    const merge = async(array, start, end) => {

        let gap = end - start + 1;
        
        //setTimeout(async() => {
        for ( gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {

            await wait(speed * (arrayLength / 2) * gap);
                for ( let i = start; i + gap <= end; i++ ) {
                    
                    //barsContainer.children[ 1 ].style.background = colors.purple;
                    await wait(speed);
                    let j = i + gap;
                    // barsContainer.children[ j].style.background = colors.blue;
                    //barsContainer.children[ 1 ].style.background = colors.blue;
                    //console.log(true)
                    
                    if ( array[i] > array[j] ) {
                        
                        // barsContainer.children[ j ].style.background = colors.purple;
                        swap(array, i, j);
                        setArr({array});
                        
                    }
                    
                    
                }
                
                
            }
        //}, speed * (arrayLength / 2) * gap);
        
    }

    const mergeSort = async(ar, s, e) => {

        if ( isSorted === true ) {
            const generateNewArray = confirm('Array is already sorted \nDo you want to generate a new array?')
            generateNewArray && newArray()
            return;
        }

        if ( s === e ) return;
        
        //console.log('1-ss', ar, ar[s], ar[e])

        let mid = Math.floor((s + e) / 2);
        //await wait(speed)
        mergeSort(ar, s, mid);
        //console.log('2-ss', ar, ar[s], ar[mid])
        //await wait(speed)
        //console.log('1-tt', ar, ar[mid + 1], ar[e])
        mergeSort(ar, mid + 1, e);
        //console.log('2-tt', ar, ar[mid + 1], ar[e])
        
        //await wait(speed)
        merge(ar, s, e)
        //console.log('3-second', ar, s, e)
        
        setIsSorted(true);
        
    }






    // ----------- Javascript function to sort -----------------
    // array.sort( ( a, b ) => parseInt(a) - parseInt(b) )
    // setArr( [...array] )

    const bubbleSort = async() => {
        // let maxLength = array.length
        // if ( array.length > 70 ) {
        //     array.length = 70
        //     maxLength = 70
        // }


        if ( isSorted === true ) {
            const generateNewArray = confirm('Array is already sorted \nDo you want to generate a new array?')
            generateNewArray && newArray()
            return;
        }
    
        // ---- iterates when all the elements of the array have been checked
        // each lap should be a new fully sorted element ----
        for (let i = 0; i < arrayLength; i++) {
            
            setDisableBtn( true );
            const iteration = arrayLength - i - 1;

            if (!!barsContainer.children[ iteration + 1] === !undefined ) {
                barsContainer.children[ iteration + 1].style.background = colors.green;
                barsContainer.children[ iteration ].style.background = colors.blue;
            }
            await wait(( -speed * i + arrayLength ) );
            
            // ---- iterates for every array item ----
            for (let j = 0; j < iteration; j++) {
                await wait(speed);
                if (!!barsContainer.children[ iteration ] === !undefined ) {
                    barsContainer.children[ j ].style.background = colors.purple;
                    barsContainer.children[ j + 1 ].style.background = colors.purple;
                }

                if ( array[ j ] > array[ j + 1]){
                    swap(array, j, j + 1)
                } 
                
                setArr({array});
                
                if (!!barsContainer.children[ j - 1 ] === !undefined ) {
                    barsContainer.children[ j - 1].style.background = colors.blue;
                }
            }
            
            setDisableBtn( false );
            setIsSorted(true);

        }
    
        sortedAnimation(array);
        
    }

    

    return {
        array,
        newArray,
        disableBtn,
        bubbleSort,
        mergeSort,
        merge,
        resetColor,
        numSwaps
    }
}
