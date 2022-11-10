import { useState, useEffect } from 'react';


export const getArray = () => {
    
    const [arr, setArr] = useState({array: []});
    const { array } = arr;
    const speed = 0;
    const arrayLength = array.length;
    
    const newArray = () => {

        const array = []
        let max = 60;
        let min = 3;

        for (let i = 0; i < 10; i++) {
            array.push(Math.floor(Math.random() * ( max - min ) + min ));
        }
    
        setArr({array});

    }
    //console.log(`Array length: ${ arrayLength }`)
    useEffect(() => {
        newArray();
    }, [])
    
    
    
    function wait(milisec) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, milisec);
        })
    }

    return {
        array,
        setArr,
        arrayLength,
        speed,
        wait,
        newArray,

    }
}
