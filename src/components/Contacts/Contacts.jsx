import MyLocation from '../Google_Map/My_Location';
import React from 'react';
import FormFeedBackContact from '../Forms/Form_FeedBack_Contact';
import style from './Contacts.module.css';
import { useLanguage } from '../Language/LanguageContext';
import BreadcrumbComponent from '../Products/Breadcrumb';
import {
  Box,
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
        <Grid templateColumns="repeat(5, 1fr)" gap={4} alignItems="end">
          <GridItem colSpan={2}>
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
          <GridItem colSpan={3}>
            <div className={style.down__form__wrapper}>
              <div className={style.down__form__headline}>
                <h2 className={style.down__form__headline__text}>
                  {t('contacts.rightText')}
                </h2>
              </div>
              {success ? (
                <div className={style.success}>
                  <h3 className={style.success__text}>
                    {t('contacts.successText')}
                  </h3>
                  <button
                    className={style.success__button}
                    onClick={() => setSuccess(false)}
                  >
                    {t('contacts.repeatText')}
                  </button>
                </div>
              ) : (
                <FormFeedBackContact
                  success={success}
                  setSuccess={setSuccess}
                />
              )}
            </div>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
