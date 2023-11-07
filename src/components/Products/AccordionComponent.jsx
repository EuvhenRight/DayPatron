import {
  InfoOutlineIcon,
  RepeatIcon,
  SettingsIcon,
  QuestionOutlineIcon,
} from '@chakra-ui/icons';
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  Box,
  Text,
  Heading,
  useColorMode,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import ModalSpecification from './Modal';

export default function AccordionComponent({ translate, product }) {
  const { colorMode } = useColorMode();
  const colorBg = colorMode === 'dark' ? 'red.300' : 'red.500';
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <Heading as="h2">
          <AccordionButton _expanded={{ color: 'white', bg: colorBg }}>
            <Box as="span" flex="1" textAlign="left" ml={2}>
              <InfoOutlineIcon pr={2} boxSize={7} />
              {translate('product.description')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel textAlign="justify">
          <Text mt={{ base: 2, md: 5 }}>{product.description}</Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <Heading as="h2">
          <AccordionButton _expanded={{ color: 'white', bg: colorBg }}>
            <Box as="span" flex="1" textAlign="left" ml={2}>
              <RepeatIcon pr={2} boxSize={7} />
              {translate('product.useTo')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4} textAlign="justify">
          <Text my={{ base: 2, md: 5 }}>{product.useTo}</Text>
          <b>
            <h3>{translate('product.ingredients')}:</h3>
          </b>
          <Text>{product.composition}</Text>
          <b>
            <h3>{translate('product.shelfLife')}:</h3>
          </b>
          <Text>{product.shelfLife}</Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <Heading as="h2">
          <AccordionButton _expanded={{ color: 'white', bg: colorBg }}>
            <Box as="span" flex="1" textAlign="left" ml={2}>
              <SettingsIcon pr={2} boxSize={7} />
              {translate('product.specifications')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel
          pb={4}
          textAlign="justify"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <List spacing={3}>
            {product.benefits.map((benefit, index) => (
              <ListItem key={index}>
                <ListIcon as={MdCheckCircle} color={colorBg} />
                {benefit}
              </ListItem>
            ))}
          </List>
          <Box w="50%" my={{ base: 2, md: 5 }}>
            <ModalSpecification
              product={product}
              translate={translate}
              imageUrl={`/images/${product.specification.url}`}
            />
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <Heading as="h2">
          <AccordionButton _expanded={{ color: 'white', bg: colorBg }}>
            <Box as="span" flex="1" textAlign="left" ml={2}>
              <QuestionOutlineIcon pr={2} boxSize={7} />
              {translate('product.faq')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4} textAlign="justify">
          <b>
            <Text>{translate('product.question')}:</Text>
          </b>
          <Text mb={5}>{product.faq.question_1.Q}</Text>
          <b>
            <Text>{translate('product.answer')}:</Text>
          </b>
          <Text mb={5}>{product.faq.question_1.A}</Text>
          <b>
            <Text>{translate('product.question')}:</Text>
          </b>
          <Text>{product.faq.question_2.Q}</Text>
          <b>
            <Text mb={5}>{translate('product.answer')}:</Text>
          </b>
          <Text>{product.faq.question_2.A}</Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
