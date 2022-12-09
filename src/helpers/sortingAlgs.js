import { useState, useEffect } from 'react';
import { helperFunctions } from './helperFunctions';


export const sortingAlgs = () => {
    
    const [disableBtn, setDisableBtn] = useState(false);
    const [isSorted, setIsSorted] = useState(false)
    const [arr, setArr] = useState({array: []});
    const { barsContainer, colors, numberOfBars, resetColor, swap, comps, numComps, resetCompsNum, wait, sortedAnimation } = helperFunctions();

    
    const speed = 10;
    const { array } = arr;
    const arrayLength = array.length;


    const newArray = async() => {
        setDisableBtn(true);
        resetColor(array, colors);
        resetCompsNum();
        const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
        ];
        tempArray.length= numberOfBars 
        //console.log(numberOfBars, tempArray.length)
        let max = 500;
        let min = 4;
        
        setArr({ array: tempArray });
        await wait(300)
        for (let i = tempArray.length - 1; i > 0; i--) {
            await wait(8);
            let j = Math.floor(Math.random() * (i + 1));
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
            setArr({ array: tempArray });
        }
        
        setDisableBtn(false)
        setIsSorted(false);

    }

    useEffect(() => {
        newArray();
        
    }, []);

    const nextGap = (gap) => {

        if ( gap <= 1 ) return 0;
        return Math.floor(Math.ceil( gap / 2.0 ));
        
    }
    

    const insertionSort = async() => {

        if ( isSorted ) {
            const generateNewArray = confirm('Array is already sorted \nDo you want to generate a new array?')
            generateNewArray && newArray()
            return;
        }

        for (let i = 1; i < array.length; i++) {
            
            i !== array.length 
            && ( barsContainer.children[ i ].style.background = colors.purple );
            
            !!barsContainer.children[ i - 1] === !undefined 
            && ( barsContainer.children[ i - 1].style.background = colors.green );
            
            setDisableBtn( true );
            const currentValue = array[i];
            let j = i - 1;
            await wait(0);
            
            while (j >= 0 && array[j] > currentValue) {
                
                comps();
                await wait(speed);
                array[ j + 1 ] = array[j];
                
                j >= 0       && ( barsContainer.children[ j ].style.background = colors.purple );
                j + 1 != i  && ( barsContainer.children[ j + 1].style.background = colors.green );
                
                j--;
            }

            i === array.length - 1
            && ( barsContainer.children[ i ].style.background = colors.green )
            
            barsContainer.children[ j + 1].style.background = colors.green;
            array[ j + 1 ] = currentValue;
            setArr({array});
        }

        setDisableBtn( false );
        setIsSorted(true);
        sortedAnimation(array);
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
                    //barsContainer.children[ 1 ].style.background = colors.blue;
                    //console.log(true)
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


        if ( isSorted ) {
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
            //await wait(( -speed * i + arrayLength ) );
            
            // ---- iterates for every array item ----
            for (let j = 0; j < iteration; j++) {
                await wait(speed);
                if (!!barsContainer.children[ iteration ] === !undefined ) {
                    barsContainer.children[ j ].style.background = colors.purple;
                    barsContainer.children[ j + 1 ].style.background = colors.purple;
                }
                
                comps();
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
        insertionSort,
        merge,
        resetColor,
        numComps
    }
}
