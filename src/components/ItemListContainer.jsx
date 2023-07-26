import { useEffect, useState } from "react"
import { askData } from "../helpers/askData"
import {ItemList} from "./ItemList"

export function ItemListContainer(props){

    const [candies, setCandies] = useState([]);

    useEffect(() => {
        askData()
        .then((ans)=> {
            console.log(ans);
            setCandies(ans);
        })
    }, [])


    return (
        <div>
            <h2 style={{textAlign: "center"}}>{props.greeting}</h2>
            
            <ItemList candy={candies}/>
        </div>
    )
}
