// functions to open a new window 
function randomSubreddit() {
    window.open("https://reddit.com/r/random")
}

chrome.browserAction.onClicked.addListener(randomSubreddit);
