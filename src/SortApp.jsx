import { useEffect, useState } from 'react';
import { Bar } from './Bar';
import { getArray } from './helpers/getArray';
//import { random } from './random';


export const SortApp = () => {

    const { array, newArray, disableBtn, bubbleSort, mergeSort} = getArray();

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
            <button onClick={ newArray } disabled={ disableBtn }>New Array</button>
            <button onClick={ bubbleSort } disabled={ disableBtn }>Bubble Sort</button> 
            <button onClick={ mergeSort } disabled={ disableBtn }>Merge Sort</button>
        </>
    )
}



