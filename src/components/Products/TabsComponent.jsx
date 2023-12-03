import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  useColorMode,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  InfoOutlineIcon,
  RepeatIcon,
  SettingsIcon,
  QuestionOutlineIcon,
} from '@chakra-ui/icons';
import ModalSpecification from './Modal';
import { MdCheckCircle } from 'react-icons/md';

export default function TabsComponent({ translate, product }) {
  const { colorMode } = useColorMode();
  const colorBg = colorMode === 'dark' ? 'red.300' : 'red.500';
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: true,
    xl: false,
  });
  return (
    <Tabs size="sm" variant="enclosed" isFitted>
      <TabList>
        <Tab _selected={{ color: 'white', bg: colorBg }}>
          <InfoOutlineIcon pr={1} boxSize={8} />
          {isMobile ? '' : translate('product.description')}
        </Tab>
        <Tab _selected={{ color: 'white', bg: colorBg }}>
          <RepeatIcon pr={1} boxSize={8} />
          {isMobile ? '' : translate('product.useTo')}
        </Tab>
        <Tab _selected={{ color: 'white', bg: colorBg }}>
          <SettingsIcon pr={1} boxSize={8} />
          {isMobile ? '' : translate('product.specifications')}
        </Tab>
        <Tab _selected={{ color: 'white', bg: colorBg }}>
          <QuestionOutlineIcon pr={1} boxSize={8} />
          {isMobile ? '' : translate('product.faq')}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel px="0" textAlign="justify">
          <Text>{product.description}</Text>
        </TabPanel>
        <TabPanel px="0" textAlign="justify">
          <Text mb={{ base: 2, md: 5 }}>{product.useTo}</Text>
          <b>
            <h3>{translate('product.ingredients')}:</h3>
          </b>
          <Text mb={{ base: 2, md: 5 }}>{product.composition}</Text>
          <b>
            <h3>{translate('product.shelfLife')}:</h3>
          </b>
          <Text>{product.shelfLife}</Text>
        </TabPanel>
        <TabPanel
          textAlign="justify"
          display="flex"
          flexDirection="row"
          alignItems="center"
          px="0"
        >
          <List spacing={3}>
            {product.benefits.map((benefit, index) => (
              <ListItem key={index}>
                <ListIcon as={MdCheckCircle} color={colorBg} />
                {benefit}
              </ListItem>
            ))}
          </List>
          <Box
            w="sm"
            mt={{ base: 2, md: 5 }}
            display="flex"
            justifyContent="center"
          >
            <ModalSpecification
              product={product}
              translate={translate}
              imageUrl={`/images/${product.specification.url}`}
            />
          </Box>
        </TabPanel>
          <TabPanel px="0" textAlign="justify">
        {[1, 2, 3, 4].map((index) => (
          <React.Fragment key={index}>
            <b>
              <Text>{translate('product.question')}:</Text>
            </b>
            <Text mb={5}>{product.faq[`question_${index}`].Q}</Text>
            <b>
              <Text>{translate('product.answer')}:</Text>
            </b>
            <Text mb={5}>{product.faq[`question_${index}`].A}</Text>
          </React.Fragment>
        ))}
            </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
