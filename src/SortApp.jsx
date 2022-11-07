import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { Bar } from './Bar';

export const SortApp = () => {
    
    let taco = [ 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40, 5, 
        // 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,
        // 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40, 5, 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,
        // 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40, 5, 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,
        // 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40, 5, 60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,60, 35 ,30, 25, 50, 15, 10, 20, 45, 55, 40,
    ]
    const [arr, setArr] = useState(taco)
    const [disabled, setDisabled] = useState(false)
    let arrayLength = taco.length;
    const speed = 5;
    let lap;

    useEffect(() => {
        const container = document.getElementById('container')
      
    
      
    }, [])
    

    const getSpeed = () => { 
        for (let i = 0; i < taco.length; i++) {
            let stepSpd = speed * i;
            let lapSpd = stepSpd * i;

            
        }
    }
    const swap = () => {
        for (let i = 0; i < arrayLength; i++) {
            setDisabled(true)

            setTimeout(() => {

                for (let index = 0; index < arrayLength - i - 1; index++) {


                    setTimeout(() => {

                        if ( taco[ index ] > taco[ index + 1]){
                            let temp = taco[ index ]
                            taco[ index ] = taco[ index + 1 ]
                            taco[ index + 1] = temp
                            //console.log('step:', speed * index, 'swap')
                        } else {
                            //console.log('step:', speed * index)
                        }
                        
                        setArr([...arr])
                        //console.log(speed * index, 'length:',arrayLength - i -1)
                    }, speed * index);
                    
                }
                
                container.childNodes[arrayLength - i].style.background = 'green';
                
                    //console.log(speed)
                }, ((speed * arrayLength ) / 95 * 100) * i )
                //console.log(((speed * arrayLength) * i ) - (speed * i)*(2))
        }
        setTimeout(() => {
            container.childNodes.forEach((element, index) => {
                setTimeout(() => {
                    container.childNodes[ index ].style.background = 'red';
                }, 10 * index);
            });
            
        }, arrayLength * 145  );
    
        setDisabled(false)
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
            {/* <button onClick={ random }>random</button> */}
        </>
    )
}
// const random = () => {
//     taco = []
//     let max = 50;
//     let min = 3;
//     for (let i = 0; i < 5; i++) {
//         taco.push(Math.floor(Math.random() * ( max - min ) + min ))
        
//     }
//     console.log(taco)
// }
// random();

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
