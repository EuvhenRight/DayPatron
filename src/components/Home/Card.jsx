import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Button,
  ButtonGroup,
  Image,
  Text,
  useColorMode,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { useLanguage } from '../Language/LanguageContext';
import ModalDoc from './Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckIcon } from '@chakra-ui/icons';

import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: 'RGBA(255, 255, 255, 0.80)',
    _dark: {
      backgroundColor: 'RGBA(0, 0, 0, 0.64)',
    },
  },
  header: {},
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '1em',
  },
});

const sizes = {
  sm: definePartsStyle({
    container: {
      borderRadius: '2em',
      borderColor: 'red.500',
      _dark: {
        borderColor: 'red.300',
      },
      borderWidth: '2px',
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    // define which size and variant is applied by default
    size: 'sm',
  },
});

export default function CardComponent({ image, name, UTP, product }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { lang } = useParams();
  const { colorMode } = useColorMode();
  const color = colorMode === 'dark' ? 'red.300' : 'red.500';

  const translate = React.useCallback(
    (key) => {
      return t(key);
    },
    [t]
  );

  const toggleinfo = () => {
    navigate(`/${lang}/products/${product.id}/${product.linkName}`);
  };

  return (
    <Card>
      <CardBody>
        <Image src={image} alt={name} />
        <Heading size="md">{name}</Heading>
        <HStack mt="2" spacing="3">
          <CheckIcon boxSize={5} color={color} />
          <Text size="sm">{product.UTP}</Text>
        </HStack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" alignItems="center">
          <Button variant="outline" onClick={toggleinfo} colorScheme="gray.700">
            {translate('card.info')}
          </Button>
          <ModalDoc
            product={product}
            translate={translate}
            imageUrl={`/images/${product.specification.url}`}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
