document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("clickHandler").addEventListener("click",()=>{
        document.querySelector(".tick__icons_3").style.display="inline";
        document.querySelector(".tick__icons_1").style.display="none";
        document.querySelector(".tick__icons_4").style.display="none";
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,{todo:"yescanscroll"})
        })
    })
    document.getElementById("clickHandler_1").addEventListener("click",()=>{
        document.querySelector(".tick__icons_1").style.display="inline";
        document.querySelector(".tick__icons_3").style.display="none";
        document.querySelector(".tick__icons_4").style.display="none";
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,{todo:"storescroll"})
        })
    })
    document.getElementById("clickHandler_2").addEventListener("click",()=>{
        document.querySelector(".tick__icons_4").style.display="inline";
        document.querySelector(".tick__icons_3").style.display="none";
        document.querySelector(".tick__icons_1").style.display="none";
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,{todo:"delscroll"})
        })
    })
})

