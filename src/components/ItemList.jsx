import { Item } from "./Item"

export function ItemList({candy}){
    return(
        <div>
            <h2>New Candies</h2>
            <div className="products">
                {candy.map((cand) => <Item candy={cand} key={cand.id}/>)}
            </div>
        </div>
    )
}