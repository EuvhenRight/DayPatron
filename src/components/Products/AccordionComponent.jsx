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
} from '@chakra-ui/react';
import React from 'react';

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
          <p>{product.description}</p>
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
          <p>{product.useTo}</p>
          <b>
            <h3>{translate('product.ingredients')}:</h3>
          </b>
          <p>{product.composition}</p>
          <b>
            <h3>{translate('product.shelfLife')}:</h3>
          </b>
          <p>{product.shelfLife}</p>
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
        <AccordionPanel pb={4} textAlign="justify">
          <p>{product.specification.text}</p>
          <img
            src={`/images/${product.specification.url}`}
            alt={product.name}
          />
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
          <p>{product.faq}</p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
