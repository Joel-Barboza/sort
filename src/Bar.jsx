

export const Bar = ({ value }) => {

    let height = document.getElementById('barsContainer').offsetHeight;
    console.log(height)

    return (
        <div 
            className="bar"
            style={{height: `${ Math.ceil(value / 7)}vh`}}
        >
            <p>{  }</p>
        </div>
    )
}
