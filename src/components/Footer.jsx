import React from 'react'
import {  HStack,Center } from '@chakra-ui/react'
import {CiFaceSmile} from 'react-icons/ci'




const Footer = () => {
  
  return (
    <HStack p={"8"} shadow={"base"} bgColor={"blackAlpha.800"} >
        <Center  h='100px' color='white'>
              Deleoped by shadab khan <span> </span> <CiFaceSmile/>
        </Center>
    </HStack>
  )
}

export default Footer