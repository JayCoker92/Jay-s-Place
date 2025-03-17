import React from 'react'
import SearchBar from '../assets/search_35dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg';
import Products from '../layouts/Product'
import Hero from "../layouts/Hero";
import ProductDetails from './ProductDetails';

const Home = ({handleAddToCart}) => {

  return (
   <>
   <main className='bg-[#2F2F2F]'>
    <article className='wrapper'>
      <section>
        <div>
        <Hero/>
        </div>
        <div>
        
        </div>
        
        <div>
         {/* <BurgerSession/>  */}
        </div>
        <div>
          <Products handleAddToCart = {handleAddToCart}/>
        </div>

      </section>

    </article>

    
   </main>
   </>
  )
}

export default Home