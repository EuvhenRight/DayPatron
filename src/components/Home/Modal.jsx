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
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

export default function ModalDoc({ translate, product, imageUrl }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const color = colorMode === 'dark' ? 'red.300' : 'red.500';
  const label = translate('card.guide');
  return (
    <>
      <span title={label}>
        <FaFilePdf
          onClick={onOpen}
          cursor="pointer"
          src={imageUrl}
          alt={product.name}
          size="40px"
          color={color}
        />
      </span>
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
