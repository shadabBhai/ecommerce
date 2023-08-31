import React from 'react'
import {  HStack,Center } from '@chakra-ui/react'
import {CiFaceSmile} from 'react-icons/ci'




const Footer = () => {
  
  return (
    <HStack p={"6"} shadow={"base"} bgColor={"blackAlpha.800"} >
        <Center  h='100px' color='white'>
              Developed by shadab khan <CiFaceSmile/>
        </Center>
    </HStack>
  )
}

export default Footer