import React from 'react';
// import PdfViewerComponent from './PdfViewer.js';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
          }}
        >
          <Viewer fileUrl="/privacy-policy.pdf" />;
        </div>
      </Worker>
    </div>
  );
};

export default PrivacyPolicy;
