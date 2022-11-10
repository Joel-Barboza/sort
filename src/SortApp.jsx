import { useEffect, useState } from 'react';
import { Bar } from './Bar';
import { bubbleSort } from './helpers/BubbleSort';
import { getArray } from './helpers/getArray';
//import { random } from './random';


export const SortApp = () => {

    const [disableBtn, setDisableBtn] = useState(false);
    const { array, newArray } = getArray();
    //[ 56, 33 ,30, 23, 38, 20, 43, 47, 12, 19, 9, 5, 60, 35 ,32, 25, 50, 17, 8, 23
    //, 13, 55, 4, 53, 36 ,39, 26, 58, 27, 10, 20, 15, 52, 40,
    //60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40, 5, 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,
    //60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40, 5, 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,
    //60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40, 5, 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,
    //];
    
    
    
    
    //console.log(array)

    
       
    return (
        <>
            <div id="barsContainer" className="bar-container">
                {
                    array.map( (value, index) => (
                        <Bar
                            key={ index }
                            value={ value }
                        />
                        ))
                    }
            </div>
            <button onClick={ bubbleSort } disabled={ disableBtn }>Bubble Sort</button> 
            <button onClick={ newArray } disabled={ disableBtn }>New Array</button>
            {/* <input type="range" name="speed" id="speed" min="10" max="1500" /> */}
        </>
    )
}



