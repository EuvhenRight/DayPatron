import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import React from 'react';

export default function ModalSpecification({ translate, product, imageUrl }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        w="50%"
        onClick={onOpen}
        cursor="pointer"
        src={imageUrl}
        alt={product.name}
      />
      <Modal
        isCentered
        blockScrollOnMount={false}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={imageUrl} alt={product.name} />
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              onClick={onClose}
              bg="#232323"
              color="white"
              _hover={{
                bg: 'white',
                color: 'black',
                border: '1px solid black',
              }}
            >
              {translate('product.close')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
