let name = document.querySelector("#name");
let nameInput = document.querySelector("#name-input");
let changeBtn = document.querySelector("#change-button");

chrome.storage.local.get(["subReddit"], (object) =>{
    name.textContent = `You Current SubReddit Is ${object.subReddit}.`;
});

changeBtn.addEventListener("click", () => {
    if (nameInput.value == "") {
        alert("You Need To Put The Sub Reddit Name.");
        return;
    }
    let subReddit = nameInput.value;
    chrome.storage.local.set({subReddit}, () =>{
        console.log('SubReddit is set to ' + subReddit);
    });
    alert("Your Sub Reddit is Now " + subReddit);
});