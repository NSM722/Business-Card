# Digital Business Card

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

**Install Bootstrap**

```npm package
npm install react-bootstrap bootstrap
```

The following line can be included in your src/index.js or App.js file

```css
import 'bootstrap/dist/css/bootstrap.min.css';
```

**Include Font Awesome Icons CDN**
Versions of the CDN are available at [Font Awesome CDN Links]("https://cdnjs.com/libraries/font-awesome")

This link should be added right after the last available link in the index.html file

A quick tip(example) to include a space between the icons and text :

```html
<i className="fa-solid fa-envelope-open-text" />&nbsp;
```

The business card makes use of Bootstrap card class and includes:

- Image
- Card title
- Card Body
- External Links

---

## Use of the Random User Generator API

This is a free, open-source API for generating random user data. Like Lorem Ipsum, but for people.

For documentation on how to use this API please follow this link [Random User Generator]("https://randomuser.me/")

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.
