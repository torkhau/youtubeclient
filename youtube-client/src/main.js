import SearchTextBox from './Views/SearchTextBox';
import { Meta } from './Views/htmlElems';
import './style.css';

// work with html tag on page
const htmlDocument = document.getElementsByTagName('html')[0];
htmlDocument.setAttribute('lang', 'en');
// end work with html tag on page
// work with head tag on page
const headHtmlDocument = htmlDocument.getElementsByTagName('head')[0];
const meta = new Meta({ charset: 'UTF-8', content: 'width=device-width, initial-scale=1.0', name: 'viewport' });
headHtmlDocument.appendChild(meta.getElement(document));
const meta1 = new Meta({ name: 'mobile-web-app-capable', content: 'yes' });
const meta2 = new Meta({ name: 'apple-mobile-web-app-capable', content: 'yes' });
headHtmlDocument.appendChild(meta1.getElement(document));
headHtmlDocument.appendChild(meta2.getElement(document));
const titleHeadHTMLDocument = headHtmlDocument.getElementsByTagName('title')[0];
titleHeadHTMLDocument.innerText = 'YouTube Client';
// end work with head tag on page
// work with body tag on page
const bodyHtmlDocument = htmlDocument.getElementsByTagName('body')[0];
// create div search wrapper element
const divBodyDocument = document.createElement('div');
divBodyDocument.setAttribute('class', 'search-wrapper');
// create SearshTextBox element
const searchTextBox = new SearchTextBox({ className: 'search-input', defMassage: 'What do you want to find?' });
divBodyDocument.appendChild(searchTextBox.getElement(document));
searchTextBox.addEventKeydown();
bodyHtmlDocument.appendChild(divBodyDocument);
// work with body tag on page
