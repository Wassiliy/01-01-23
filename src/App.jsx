import React from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import Favourites from './components/favourites/Favourites';
import Home from './components/Home';

export const AppContext = React.createContext({});

function App() { 

// state for keeping products
  const [products,setProducts] = React.useState([]);
//state for opening the Cart
  const [cartOpened, setCartOpened] = React.useState(false);
//state for keeping cart items
const [cartItems, setCartItems] = React.useState([]);
//state for keeping favourite items
const [favouriteItems, setFavouriteItems] = React.useState([]);
//state for searching for products
const [search, setSearch] = React.useState(' ');

React.useEffect(()=>{

  async function axiosData(){

    const productsData = await axios.get('https://63567cd6a2d1844a9775f1f2.mockapi.io/products');
    const cartData= await axios.get('https://63567cd6a2d1844a9775f1f2.mockapi.io/cart');
    const favouritesData = await axios.get('https://63567cd6a2d1844a9775f1f2.mockapi.io/favourites');
    
    
    setCartItems(cartData.data);
    setFavouriteItems(favouritesData.data);
    setProducts(productsData.data);
    }
    axiosData()
},[])

const onRemoveCartItem = (id) => {
  axios.delete(`https://63567cd6a2d1844a9775f1f2.mockapi.io/cart/${id}`)
  setCartItems((prev)=>prev.filter(item=>Number(item.id)!== Number(id)))
  }

const itemAdded = (id)=>{
  return cartItems.some((obj)=>obj.myId===id.myId);
    }

const itemFavourite = (obj)=>{
  return favouriteItems.some((objFavourite)=>objFavourite.myId===obj.myId);
    }

  return (
     <AppContext.Provider value={{
      products, 
      cartItems, 
      favouriteItems,
      setCartItems,
      setFavouriteItems,
      setProducts,
      itemAdded,
      itemFavourite
      }}>

        <div className="App">
          {cartOpened ? <Cart  
          onRemoveCartItem = {onRemoveCartItem}
          cartItems={cartItems} 
          closeCart={()=>setCartOpened(false)}
          totalPrice={
            cartItems.reduce((totalElelments, objs)=>totalElelments + objs.price,0)
          }
          /> : null
          }
          
          <Header openCart={() => setCartOpened(true)} cartItems={cartItems}/>
          
              <Routes>
              <Route path='/favourites' element={
              <Favourites/>
              }/>

              <Route path='/' element={
              <Home
                items={products} 
                cartItems={cartItems} 
                setCartItems={setCartItems}
                search={search}
                setSearch={setSearch}
                favouriteItems={favouriteItems}
                setFavouriteItems={setFavouriteItems}
                />
              }
            />
          </Routes>  
         
          <Footer /> 
        </div> 
  </AppContext.Provider>
  );
} 

export default App;

