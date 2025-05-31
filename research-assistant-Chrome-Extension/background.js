chrome.runtime.onInstalled.addListener(() => {
  if (chrome.sidePanel?.setPanelBehavior) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  } else {
    console.warn('chrome.sidePanel.setPanelBehavior is not supported in this version of Chrome');
  }
});
