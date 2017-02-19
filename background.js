console.log(chrome.webRequest);
let filter = {
  urls: ['<all_urls>']
};

chrome.webRequest.onBeforeRequest.addListener(details => {
    return { redirectUrl: chrome.extension.getURL('youdontneedthis.jpg')};

}, { urls: ['<all_urls>'], types: ['image']}, ['blocking', 'requestBody']);

// chrome.webRequest.onBeforeSendHeaders.addListener(details => {
//     // console.log('onBeforeSendHeaders', details);
//     for (var i = 0; i < details.requestHeaders.length; ++i) {
//         // if (details.requestHeaders[i].name === 'User-Agent') {
//         //     details.requestHeaders.splice(i, 1);
//         //     break;
//         // }
//         if (details.requestHeaders[i].name === 'Accept-Language') {
//             // details.requestHeaders[i].value = 'es';
//         }
//     }
//
//     console.log(details);
//     // https://pagead2
//     return { requestHeaders: details.requestHeaders }
// }, filter, ['blocking', 'requestHeaders']);

chrome.webRequest.onHeadersReceived.addListener(headers => {
    console.log('onHeadersReceived', headers);
}, { urls: ['<all_urls>']} ,['blocking'])

