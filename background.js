// background.js

chrome.runtime.onInstalled.addListener(() => {
    let subReddit = "ProgrammerHumor";
    chrome.storage.local.set({subReddit}, () =>{
        console.log('SubReddit is set to ' + subReddit);
    });
})