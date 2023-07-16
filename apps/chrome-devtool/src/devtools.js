/* eslint-disable no-undef */
chrome.devtools.panels.create(
    'Chrome Log',
    './assets/images/chrome.png',
    'index.html',
    () => {
        console.log('pannel created');
    }
);
