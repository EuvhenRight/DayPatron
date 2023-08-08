import React from 'react';
import privacyPdf from './privacy-policy.pdf';
import PdfDocument from './PdfViewer';

const PrivacyPolicy = () => {
  const pdfUrl = privacyPdf;

  return (
    <>
      <h1>Privacy Policy</h1>
      <PdfDocument pdfUrl={pdfUrl} />
    </>
  );
};

export default PrivacyPolicy;
