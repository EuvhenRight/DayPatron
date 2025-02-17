# DayPatron Gun Care Line Website

[Click here for the Demo version](https://www.daypatron.com.ua/en/)

Welcome to the DayPatron Gun Care Line Website repository! This project aims to provide firearm enthusiasts with essential resources, products, and services related to gun care and maintenance.

![screenShot](/src/components/assets/Screenshot.png)
![devices](/src/components/assets/devices.png)

## Project Overview

The Gun Care Line Website is built using a combination of frontend and backend technologies, creating a seamless user experience while ensuring the longevity and performance of firearms.

[My backend](https://github.com/EuvhenRight/DayPatron-backend)

## Features

- **User-Friendly Interface:** Navigate through the website effortlessly with an intuitive and user-friendly interface.

- \*\*The website is designed to be responsive and provide an optimal experience on both desktop and mobile devices.
- **Engaging Animations:** Experience captivating animations throughout the website that enhance user engagement.

- **Contact and Support:** Connect with the Gun Care Line team for assistance and inquiries in the "Contacts" section.

- **Product Showcase:** Explore a wide range of high-quality gun care products in the "Products" section.

- **Interactive Maps:** Find authorized service centers near you with the integrated Google Maps feature.

- **Multilingual Support:** Access translations in multiple languages through the "Language" directory.

- **Privacy Assurance:** Review the comprehensive privacy policy and access important documents in PDF format in the "PrivacyPolicy" section.

- **Social Sharing:** Share valuable content and gun care tips on social media using the "ShareSocial" components.

- **Future Development:** The project is designed for scalability, with planned features including user accounts, order processing, and personalized recommendations.

## Code Structure

```
DayPatron
│
├── public
│   ├── images
│   │   ├── index.html
│   │   └── privacy-policy.pdf
│
└── src
    ├── App.jsx
    ├── App.module.css
    │
    ├── components
    │   ├── About
    │   │   ├── About.jsx
    │   │   └── About.module.css
    │   │
    │   ├── Animate
    │   │   ├── Animate_List_Item.jsx
    │   │   └── Animate_List_Item.module.css
    │   │
    │   ├── Contacts
    │   │   ├── Contacts.jsx
    │   │   └── Contacts.module.css
    │   │
    │   ├── Footer
    │   │   ├── Footer.jsx
    │   │   └── Footer.module.css
    │   │
    │   ├── Forms
    │   │   ├── Form_FeedBack_Contact.jsx
    │   │   ├── Form_FeedBack_Contact.module.css
    │   │   └── FormField.jsx
    │   │
    │   ├── Google_Map
    │   │   └── My_Location.jsx
    │   │
    │   ├── Header
    │   ├── Header.jsx
    │   │   └── Header.module.css
    │   │
    │   ├── Home
    │   │   ├── Home.jsx
    │   │   └── Home.module.css
    │   │
    │   ├── Load_Spinner
    │   │   └── Loader_Spinner.jsx
    │   │
    │   ├── NotFound
    │   │   ├── NotFound.jsx
    │   │   └── NotFound.module.css
    │   │
    │   └── PrivacyPolicy
    │       ├── PdfViewer.jsx
    │       ├── privacy-policy.pdf
    │       └── PrivacyPolicy.jsx
    │
    ├── Language
    │   ├── en
    │   │   └── translationEn.json
    │   ├── ua
    │   │   └── translationUa.json
    │   │
    │   ├── translationContext.jsx
    │   └── LanguageContext.jsx
    │
    ├── Loader_Spinner
    │   └── Loader_Spinner.jsx
    │
    ├── Products
    │   ├── Product-items.jsx
    │   ├── Product-items.module.css
    │   ├── Product.jsx
    │   └── Product.module.css
    │
    ├── ShareSocial
    │   ├── FacebookShare.jsx
    │   ├── TwitterShare.jsx
    │   └── ViberShare.jsx
    │
    ├── utils
    │
    ├── Where_To_Buy
    │   ├── Where_To_Buy.jsx
    │   └── Where_To_Buy.module.css
    │
    ├── assets
    │
    ├── index.css
    └── index.jsx

```

## Directory Structure

### `public`

This directory contains files that are directly served to the client without any processing. These files are usually static assets like images, fonts, and the main `index.html` file that serves as the entry point for the application.

### `src`

This directory contains the main source code of your web application. It's typically where you build and organize your components, styles, and other resources.

- `App.jsx`: The main entry point of your application where you might set up routing and other high-level configurations.
- `App.module.css`: Styles specific to the `App.jsx` component.
- `components`: A directory where you organize various components of your application.

  - `About`: Contains components related to the "About" section.
    - `About.jsx`: The main component for the "About" section.
    - `About.module.css`: Styles specific to the "About" component.
  - `Animate`: Components related to animations.

    - `Animate_List_Item.jsx`: A component for animating list items.
    - `Animate_List_Item.module.css`: Styles specific to the animation component.

  - `Contacts`: Components related to contact information.

    - `Contacts.jsx`: The main component for displaying contact information.
    - `Contacts.module.css`: Styles specific to the contact component.

  - `Footer`: Components for the footer section of the application.

    - `Footer.jsx`: The main footer component.
    - `Footer.module.css`: Styles specific to the footer component.

  - `Forms`: Components related to forms and user input.

    - `Form_FeedBack_Contact.jsx`: A form for providing feedback or contacting.
    - `Form_FeedBack_Contact.module.css`: Styles specific to the form component.
    - `FormField.jsx`: A reusable form field component.

  - `Google_Map`: Components related to Google Maps integration.

    - `My_Location.jsx`: A component to display the user's location on a map.

  - `Header`: Components for the header/navigation section.

    - `Header.jsx`: The main header component.
    - `Header.module.css`: Styles specific to the header component.

  - `Home`: Components for the home page.

    - `Home.jsx`: The main home page component.
    - `Home.module.css`: Styles specific to the home page component.

  - `Home_Benefits_Info`: Components for displaying benefits information on the home page.

    - `Home_Benefits_Info.jsx`: The main component for benefits information.
    - `Home_Benefits_Info.module.css`: Styles specific to the benefits component.

  - `Load_Spinner`: A component for displaying a loading spinner.

    - `Loader_Spinner.jsx`: The loading spinner component.

  - `NotFound`: Components for handling "404 Not Found" pages.

    - `NotFound.jsx`: The component for the "404 Not Found" page.
    - `NotFound.module.css`: Styles specific to the "404 Not Found" component.

  - `PrivacyPolicy`: Components related to the privacy policy.
    - `PdfViewer.jsx`: A component for displaying PDF documents.
    - `privacy-policy.pdf`: The privacy policy PDF file.
    - `PrivacyPolicy.jsx`: The main privacy policy component.

- `Language`: This directory contains language-related files for internationalization (i18n) support.

  - `en`: Translation files for English.
    - `translationEn.json`: JSON file containing translations for English.
  - `ua`: Translation files for Ukrainian.
    - `translationUa.json`: JSON file containing translations for Ukrainian.
  - `translationContext.jsx`: A context for managing language translations.
  - `LanguageContext.jsx`: A context for language settings.

- `Loader_Spinner`: A separate directory for a loading spinner component.

  - `Loader_Spinner.jsx`: The loading spinner component.

- `Products`: Components related to product information.

  - `Product-items.jsx`: Component for displaying a list of product items.
  - `Product-items.module.css`: Styles specific to the product items component.
  - `Product.jsx`: Component for displaying detailed product information.
  - `Product.module.css`: Styles specific to the product component.

- `ShareSocial`: Components related to social media sharing.

  - `FacebookShare.jsx`: A component for sharing content on Facebook.
  - `TwitterShare.jsx`: A component for sharing content on Twitter.
  - `ViberShare.jsx`: A component for sharing content on Viber.

- `utils`: A directory for utility components or functions.

  - `Where_To_Buy`: Components related to providing information about where to buy products.
    - `Where_To_Buy.jsx`: The main component for "Where to Buy" information.
    - `Where_To_Buy.module.css`: Styles specific to the "Where to Buy" component.

- `assets`: A directory for general assets that don't fit into the other categories.

- `index.css`: The main CSS
- `index.jsx`: The entry point for rendering your React app into the DOM.

##Tech Stack

<p align="left">
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="100" height="100"/>
  </a>
  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="100" height="100"/>
  </a>
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="100" height="100"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="100" height="100" />
  </a>
  <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" width="100" height="100" />
  </a>
  <a href="https://mongoosejs.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="100" height="100" />
</p>
