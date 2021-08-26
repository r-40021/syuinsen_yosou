function open(){
    window.open(decodeURIComponent("https://www.sokusiru.com/search?q=%E8%A1%86%E9%99%A2%E9%81%B8%E3%80%80%E4%BA%88%E6%83%B3%E3%80%802021"));
}
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: open
    });
  });