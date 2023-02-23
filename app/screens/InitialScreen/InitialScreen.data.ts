export const injectedJS = `
window.ReactNativeWebView.postMessage(JSON.stringify(document.documentElement.outerHTML));
window.ReactNativeWebView.onMessage = (event) => {
  try {
    const html = event.data;
    const regex = /&copy;.*?\\d{4}/i;
    const match = html.match(regex);
    if (match) {
      window.ReactNativeWebView.postMessage(JSON.stringify({authorRights: match[0]}));
    } else {
      window.ReactNativeWebView.postMessage(JSON.stringify({authorRights: 'No author rights found on this website.'}));
    }
  } catch (error) {
    console.log(error);
  }
};
`;
