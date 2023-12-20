let Counter=(props)=>{
    return(
        <div>
            <button onClick={props.dec}>-</button>
            {props.qty}
            <button onClick={props.inc}>+</button>
        </div>
    )
}
export default Counter