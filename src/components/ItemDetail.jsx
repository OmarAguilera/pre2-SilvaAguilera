export function ItemDetail({item}){
    return(
        <div className="Container">
            <div>
                <h2>{item.product_name}</h2>
                <img src={item.photo} alt="" />
                <p>${item.price}</p>
                <p>flavor: {item.flavor}</p>
                <p>calories: {item.calories}</p>
                <h3>Expiration date: {item.expiration_date}</h3>
            </div>
        </div>
    )
}