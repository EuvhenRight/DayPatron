import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Button,
  ButtonGroup,
  Image,
  List,
  ListItem,
  ListIcon,
  useColorMode,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import React from 'react';
import { useLanguage } from '../Language/LanguageContext';
import ModalDoc from './Modal';
import { useNavigate, useParams } from 'react-router-dom';

export default function CardComponent({ image, name, benefits, product }) {
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
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="5" spacing="2">
          <Heading size="md">{name}</Heading>
          <List spacing={3}>
            {benefits.map((benefit, index) => (
              <ListItem key={index}>
                <ListIcon as={MdCheckCircle} color={color} />
                {benefit}
              </ListItem>
            ))}
          </List>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center">
        <ButtonGroup spacing="2">
          <Button variant="outline" onClick={toggleinfo} colorScheme="red">
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
