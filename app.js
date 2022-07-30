let title = document.querySelector("#title");
let meme = document.querySelector("#meme");
let another = document.querySelector("#another");

chrome.storage.local.get(['subReddit'], (object) => {
    // object.subReddit
    let url = `https://www.reddit.com/r/${object.subReddit}/random.json`;
    
    fetch(url, {cache: "no-store"})
    .then(response => response.json())
    .then(data => {
        let querieddata = data[0]["data"]["children"][0]["data"];
        if (!querieddata["is_video"]) {
            title.textContent = querieddata["title"];
            meme.setAttribute("src", querieddata["url"]);
        }
    })
    .catch(error => {
        console.log("error")
        console.log(error)
    });
});

another.addEventListener("click", () => {
    
    chrome.storage.local.get(['subReddit'], (object) => {
        // object.subReddit
        let url = `https://www.reddit.com/r/${object.subReddit}/random.json`;
        
        fetch(url, {cache: "no-store"})
        .then(response => response.json())
        .then(data => {
            let querieddata = data[0]["data"]["children"][0]["data"];
            if (!querieddata["is_video"]) {
                title.textContent = querieddata["title"].replace("&amp;", "&");
                meme.setAttribute("src", querieddata["preview"]["images"][0]["source"]["url"].replace("&amp;", "&"));
            }
        })
        .catch(error => {
            console.log("error")
            console.log(error)
        });
    });
});