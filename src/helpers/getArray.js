import { useState, useEffect } from 'react';


export const getArray = () => {
    
    const [disableBtn, setDisableBtn] = useState(false);
    const [arr, setArr] = useState({array: []});

    const { array } = arr;
    const arrayLength = array.length;
    const speed = 0;
    const numberOfBars = 50 ;
    const colors = {
        purple: 'rgb(233, 96, 233)',
        green: 'rgb(94, 219, 121)',
        blue: 'rgb(112, 146, 214)',
    }
    
    const newArray = () => {

        const array = [];
        let max = 110;
        let min = 4;

        for (let i = 0; i < numberOfBars; i++) {
            array.push(Math.floor(Math.random() * ( max - min ) + min ));
        }
    
        setArr({array});
        console.log(array)

    }

    useEffect(() => {
        newArray();
        
    }, []);
    
    function wait(milisec) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, milisec);
        })
    }


    
    const swap = (array,i,j) => {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    const nextGap = (gap) => {

        if ( gap <= 1 ) return 0;
        return Math.floor(Math.ceil( gap / 2.0 ));
        
    }
    
    
    


    const merge = async(array, start, end) => {

        let gap = end - start + 1;

        //console.log('gap', gap)
        for ( gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
           
            for ( let i = start; i + gap <= end; i++ ) {
                let j = i + gap;
                barsContainer.children[ j ].style.background = colors.blue;
                barsContainer.children[ i ].style.background = colors.blue;
                await wait(speed * gap)
                

                if ( array[i] > array[j] ) {
                    
                    barsContainer.children[ i ].style.background = colors.purple;
                    barsContainer.children[ j ].style.background = colors.purple;
                    swap(array, i, j);
                    setArr({array});

                }
                
                
            }
            
        }
        
    }

    const mergeSort = async(ar, s, e) => {

        if ( s === e ) return;
        

        let mid = Math.floor((s + e) / 2);
        console.log('1-start', array)
        //await wait(speed)
        mergeSort(ar, s, mid);
        //await wait(speed * 3)
        console.log('2-first', array)
        mergeSort(ar, mid + 1, e);
        
        //await wait(speed * 3)
        console.log('3-second', array)
        merge(ar, s, e)
        
        
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
                    swap(array, j, j + 1)
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

    

    return {
        array,
        newArray,
        disableBtn,
        bubbleSort,
        mergeSort,
        merge
    }
}
