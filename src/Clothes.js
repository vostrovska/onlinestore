function Clothes({itemForSale}){
    return(
        <div className="products">
            {itemForSale.map((element =>{
               const {id, name, price, image} = element;
               return(
                <div key={id} className="product-card">
                    <img src={image} alt="clothes" width="400px" height="500px"/>
                <div className="product-info">
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                </div>
                </div>
               )
            }
              ))}   
        </div>
    )
}
export default Clothes;