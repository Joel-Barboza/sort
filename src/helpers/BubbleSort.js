import { getArray } from "./getArray";


export const bubbleSort = async() => {

    const { arrayLength, wait, speed, array, setArr } = getArray();

    // array.sort( ( a, b ) => parseInt(a) - parseInt(b) )
    // setArr( [...array] )

    console.log(arrayLength, wait, speed, array, setArr)
    // iterates when all the elements of the array have been checked
    // each lap should be a new fully sorted element
    for (let i = 0; i < arrayLength; i++) {
        
        //setDisableBtn( true );
        await wait(( -speed * i + arrayLength ) );
        const iteration = arrayLength - i;
        
        // iterates for every array item 
        for (let j = 0; j < iteration; j++) {
            
            await wait(speed);

            if ( array[ j ] > array[ j + 1]){

                let temp = array[ j ];
                array[ j ] = array[ j + 1 ];
                array[ j + 1] = temp;

            } 
            
            setArr( {array} );
            
            const barsContainer = document.getElementById('barsContainer');

            if (!!barsContainer.children[ iteration ] === !undefined ) {
                barsContainer.children[ iteration ].style.background = 'rgb(21, 114, 41)';
            }
        }
        
        
        //setDisableBtn( false );
    }

    // array?.map( ( v, index ) => {

    //     setTimeout(() => {
    //         barsContainer.childNodes[ index ].style.background = 'rgb(33, 51, 88)';
    //     }, 15 * (index + 1));

    // });

}