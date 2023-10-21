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
} from '@chakra-ui/react';
import React from 'react';
import ModalSpecification from './Modal';

export default function AccordionComponent({ translate, product }) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ color: 'white', bg: 'red.400' }}>
            <Box as="span" flex="1" textAlign="left" ml={2}>
              <InfoOutlineIcon pr={2} boxSize={7} />
              {translate('product.description')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="justify">
          <Text my={{ base: 2, md: 5 }}>{product.description}</Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ color: 'white', bg: 'red.400' }}>
            <Box as="span" flex="1" textAlign="left" ml={2}>
              <RepeatIcon pr={2} boxSize={7} />
              {translate('product.useTo')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="justify">
          <Text my={{ base: 2, md: 5 }}>{product.useTo}</Text>
          <b>
            <h3>{translate('product.ingredients')}:</h3>
          </b>
          <Text>{product.composition}</Text>
          <b>
            <h3>{translate('product.shelfLife')}:</h3>
          </b>
          <Text mb={5}>{product.shelfLife}</Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ color: 'white', bg: 'red.400' }}>
            <Box as="span" flex="1" textAlign="left" ml={2}>
              <SettingsIcon pr={2} boxSize={7} />
              {translate('product.specifications')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          textAlign="justify"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text my={{ base: 2, md: 5 }}>{product.specification.text}</Text>
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
        <h2>
          <AccordionButton _expanded={{ color: 'white', bg: 'red.400' }}>
            <Box as="span" flex="1" textAlign="left" ml={2}>
              <QuestionOutlineIcon pr={2} boxSize={7} />
              {translate('product.faq')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="justify">
          <b>
            <Text mb={5}>{translate('product.question')}:</Text>
          </b>
          <Text mb={5}>{product.faq.question_1.Q}</Text>
          <b>
            <Text mb={5}>{translate('product.answer')}:</Text>
          </b>
          <Text mb={5}>{product.faq.question_1.A}</Text>
          <b>
            <Text mb={5}>{translate('product.question')}:</Text>
          </b>
          <Text mb={5}>{product.faq.question_2.Q}</Text>
          <b>
            <Text mb={5}>{translate('product.answer')}:</Text>
          </b>
          <Text mb={5}>{product.faq.question_2.A}</Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
