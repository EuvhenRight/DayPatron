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
