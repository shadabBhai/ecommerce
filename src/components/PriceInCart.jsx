import React from 'react'
import { Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Heading,
    Text,
    Button,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

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
                <BasicUsage/>
            </CardFooter>
        </Card>
    </div>
  )
}

const BasicUsage=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen }>Check-out</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Thanks for shopping with us..</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default PriceInCart