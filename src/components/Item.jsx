import { Link } from "react-router-dom"

export function Item({candy}){
    return (
        <div className="product">
            <h4>{candy.product_name}</h4>
            <img src={candy.photo} alt="" />
            <h5>${candy.price}</h5>
            <Link to={`/item/${candy.id}`}>Más información</Link>
        </div>
    )
}