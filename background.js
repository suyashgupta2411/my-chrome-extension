// This script handles background operations for the extension

// Define the URL of your new homepage
const HOMEPAGE_URL = chrome.runtime.getURL("index.html");

// When the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed or updated");
  // Set the new homepage URL as the new tab page
  chrome.storage.local.set({ homepage: HOMEPAGE_URL });
});

// Listen for new tab creation
chrome.tabs.onCreated.addListener((tab) => {
  // If a new tab is created, redirect to the new homepage
  if (tab.url === "chrome://newtab/" || tab.url === "about:newtab") {
    chrome.storage.local.get("homepage", (data) => {
      if (data.homepage) {
        chrome.tabs.update(tab.id, { url: data.homepage });
      }
    });
  }
});

// Listen for when the user opens a new tab
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // If the new tab is loading, redirect to the new homepage
  if (
    (changeInfo.status === "loading" && tab.url === "chrome://newtab/") ||
    tab.url === "about:newtab"
  ) {
    chrome.storage.local.get("homepage", (data) => {
      if (data.homepage) {
        chrome.tabs.update(tabId, { url: data.homepage });
      }
    });
  }
});
