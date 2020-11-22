/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/scss/style.scss';
import './styles/scss/mobileStyles.scss';
import './styles/scss/tabletStyles.scss';
import './styles/scss/hdReadyStyles.scss';
import './styles/scss/fullHDStyles.scss';
import "../node_modules/bootstrap/scss/bootstrap.scss";

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
const $ = require('jquery');

console.log('Hello Webpack Encore! Edit me in assets/app.js');
