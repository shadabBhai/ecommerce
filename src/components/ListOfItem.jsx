import React from 'react'
import { Card, 
    CardBody, 
    CardFooter,
    Image , 
    Stack,
    Heading, 
    Button,
    Text,useToast,
    } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'




const ListOfItem = ({image , price , title,id}) => {
    const toast = useToast()
    const dispatch =useDispatch()
    const handleRemove =(id)=>{
        dispatch(removeFromCart(id))
        toast({
            title: 'Item removed.',
            description: "Item remove from cart.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
    }


    

  return (
    <div>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={image}
            alt={title}
        />

        <Stack>
            <CardBody>
            <Heading size='md'>{title}</Heading>
            
            </CardBody>
                <Text fontSize='50px' color='tomato'>₹{price}</Text>
            <CardFooter>
            <Stack spacing ={4} direction='row' align='center'>
                
                <Button variant='solid' colorScheme='blue' onClick ={()=>handleRemove(id)} >
                    Remove
                </Button>
               
            </Stack>
            </CardFooter>
        </Stack>
        </Card>
       
    </div>
  )
}

export default ListOfItem