import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
  InfoOutlineIcon,
  RepeatIcon,
  SettingsIcon,
  QuestionOutlineIcon,
} from '@chakra-ui/icons';

export default function TabsComponent({ translate, product }) {
  return (
    <Tabs size="md" variant="enclosed" isFitted>
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
        <TabPanel textAlign="justify">
          <p>{product.specification.text}</p>
          <img
            src={`/images/${product.specification.url}`}
            alt={product.name}
          />
        </TabPanel>
        <TabPanel textAlign="justify">
          <p>{product.faq}</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
