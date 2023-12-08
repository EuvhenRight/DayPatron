import React from 'react';
import LoaderSpinner from '../Loader_Spinner/Loader_Spinner';
import { useLanguage } from '../Language/LanguageContext';
import { useParams } from 'react-router-dom';
import { TbShoppingCartPlus } from 'react-icons/tb';
import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import ShareButtonsComponent from '../ShareSocial/ShareButtons';
import TabsComponent from './TabsComponent';
import AccordionComponent from './AccordionComponent';
import SwiperComponent from './Swiper';
import HelmetComponent from '../Helmet/helmet.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProduct,
  productDataSelector,
  productStatus,
} from '../../redux/productsSlice';
import BreadcrumbComponent from './Breadcrumb';
import VolumeToggleComponent from './VolumeToggleComponent';
import { Link } from '@chakra-ui/react';

export default function Product() {
  const isLoading = useSelector(productStatus);
  const product = useSelector(productDataSelector);
  const dispatch = useDispatch();
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
  });
  const { id, lang } = useParams();
  const [activeVolume, setActiveVolume] = React.useState(0);
  const { t } = useLanguage();

  const translate = React.useCallback(
    (key) => {
      return t(key);
    },
    [t]
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProduct({ lang, id }));
  }, [lang, dispatch, id]);

  // Check if product exists before rendering.
  if (isLoading) {
    return (
      <Box minH="100dvh" alignItems="center">
        <LoaderSpinner />
      </Box>
    );
  }

  if (!product) {
    return null; // Don't render layout components if productsData is missing
  }

  return (
    <>
      <HelmetComponent
        title={product.name}
        addPostFixTitle={true}
        description={product.description}
        keywords={product.keywords}
        imageCard={product.image.url}
        noIndex={true}
        largeTwitterCard={true}
      />
      <Container key={product.id} maxW={'6xl'} minH="100dvh" mb={5}>
        {isMobile ? (
          <>
            <Container p="0">
              <SwiperComponent product={product} activeVolume={activeVolume} />
            </Container>
            <VolumeToggleComponent
              product={product}
              activeVolume={activeVolume}
              setActiveVolume={setActiveVolume}
            />
            <Box
              p={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-end"
            >
              <Box display="flex" alignItems="center" my={4}>
                <Text>{translate('product.share')}:</Text>
                <ShareButtonsComponent product={product} />
              </Box>
              <Heading as="h2" size={isMobile ? 'lg' : 'xl'} textAlign="right">
                {product.name}
              </Heading>
              <Text>
                {translate('product.article')}: {product.article}
              </Text>
              <Box my={5}>
                <Link
                  isExternal
                  href="https://motorsport.com.ua/index.php?match=all&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=&dispatch=products.search&security_hash=577899a94e1535a213ecbdaf7bb39696&features_hash=316-10608"
                >
                  <Button
                    variant="shopPrimary"
                    leftIcon={<TbShoppingCartPlus />}
                  >
                    {translate('product.shop_button')}
                  </Button>
                </Link>
              </Box>
            </Box>
            <AccordionComponent translate={translate} product={product} />
          </>
        ) : (
          <>
            <BreadcrumbComponent lang={lang} product={product} />
            <Grid
              templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'}
              gap={3}
            >
              <GridItem colSpan={1}>
                <Container p="0">
                  <SwiperComponent
                    product={product}
                    activeVolume={activeVolume}
                  />
                </Container>
                <VolumeToggleComponent
                  product={product}
                  activeVolume={activeVolume}
                  setActiveVolume={setActiveVolume}
                />
              </GridItem>
              <GridItem
                colSpan={isMobile ? 1 : 2}
                sx={
                  isMobile
                    ? {}
                    : {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                      }
                }
              >
                <Box my={4} display="flex" alignItems="center">
                  <Text>{translate('product.share')}:</Text>
                  <ShareButtonsComponent product={product} />
                </Box>
                <Heading
                  as="h2"
                  size={isMobile ? 'md' : 'xl'}
                  textAlign="right"
                >
                  {product.name}
                </Heading>
                <Text>
                  {translate('product.article')}: {product.article}
                </Text>
                <Box my={5}>
                  <Link
                    isExternal
                    href="https://motorsport.com.ua/index.php?match=all&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=&dispatch=products.search&security_hash=577899a94e1535a213ecbdaf7bb39696&features_hash=316-10608"
                  >
                    <Button
                      variant="shopPrimary"
                      leftIcon={<TbShoppingCartPlus />}
                    >
                      {translate('product.shop_button')}
                    </Button>
                  </Link>
                </Box>

                <TabsComponent translate={translate} product={product} />
              </GridItem>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}
