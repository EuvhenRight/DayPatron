import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import {
  InfoOutlineIcon,
  RepeatIcon,
  SettingsIcon,
  QuestionOutlineIcon,
} from '@chakra-ui/icons';
import ModalSpecification from './Modal';

export default function TabsComponent({ translate, product }) {
  return (
    <Tabs size="sm" variant="enclosed" isFitted>
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'red.400' }}>
          <InfoOutlineIcon pr={2} boxSize={10} />
          {translate('product.description')}
        </Tab>
        <Tab _selected={{ color: 'white', bg: 'red.400' }}>
          <RepeatIcon pr={2} boxSize={10} />
          {translate('product.useTo')}
        </Tab>
        <Tab _selected={{ color: 'white', bg: 'red.400' }}>
          <SettingsIcon pr={2} boxSize={10} />
          {translate('product.specifications')}
        </Tab>
        <Tab _selected={{ color: 'white', bg: 'red.400' }}>
          <QuestionOutlineIcon pr={2} boxSize={10} />
          {translate('product.faq')}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel textAlign="justify">
          <p>{product.description}</p>
        </TabPanel>
        <TabPanel textAlign="justify">
          <p>{product.useTo}</p>
          <b>
            <h3>{translate('product.ingredients')}:</h3>
          </b>
          <p>{product.composition}</p>
          <b>
            <h3>{translate('product.shelfLife')}:</h3>
          </b>
          <p>{product.shelfLife}</p>
        </TabPanel>
        <TabPanel
          textAlign="justify"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <p>{product.specification.text}</p>
          <Box w="sm">
            <ModalSpecification
              product={product}
              translate={translate}
              imageUrl={`/images/${product.specification.url}`}
            />
          </Box>
        </TabPanel>
        <TabPanel textAlign="justify">
          <b>
            <Text mb="5">{translate('product.question')}:</Text>
          </b>
          <Text mb="5">{product.faq.question_1.Q}</Text>
          <b>
            <Text mb="5">{translate('product.answer')}:</Text>
          </b>
          <Text mb="5">{product.faq.question_1.A}</Text>
          <b>
            <Text mb="5">{translate('product.question')}:</Text>
          </b>
          <Text mb="5">{product.faq.question_2.Q}</Text>
          <b>
            <Text mb="5">{translate('product.answer')}:</Text>
          </b>
          <Text mb="5">{product.faq.question_2.A}</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
