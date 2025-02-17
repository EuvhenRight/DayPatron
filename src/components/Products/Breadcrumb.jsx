import { BreadcrumbItem, Breadcrumb, BreadcrumbLink } from '@chakra-ui/react';
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
            <BreadcrumbLink as={Link} to={`/${lang}`}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={`/${lang}/products`}>
              Products
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link}>{product.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      ) : (
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={`/${lang}`}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} to={`/${lang}/${page}`}>
              {page}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </>
  );
}
