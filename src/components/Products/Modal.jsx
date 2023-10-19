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

export default function ModalSpecification({ translate, product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        onClick={onOpen}
        cursor="pointer"
        src={`/images/${product.specification.url}`}
        alt={product.name}
        boxSize="sm"
      />
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={`/images/${product.specification.url}`}
              alt={product.name}
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} bg="#232323" color="white">
              {translate('product.close')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
