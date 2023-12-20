import { useEffect, useState } from "react"
import axios from "axios"
import "./products.css"
let Products=()=>{
    let [prod,setProd]= useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProd(res.data)
        })
    },[])
    return(
        <div className="prod">
            <table border={1}>
            {
               prod.map((item)=>{
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td ><img id="im" src={item.image} alt=""/></td>
                            <td>{item.category}</td>
                        </tr>
                    )
                })
            }
            </table>
        </div>
    )
}
export default Products