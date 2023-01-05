import React from "react"

const Card =(prop) => {
    const [added, setAdded] = Raect.userState(false);
    const onClickPlus = () => {
    setAdded(!added)
    }
    return (
        <div className='product-item'>
            
        <button className="favorite-btn" onClick={props.onClickFavorite}>Добавить в избранное</button>
        
        <img className='product-img' src={props.img} alt={props.title} />
        <p className='product-title'>{props.title}</p>
        <p className='product-description'>{props.description}</p>
        <p className='price'>Цена</p>

        <div className='product-price'>
          <span>{props.price} руб</span>
           <button className={added ? '' : 'add-cart'} onClick={onClickPlus}>
            <img src={added ? '/img/check.png' : '/img/plus.png'} alt=""/>
          </button>
        </div> 
  </div>
    )
    }
set default Card.jsx