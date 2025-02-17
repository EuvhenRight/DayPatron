import MyLocation from '../Google_Map/My_Location';
import React from 'react';
import FormFeedBackContact from '../Forms/Form_FeedBack_Contact';
import { useLanguage } from '../Language/LanguageContext';
import BreadcrumbComponent from '../Products/Breadcrumb';
import {
  Box,
  Button,
  Container,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';

export default function Contacts() {
  const { t, lang } = useLanguage();
  const [success, setSuccess] = React.useState(false);
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <>
      <Container
        maxW={'6xl'}
        minH="100dvh"
        fontSize={{ base: 'sm', sm: 'md' }}
        my={4}
      >
        {!isMobile && <BreadcrumbComponent lang={lang} page="Contacts" />}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          h="250px"
        >
          <Heading as="h1">{t('contacts.mainText')}</Heading>
        </Box>
        <Grid
          templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(5, 1fr)'}
          gap={4}
          alignItems="end"
        >
          <GridItem colSpan={isMobile ? 1 : 2}>
            <Heading as="h2" mb={4}>
              {t('contacts.leftText')}
            </Heading>
            <Text>{t('contacts.leftText_manufacturer')}</Text>
            <Text>{t('contacts.leftText_supplier')}</Text>
            <Text>{t('contacts.leftText_phone')}</Text>
            <Text>
              Email: info@dezze.com.ua
              <br />
              Email: info@daypatron.com.ua
            </Text>
            <Box mt={5}>
              <MyLocation />
            </Box>
          </GridItem>
          <GridItem colSpan={isMobile ? 1 : 3}>
            <Box
              border="1.5px solid rgba(0, 0, 0, 0.3)"
              borderRadius={8}
              p={(8, 6)}
            >
              {success ? (
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                >
                  <Heading as="h3">{t('contacts.successText')}</Heading>
                  <Button
                    variant="brandPrimary"
                    type="submit"
                    my={4}
                    onClick={() => setSuccess(false)}
                  >
                    {t('contacts.repeatText')}
                  </Button>
                </Box>
              ) : (
                <>
                  <Box mb={4} textAlign="center">
                    <Heading as="h2">{t('contacts.rightText')}</Heading>
                  </Box>
                  <FormFeedBackContact
                    success={success}
                    setSuccess={setSuccess}
                  />
                </>
              )}
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
