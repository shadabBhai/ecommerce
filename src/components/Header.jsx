import React from 'react'
import { Button , HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
  const productInCart = useSelector((state) => state.cart)
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} >
      <Button variant={"unstyled"} color={"white"}>
        <Link to ="/">Home</Link>
      </Button> 
      <Button variant={"unstyled"} color={"white"}>
        <Link to ="/Products">Product</Link>
      </Button> 
      <Button variant={"unstyled"} color={"white"}>
        <Link to ="/cart">Cart:{productInCart.length}</Link>
      </Button> 
    </HStack>
  )
}

export default Header