import React  from 'react'
import { 
  Center,
  Heading,
  Divider,
} from '@chakra-ui/react'
import {useSelector} from 'react-redux'

import ListOfItem from './ListOfItem'
import PriceInCart from './PriceInCart'

const Cart = () => {
  const addedProducts = useSelector(state => state.cart)

  const totalPrice = addedProducts.reduce((total, product) => total + product.price, 0);


  
  return (
    <div>
    <Center>
      <Heading>
        Cart
      </Heading>
    </Center>
    {
      
      addedProducts.map(product =>(
        <>
          <ListOfItem 
          image = {product.image} 
          title = {product.title} 
          price={product.price} 
          id ={product.id} 
          key={product.id} 
          />
          
          
        </>
       
      ))
    }
    <Divider colorScheme ="teal" orientation='horizontal'/>
    <PriceInCart totalPrice ={totalPrice}/>
    </div>
  )
}

export default Cart