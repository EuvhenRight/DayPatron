import { useState } from 'react';
import {
  Wrap,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Tag,
} from '@chakra-ui/react';
import { useLanguage } from '../Language/LanguageContext';
import { Link } from 'react-router-dom';

export default function VolumeToggleComponent({
  product,
  activeVolume,
  setActiveVolume,
}) {
  const { currentLanguage, t } = useLanguage();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleToggleClick = () => {
    setIsPopoverOpen(!false); // Close the popover after clicking
  };
  const VolumeTogglePhoto = ({ value, isActive, onClick }) => (
    <Tag
      size="md" // Define the size attribute here
      m={2}
      borderRadius="md"
      variant="outline"
      colorScheme={isActive ? 'red' : 'gray'}
      onClick={onClick}
      cursor="pointer"
    >
      {value}
    </Tag>
  );
  const onChangeVolume = (index) => {
    setActiveVolume(index);
  };

  return (
    <Wrap cursor="pointer" justify="center" mt={5}>
      {product.volume.slice(0, 3).map((value, i) => (
        <VolumeTogglePhoto
          key={i}
          value={value}
          isActive={activeVolume === i}
          onClick={() => onChangeVolume(i)}
        />
      ))}
      <Popover
        isOpen={isPopoverOpen} // Show popover only when it's open and not active
        onClose={() => setIsPopoverOpen(false)}
      >
        <PopoverTrigger>
          <Tag
            size="md" // Define the size attribute here
            m={2}
            borderRadius="md"
            variant="outline"
            colorScheme="gray"
            cursor="pointer"
            onClick={handleToggleClick}
          >
            {product.volume.slice(3, 7).map((value, i) => (
              <VolumeTogglePhoto key={i} value={value} />
            ))}
          </Tag>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {t('product.additionalInfo')}
            <Link
              style={{
                textDecoration: 'underline',
              }}
              to={`/${currentLanguage}/contact`}
            >
              {t('header.contacts')}
            </Link>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Wrap>
  );
}
