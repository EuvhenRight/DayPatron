import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Button,
  ButtonGroup,
  Image,
} from '@chakra-ui/react';
import React from 'react';

export default function CardComponent({ image, name, description }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Info
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
