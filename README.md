# Keyko Coding Test - Frontend

![Build Status](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Build Status](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Build Status](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Build Status](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Build Status](https://img.shields.io/badge/Dexie.js-tomato?style=for-the-badge&logo=dexie&logoColor=white) 

Simple React application managing your User Contacts.

## Functions

- Create Contact
- View Contact Details
- Update Contact
- Delete Contact

## Folder Structure

+ public/
+ src/
    + components/
        + Contacts/
            + Add/
            + Details/
            + Edit/
        + Footer/
        + Homepage/
        + Navigation/
            + _test/
    + layouts/
    + modules/
    + pages/

## Folder Structure Explanation

`public/` Contains the build files of the application.

`src/` Contains 4 folders **(* components, layouts, modules, pages *)** and the additional files of the app like (App.js, index.js, etc).

`src/components/` Contains 4 folders (Contacts, Footer, Homepage, Navigation) which defines the components used in application.

`src/components/Contacts/` Contains 3 folders (Add, Details, Edit) which describes the main functions of the application. The folders contains also 3 components (AddContactCard.js, ContactCard.js, HeaderTitle.js).

`src/components/Contacts/Add/` Contains 4 components (CancelButton.js, Input.js, Select.js, SubmitButton.js).

`src/components/Contacts/Details/` Contains 1 component (ContactProfile.js).

`src/components/Contacts/Edit/` Contains 4 components (CancelButton.js, Input.js, Select.js, SubmitButton.js).

`src/components/Footer/` Contains 1 component (Footer.js).

`src/components/Header/` Contains 2 components (Header.js, HeaderButton.js).

`src/components/Navigation/` Contains 1 folder (-test-) and 1 component (Navigation.js).

`src/components/Navigation/__test__/` Contains 1 file (Navigation.test.js).

`src/components/layouts/` Contains 1 component (DefaultLayout.js).

`src/components/modules/` Contains 1 file (DexieDatabase.js) which contains the setup of the application database.

`src/components/pages/` Contains 5 files (ContactAdd.js, ContactDetails.js, ContactEdit.js, Contacts.js, Home.js).

## Workflow
The app starts with the Homepage screen which contains the navigation which is a global component and contains a logo made from 2 elements (an svg icon and some text) and also 2 NavLinks , the main section of the app which is dynamic and the footer of the app that contains which is also global ans contains some text.
Into the main section of the homepage, the application has a title, description and a call to action button.

The Contacts page contains a header title which describes what the page is about, a card that contains a button which acts like a call to action button. Next to the card will be the contact cards which will be added later.

The next page is the add contact page that will show when the call to action button from the contacts page card is clicked.

The add contact page contains a header title which describes what the page is about and a form which contains some inputs and some call to action buttons.

Submitting the add contact form will add a new contact in the database and the page will be redirected to the contacts page that will show all the contacts added.

By clicking the contact card view details button, the page is gonna change to view contact details page which is gonna show all the contact details.

This page contains also two call to action buttons (Delete and Edit contact details).

By pressing the Delete button a popup will appear asking if you are sure you want to delete the contact and you can confirm the action or decline it.

By pressing the Edit contact details button the page is gonna change and will be redirected to the edit contact details page.

The edit contact details page contains a header title which describes what the page is about and a form which contains some inputs and some call to action buttons.

Submitting the edit contact details form will update the contact details in the database and the page will be redirected to the contacts page that will show the updated contact information.

## Dependencies

The application is currently extended with the following plugins.

| Plugin | Link |
| ------ | ------ |
| Craco | [https://github.com/gsoft-inc/craco](https://github.com/gsoft-inc/craco) |
| Dexie.js | [https://dexie.org](https://dexie.org/) |
| dexie-react-hooks | [https://dexie.org/docs/libs/dexie-react-hooks](https://dexie.org/docs/libs/dexie-react-hooks) |
| React Hook Form | [https://react-hook-form.com](https://react-hook-form.com/) |
| React Router | [https://reactrouter.com](https://reactrouter.com/) |
| Autoprefixer | [https://github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer) |
| fake-indexeddb| [https://www.npmjs.com/package/fake-indexeddb](https://www.npmjs.com/package/fake-indexeddb) |
| PostCSS | [https://postcss.org](https://postcss.org/) |
| Tailwindcss | [https://tailwindcss.com](https://tailwindcss.com/) |

## Installation

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
```
## Building for production


```sh
npm build
```

## Testing


```sh
npm test
```