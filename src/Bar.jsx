

export const Bar = ({ value }) => {

    //let height = document.getElementById('barsContainer').offsetHeight;
    //console.log(height)

    return (
        <div 
            className="bar"
            style={{height: `${value*5}px`}}
        >
            <p>{  }</p>
        </div>
    )
}