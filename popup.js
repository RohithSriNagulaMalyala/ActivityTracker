// Function to fetch website activity data from background script
function fetchWebsiteActivityData() {
    // Access the background script's global variables directly
    const websiteActivity = chrome.extension.getBackgroundPage().websiteActivity;
  
    // Get the ul element where website data will be displayed
    const websiteList = document.getElementById('websiteList');
  
    // Clear any existing data
    websiteList.innerHTML = '';
  
    // Iterate over each website in the activity data
    for (const website in websiteActivity) {
      if (websiteActivity.hasOwnProperty(website)) {
        // Create a new list item element
        const listItem = document.createElement('li');
  
        // Set the text content of the list item to display the website name and time spent
        listItem.textContent = `${website}: ${websiteActivity[website].totalTime / 1000} seconds`;
  
        // Append the list item to the ul element
        websiteList.appendChild(listItem);
      }
    }
  }
  
  // Call the fetchWebsiteActivityData function when the popup is opened
  document.addEventListener('DOMContentLoaded', fetchWebsiteActivityData);
  