/* eslint-disable no-undef */

// chrome.runtime.onConnect.addListener(function (devToolsConnection) {
//     console.log('devToolsConnection', devToolsConnection);

//     chrome.runtime.onMessage.addListener(function (
//         request,
//         sender,
//         sendResponse
//     ) {
//         console.log(request);
//         devToolsConnection.postMessage(request);
//     });

//     devToolsConnection.postMessage({ 'message ': 'new messaged shared' });
// });

// chrome.runtime.onMessageExternal.addListener(function (
//   request,
//   sender,
//   sendResponse
// ) {
//   console.log(request, sender);
//   sendResponse('devtool connected');
//   devToolsConnection.postMessage({ 'message' : 'Recieved from web page' })
// });
