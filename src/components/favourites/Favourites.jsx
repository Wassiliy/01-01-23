import React from "react";
import axios from "axios";
import style from "./favourites.module.css";
import FavouriteCard from "./favouriteCard/FavouriteCard";
import { AppContext } from "../../App";

const Favourites = (props) =>{
  
    const context = React.useContext(AppContext);

    const onAddToCart= async (obj) =>{
        axios.post('https://63567cd6a2d1844a9775f1f2.mockapi.io/cart', obj)
        context.setCartItems([...context.cartItems,obj]);
    }

    const onRemoveFavourites= async (obj) =>{
        const { data } = await axios.delete(`https://63567cd6a2d1844a9775f1f2.mockapi.io/favourites/${obj.id}`)
        context.setFavouriteItems((prev)=>prev.filter(item => Number(item.myId)!==Number(obj.myId)))
     
    }

    return(
    <div className={style.products_section}>

    <div className={style.search}>
        <h2>Favourite Items</h2>
    </div>

    <div className={style.products}> 

    {
    context.favouriteItems.map( obj =>{
        return(
            <FavouriteCard 
                    key={obj.id} 
                    id={obj.id}
                    myId={obj.myId}
                    title={obj.title} 
                    description={obj.description} 
                    price={obj.price} 
                    img={obj.img}
                    onFavourite={
                        (id)=>{
                            onRemoveFavourites(id)
                        }
                    }
                    onPlus={
                        (cartObj) => {
                            onAddToCart(cartObj)
                    }
                }/>
        )
    })
}
</div>
</div>
)
}

export default Favourites