import React from 'react';
import style from './Product.module.css';
import LoaderSpinner from '../Loader_Spinner/Loader_Spinner';
import { useLanguage } from '../Language/LanguageContext';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Tag,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import ShareButtonsComponent from '../ShareSocial/ShareButtons';
import TabsComponent from './TabsComponent';
import AccordionComponent from './AccordionComponent';
import ModalSpecification from './Modal';
import SwiperComponent from './Swiper';

export default function Product() {
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeMainPhoto, setActiveVolume] = React.useState(0);
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
  const { id, lang } = useParams();

  const { t } = useLanguage();

  const translate = React.useCallback(
    (key) => {
      return t(key);
    },
    [t]
  );

  React.useEffect(() => {
    // Fetch product data
    const fetchData = async (productId) => {
      try {
        const url = `https://daypatron.adaptable.app/products/${lang}/${productId}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchData(id, lang);
    setIsLoading(true);
    window.scrollTo(0, 0);
  }, [id, lang]);

  // Check if product exists before rendering.
  if (isLoading) {
    return (
      <div className={style.section__middle}>
        <LoaderSpinner />
      </div>
    );
  }

  const mainImage = product?.image.map((img) => img.url);

  const onTogglePhoto = (index) => {
    setActiveVolume(index);
  };

  const renderProductImage = () => {
    return `/images/${mainImage[activeMainPhoto]}`;
  };

  // Separate Image component
  const PictureTogglePhoto = ({ url, alt, isActive, onClick }) => (
    <WrapItem
      onClick={onClick}
      borderWidth={isActive ? '2px' : '2px'} // Set '0px' instead of '0' for proper CSS
      borderRadius="md"
      borderColor={isActive ? 'green.200' : 'gray'} // Apply a border color only when active
    >
      <Image
        src={`/images/${url}`}
        width={{ base: '75px', md: '100px', lg: '100px' }}
        alt={alt}
      />
    </WrapItem>
  );

  // Separate Volume component
  const VolumeTogglePhoto = ({ value, isActive, onClick }) => (
    <Tag
      size="md" // Define the size attribute here
      m={2}
      borderRadius="md"
      variant="outline"
      colorScheme={isActive ? 'green' : 'gray'}
      onClick={onClick}
    >
      {value}
    </Tag>
  );

  return (
    <>
      <Container
        key={product.id}
        maxW="container.lg"
        centerContent
        mt={{ base: 75, sm: 85, md: 85, lg: 85, xl: 85 }}
        fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'md' }}
      >
        <Box w="100%">
          <Box
            pr={{ base: 0, sm: '12px', md: '12px', lg: '12px' }}
            display="flex"
            flexDirection="column-reverse"
            alignItems={{ base: 'flex-end', md: 'flex-end', lg: 'flex-end' }}
          >
            <Heading as="h2" size={isMobile ? 'md' : 'xl'}>
              {product.name}
            </Heading>
            <Text mb={1}>
              {translate('product.article')}: {product.article}
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{
                base: 'center',
                md: 'flex-end',
                lg: 'flex-end',
              }}
            >
              {translate('product.share')}:
              <Box ml={2}>
                <ShareButtonsComponent product={product} />
              </Box>
            </Box>
          </Box>
          {isMobile ? (
            <Grid
              as="section"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(1, 1fr)"
              justifyItems="center"
              alignItems="end"
              justifyContent="center"
            >
              <GridItem colSpan={1} rowSpan={2}>
                <Container centerContent mb={5}>
                  <SwiperComponent product={product} />
                </Container>
              </GridItem>
              <GridItem colSpan={1} rowSpan={2}>
                <Wrap cursor="pointer" justify="center">
                  {/* Separate Volume */}
                  {product.volume.map((value, i) => (
                    <VolumeTogglePhoto key={i} value={value} />
                  ))}
                </Wrap>
              </GridItem>
            </Grid>
          ) : (
            <Grid
              as="section"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={4}
              justifyItems="center"
              alignItems="end"
            >
              <GridItem colSpan={{ base: 6, md: 1, lg: 1 }}>
                <Wrap cursor="pointer" display="flex" justify="center">
                  {/* Separate Picture */}
                  {product.image.map((value, i) => (
                    <PictureTogglePhoto
                      key={i}
                      url={value.url}
                      alt={product.name}
                      isActive={activeMainPhoto === i}
                      onClick={() => onTogglePhoto(i)}
                    />
                  ))}
                </Wrap>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 4, lg: 4 }} w="70%" h="auto">
                <ModalSpecification
                  imageUrl={renderProductImage()}
                  product={product}
                  translate={translate}
                />
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 1, lg: 1 }}>
                <Wrap cursor="pointer" justify="center">
                  {/* Separate Volume */}
                  {product.volume.map((value, i) => (
                    <VolumeTogglePhoto
                      key={i}
                      value={value}
                      isActive={activeMainPhoto === i}
                      onClick={() => onTogglePhoto(i)}
                    />
                  ))}
                </Wrap>
              </GridItem>
            </Grid>
          )}
          <Box mt={5} as="section">
            {isMobile ? (
              <AccordionComponent translate={translate} product={product} />
            ) : (
              <TabsComponent translate={translate} product={product} />
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
