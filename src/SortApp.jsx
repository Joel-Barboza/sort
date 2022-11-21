import { useEffect, useState } from 'react';
import { Bar } from './Bar';
import { getArray } from './helpers/getArray';
//import { random } from './random';


export const SortApp = () => {

    const { array, newArray, disableBtn, bubbleSort, mergeSort, merge, test} = getArray();

    return (
        <div className="container">
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
            <div className="btn-container">
                <button onClick={ newArray } disabled={ disableBtn }>New Array</button>
                <button onClick={ bubbleSort } disabled={ disableBtn }>Bubble Sort</button> 
                <button onClick={ () => mergeSort(array, 0, array.length - 1) } disabled={ disableBtn }>Merge Sort</button>
                <button onClick={ test } disabled={ disableBtn }>test</button>
            </div>
        </div>
    )
}



