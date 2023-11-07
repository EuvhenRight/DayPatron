import { BreadcrumbItem, Breadcrumb } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

export default function BreadcrumbComponent({ product, lang, page }) {
  return (
    <>
      {product ? (
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <Link to={`/${lang}`}>Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to={`/${lang}/products`}>Products</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link>{product.name}</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      ) : (
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <Link to={`/${lang}`}>Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link to={`/${lang}/${page}`}>{page}</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </>
  );
}
