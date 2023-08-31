import React from 'react'
import {Image} from '@chakra-ui/react'

import  shop from "../assets/Images/shop.jpg"
import { Link } from 'react-router-dom'


const Home = () => {
  
 
  return (
    
    <div>
     
      <Link to={"/product"}>
        <Image src={shop} alt='shop' width ="100%" />
      </Link>


    </div>
  )
}

export default Home