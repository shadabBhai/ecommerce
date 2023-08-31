import React from 'react'
import {VStack,Image,Text,Heading } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const ProductCard = ({name , img , Price , id ,symbol='₹'}) => {
  return (

        <Link to ={`/product/${id}`} >
        <VStack 
          w={"80"} 
          shadow={"lg"} 
          p={"8"} 
          borderRadius={"lg"} 
          transition={" all  0.3s"} 
          m={"4"}
          css={{"&:hover":{
              transform:"scale(1.1)",
          }
        }}
          >
          <Image 
          src= {img}  
          w={'10'} 
          h={'10'} 
          objectFit ={'contain'} 
          alt ={'item'} 
          />
        <Heading size ={"md"} noOfLines={1} >{symbol}{Price}</Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}></Text>
        </VStack>
    
       </Link>

  )
}

export default ProductCard