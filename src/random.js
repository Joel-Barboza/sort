
export const random = (taco) => {
    taco = []
    let max = 50;
    let min = 3;
    for (let i = 0; i < 10; i++) {
        taco.push(Math.floor(Math.random() * ( max - min ) + min ))
        
    }
    console.log(taco)
}