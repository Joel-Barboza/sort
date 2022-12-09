import { useState, useEffect } from 'react';
import { helperArray } from './helperArray';
import { helperFunctions } from './helperFunctions';


export const sortingAlgs = () => {
    
    const [disableBtn, setDisableBtn] = useState(false);
    const [isSorted, setIsSorted] = useState(false)
    const [arr, setArr] = useState({array: []});
    const { helperArr } = helperArray();
    const { barsContainer, colors, numberOfBars, resetColor, swap, comps, numComps, resetCompsNum, wait, sortedAnimation } = helperFunctions();

    
    const speed = 1;
    const { array } = arr;
    const arrayLength = array.length;


    const newArray = async() => {
        setDisableBtn(true);

        // to reset bar color to blue if they are in pink
        resetColor(array, colors);
        resetCompsNum();

        let tempArray = helperArr;
        tempArray.length = numberOfBars;
        
        setArr({ array: tempArray });

        await wait(300)

        for (let i = tempArray.length - 1; i > 0; i--) {

            await wait(8);

            let j = Math.floor(Math.random() * (i + 1));

            // swaps elements of the array
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
            setArr({ array: tempArray });

        }
        
        setDisableBtn(false)
        setIsSorted(false);

    }

    useEffect(() => {
        newArray();
        
    }, []);


//-------------------------------------------------------------//
//-------------------------Insertion sort----------------------//
//-------------------------------------------------------------//


    const insertionSort = async() => {

        // shows a message when the array is already sorted
        if ( isSorted ) {
            const generateNewArray = confirm('Array is already sorted \nDo you want to generate a new array?')
            generateNewArray && newArray()
            return;
        }

        for (let i = 1; i < array.length; i++) {
            
            setDisableBtn( true );
            const currentValue = array[i];
            let j = i - 1;
            
            // compared element
            i !== array.length 
            && ( barsContainer.children[ i ].style.background = colors.purple );
            
            // fully sorted element
            !!barsContainer.children[ i - 1 ] === !undefined 
            && ( barsContainer.children[ i - 1 ].style.background = colors.green );
        
            await wait(0);
            
            while (j >= 0 && array[j] > currentValue) {
                
                await wait(speed);
                comps();

                // shifts values one place to the right
                array[ j + 1 ] = array[j];
                
                // compared element
                j >= 0
                && ( barsContainer.children[ j ].style.background = colors.purple );

                // resets sorted elements to green after comparison
                j + 1 != i
                && ( barsContainer.children[ j + 1 ].style.background = colors.green );
                
                j--;
            }

            // solves bug that kept the last element on purple
            i === array.length - 1
            && ( barsContainer.children[ i ].style.background = colors.green )
            
            // inserts currentValue in its position
            array[ j + 1 ] = currentValue;
            
            // change color of compared element when inserted
            barsContainer.children[ j + 1].style.background = colors.green;
            setArr({array});
        }

        setDisableBtn( false );
        setIsSorted(true);
        sortedAnimation(array);
    }


//-------------------------------------------------------------//
//-------------------------Merge sort--------------------------//
//-------------------------------------------------------------//


    const nextGap = (gap) => {

        if ( gap <= 1 ) return 0;
        return Math.floor(Math.ceil( gap / 2.0 ));
        
    }
    
    const merge = async(array, start, end) => {

        let gap = end - start + 1;
        
        //setTimeout(async() => {
        for ( gap = nextGap(gap); gap >= 1; gap = nextGap(gap)) {

            //console.log(1)
            await wait(speed * (arrayLength / 10) * gap);
                for ( let i = start; i + gap <= end; i++ ) {
                    
                    //barsContainer.children[ 1 ].style.background = colors.purple;
                    await wait(speed);
                    let j = i + gap;
                    // barsContainer.children[ j].style.background = colors.blue;
                    // barsContainer.children[ 1 ].style.background = colors.blue;
                    // console.log(true)
                    comps();
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

        //await wait(speed)

        let mid = Math.floor((s + e) / 2);

        mergeSort(ar, s, mid);
        mergeSort(ar, mid + 1, e);
        merge(ar, s, e)
        
        setIsSorted(true);
        
    }


//-------------------------------------------------------------//
//-------------------------Bubble sort-------------------------//
//-------------------------------------------------------------//


    const bubbleSort = async() => {
    
        // shows a message when the array is already sorted
        if ( isSorted ) {
            const generateNewArray = confirm('Array is already sorted \nDo you want to generate a new array?')
            generateNewArray && newArray()
            return;
        }
        
        // ---- iterates when all the elements of the array have been checked
        // each lap should be a new fully sorted element ----
        for (let i = 0; i < arrayLength; i++) {
            setDisableBtn( true );
                
            const iteration = arrayLength - 1 - i; // number of elements to iterated each time
            
            // change color of the fully sorted elements
            if (barsContainer.children[ iteration + 1] !== undefined ) {
                barsContainer.children[ iteration + 1].style.background = colors.green;
                barsContainer.children[ iteration ].style.background = colors.blue;
            }
            
            // ---- iterates for every array item ----
            for (let j = 0; j < iteration; j++) {

                await wait(speed);

                // change color of the compared elements
                if (barsContainer.children[ iteration ] !== undefined ) {
                    barsContainer.children[ j ].style.background = colors.purple;
                    barsContainer.children[ j + 1 ].style.background = colors.purple;
                }

                comps(); // uploads the comparisons counter

                // swaps elements when array[ j ] > array[ j + 1]
                array[ j ] > array[ j + 1] && swap(array, j, j + 1)
                
                setArr({array});
                
                // reset color of recentlyCompared to blue
                barsContainer.children[ j - 1 ] !== undefined
                && ( barsContainer.children[ j - 1 ].style.background = colors.blue );
                
            }
                
            setDisableBtn( false );
            setIsSorted(true);
                
        }
            
        sortedAnimation(array);
        
    }
    
    // ----------- Javascript function to sort -----------------
    // array.sort( ( a, b ) => parseInt(a) - parseInt(b) )
    // setArr( [...array] )
    
    
    return {
        array,          // arr.array
        bubbleSort,     // sorting alg function
        insertionSort,  // sorting alg function
        mergeSort,      // sorting alg function
        disableBtn,     // state boolean
        numComps,       // state counter
        newArray,       // function
        resetColor,     // function 
    }
}
