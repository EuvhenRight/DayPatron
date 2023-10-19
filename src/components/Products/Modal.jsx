import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import React from 'react';

export default function ModalSpecification({ translate, product, imageUrl }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        onClick={onOpen}
        cursor="pointer"
        src={imageUrl}
        alt={product.name}
      />
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
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
