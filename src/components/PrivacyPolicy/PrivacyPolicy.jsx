import React from 'react';
import PdfViewerComponent from './PdfViewer.js';

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <div className="PDF-viewer">
        <PdfViewerComponent document={'privacy-policy.pdf'} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
