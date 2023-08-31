import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Card,  
    CardBody, 
    CardFooter ,
    Button ,
    ButtonGroup ,
    Divider,
    Image, 
    Stack , 
    Heading , 
    Text,
    Center,
    useToast
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';

import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
    const params = useParams();
    const [product, setProduct] = useState({})
    const currency_symbol = '₹'
   
    const dispatch = useDispatch()

    // const [item , setItem] = useState({})
    
  

    useEffect (()=>{
        const fetchProductDetail = async()=>{
            const  resp =  await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const data = await resp.json()

            
            setProduct(data)
        }
        fetchProductDetail()
    },[params.id])

    const toast = useToast()
    const handelAdd =(product)=>{
        dispatch(addToCart(product))
         toast({
          title: 'Item Added.',
          description: "Item adds to your cart.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
       
        
        
    }
    
   
return (
    <Center >
        <Card maxW='lg'>
    <CardBody>
        <Image
        src={product.image}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>{product.title}</Heading>
        <Text>
            {product.description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
            {currency_symbol} {product.price}
        </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <ButtonGroup spacing='2'>
       
            
            <Button variant='solid' colorScheme='blue' onClick ={()=>handelAdd(product)}> 
                Add To Cart
            </Button>
            
    

        </ButtonGroup>
    </CardFooter>
    </Card>
    
</Center>
  )
}

export default ProductDetail