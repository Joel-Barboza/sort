import { Bar } from './Bar';
import { sortingAlgs } from './helpers/sortingAlgs';
//import { random } from './random';


export const SortApp = () => {

    const { array, newArray, disableBtn, bubbleSort, mergeSort, test, numSwaps} = sortingAlgs();

    

    return (
        <div className="container">
            <h2>Swaps: { numSwaps }</h2>
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
                {/* <button onClick={ test } disabled={ disableBtn }>test</button> */}
            </div>
        </div>
    )
}



