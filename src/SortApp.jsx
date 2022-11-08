import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { Bar } from './Bar';
import { random } from './random';


export const SortApp = () => {
    
    let taco = [ 56, 33 ,30, 23, 38, 20, 43, 47, 12, 19, 9, 5, 
        60, 35 ,32, 25, 50, 17, 8, 23, 13, 55, 4, 53, 36 ,39, 26, 58, 27, 10, 20, 15, 52, 40,
        //60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40, 5, 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,
        //60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40, 5, 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,
        //60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40, 5, 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,
    ]



//random();



    const [arr, setArr] = useState(taco)
    const [disabled, setDisabled] = useState(false)
    let arrayLength = taco.length;
    const speed = document.getElementById('speed')?.value;
    
    
    
    const getSpeed = () => { 
        for (let i = 0; i < taco.length; i++) {
            let stepSpd = speed * i;
            let lapSpd = stepSpd * i;
            
            
        }
    }
    
    function waitforme(milisec) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, milisec);
        })
    }
    
    const swap = async() => {
        for (let i = 0; i < arrayLength; i++) {
            setDisabled(true)
            
            await waitforme((-speed * i + arrayLength) )
            let iteration = arrayLength - i;
            for (let index = 0; index < iteration; index++) {
                //setTimeout(() => {
                    await waitforme(speed);
                    if ( taco[ index ] > taco[ index + 1]){
                        let temp = taco[ index ]
                        taco[ index ] = taco[ index + 1 ]
                        taco[ index + 1] = temp
                        //container.childNodes[arrayLength - i + 1].style.background = 'green';
                        //console.log('step:', speed * index, 'swap')
                    } else {
                        //console.log('step:', speed * index)
                    }
                    
                    setArr([...arr])
                    //console.log(speed * index, 'length:',arrayLength - i -1)
                    //}, speed * index);
                    
                    const container = document.getElementById('container')
                    //console.log(container.children[ 1 ])
                    if (!!container.children[ iteration ] === !undefined ) {
                        container.children[ iteration ].style.background = 'rgb(21, 114, 41)';
                    }
            }
            
            
            setDisabled(false)
        }
        arr.map( (v, index) => {
            setTimeout(() => {
                container.childNodes[ index ].style.background = 'rgb(170, 33, 97)';
                
            }, arrayLength * 2 * index);
        })
    }
            
            
            
            
    
    
    
    

    
    return (
        <>
            
            <div id="container" className="bar-container">
                {
                    arr.map( (value, index) => (
                        <Bar
                            key={ index }
                            value={ value }
                        />
                        ))
                    }
            </div>
            <button onClick={ swap } disabled={ disabled }>Sort</button> 
            <button onClick={ random }>random</button>
            {/* <input type="range" name="speed" id="speed" min="10" max="1500" /> */}
        </>
    )
}


//     const [arr, setArr] = useState([...taco])
//     let arr2 = useMemo(() => {
//         return [...taco]
//     }, [taco])






//     useEffect(() => {
    
//         setArr( () => {
//             return [...arr2]
//         })
//         return () => {
    
//       }
//     }, [arr2])


//     const sort = () => {
//         const sorted = arr2.map( (value, index) => {
//             console.log('inicio', arr2)
        
//             const ss = arr2.map( (value, index) => {
//                 setTimeout
            
//                 if ( arr2[ index + 1 ] === undefined){
//                     console.log('fin', arr2)
//                 } 
//                 else if ( arr2[ index ] > arr2[ index + 1]){
//                     console.log(arr2[ index ], arr2[ index +1 ], 'swap',  arr2)
            
//                     swap(index)
//                     setArr( () => {
//                         return arr2
//                     })
            
//                 } else {
//                     console.log(arr2[ index ], arr2[ index +1 ], 'no swap',  arr2)
//                 }
        
//         })
    
//     })

// }
