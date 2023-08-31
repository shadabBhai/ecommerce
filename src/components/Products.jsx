import React from 'react';
import { useState,useEffect } from 'react';
import { Container,HStack,Button} from '@chakra-ui/react'

import ProductCard from './ProductCard';


const Products = () => {
    const [products , setProducts] = useState([])

    useEffect(()=>{
       const fetchProducts = async()=>{
        const productList  = await fetch(`https://fakestoreapi.com/products`)
        const data = await productList.json()
        
      
        setProducts(data)
       }
       fetchProducts()
       
       
    },[])


  return (
    <Container  maxW={"container.xl"}>
      {<>
      
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {
            products.map((item) =>{
              return (<ProductCard 
                name ={item.title} 
                id={item.id}
                img = {item.image} 
                Price = {item.price} 
                key = {item.id} 
                
                />)
            })
          }
        </HStack>
        
       </> }
    </Container>

  )
}

export default Products
