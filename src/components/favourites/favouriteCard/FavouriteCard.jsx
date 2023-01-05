import React , { useState} from "react"
import { AppContext } from "../../../App"
import style from './favouriteCard.module.css'

const FavouriteCard =(props) =>{

  const context = React.useContext(AppContext);
  
  let id = props.id;
  let myId= props.myId;
  
  const onClickPlus = () =>{

    let id = props.id;
    let myId= props.myId;
    let key= props.key;
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onPlus({id, myId, key, title,description,price,img});
    
  }

  const onClickFavourite = () =>{
    props.onFavourite({id, myId});
    
  }

    return(
        <div className={style.product_item}> 

           {/*
           favourite === true ? <button onClick={onClickFavourite} className={style.favourite_btnNew} >Item is added to Favourites</button> 
           : <button className={style.favourite_btn} onClick={onClickFavourite}>Add to Favourites</button>
            */}
            <button onClick={onClickFavourite} className={style.favourite_btnNew} >Remove from Favourites</button>
            <img className={style.product_img} src={props.img} alt={props.title}></img>
            <p className={style.product_title}>{props.title}</p>
            <p className={style.product_description}>{props.description}</p>
            <p className={style.price}>Price</p>

            <div className={style.product_price}>
              <span>${props.price}</span>
              <button className={context.itemAdded({id, myId}) ? style.check_btn : style.addCart} onClick={onClickPlus}>
              <img src={context.itemAdded({id, myId}) ? '/img/check.png' : '/img/plus.png'}/>
              </button>
            </div>
          </div>  
    )
}
export default FavouriteCard