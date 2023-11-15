import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useLanguage } from '../Language/LanguageContext';
import { Box, useColorMode } from '@chakra-ui/react';

export default function PrivacyPolicy () {
  const { lang } = useLanguage();
  const { colorMode } = useColorMode();

  return (
    <Box border="1px solid rgba(0, 0, 0, 0.3">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Box
          maxW="100%" // Make the PDF viewer responsive by setting maximum width
          h="100%" // Set a maximum height
        >
          <Viewer
            fileUrl={
              lang === 'ua'
                ? '/privacy-policy-ua.pdf'
                : '/privacy-policy-en.pdf'
            }
            theme={colorMode === 'dark' ? 'dark' : 'light'}
          />
        </Box>
      </Worker>
    </Box>
  );
};

