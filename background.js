// Define a variable to store website activity
const websiteActivity = {};

// Function to update website activity
function updateWebsiteActivity(tabId, tabUrl, tabTitle) {
  const now = Date.now();
  const domain = new URL(tabUrl).hostname.replace(/^www\./, '');
  if (!websiteActivity[domain]) {
    websiteActivity[domain] = { totalTime: 0 };
  }
  websiteActivity[domain].totalTime += now - (websiteActivity[domain].startTime || now);
  websiteActivity[domain].startTime = now;

  console.log(`Total time spent on ${tabTitle}: ${websiteActivity[domain].totalTime / 1000} seconds`);
}

// Listen for tab activations
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab && tab.url && tab.title) {
      updateWebsiteActivity(activeInfo.tabId, tab.url, tab.title);
    }
  });
});
