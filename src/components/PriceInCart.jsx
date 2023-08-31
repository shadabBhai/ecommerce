import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Heading,Text,Button} from '@chakra-ui/react'

const PriceInCart = ({totalPrice}) => {
  return (
    <div>
        
        <Card align='center'>
            <CardHeader>
                <Heading size='md'>Total Amount</Heading>
            </CardHeader>
            <CardBody>
                <Text>₹{totalPrice}</Text>
            </CardBody>
            <CardFooter>
                <Button colorScheme='blue'>Proceed To Checkout</Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default PriceInCart