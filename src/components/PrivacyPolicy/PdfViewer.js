import React from 'react';
import { useEffect, useRef } from 'react';
import style from '../../App.module.css';

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let instance, PSPDFKit;

    const loadPdfViewer = async () => {
      try {
        PSPDFKit = await import('pspdfkit');
        PSPDFKit.unload(container);

        instance = await PSPDFKit.load({
          container,
          document: props.document,
          baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        });
      } catch (error) {
        console.error('Error loading PDF viewer:', error);
      }
    };

    loadPdfViewer();

    return () => {
      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }
    };
  }, []);

  return <div ref={containerRef} className={style.container} />;
}
