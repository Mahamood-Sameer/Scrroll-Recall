chrome.runtime.sendMessage({ todo: "showPageAction" })


function myFunc(){
    localStorage.setItem(window.location.origin, window.scrollY)
}

window.addEventListener("scroll",myFunc)

chrome.runtime.onMessage.addListener(function (request) {
    window.addEventListener("scroll",myFunc)
    if (request.todo == "yescanscroll") {
        if(localStorage.getItem(window.location.origin))
        window.scrollTo(0, localStorage.getItem(window.location.origin))
    }
})
chrome.runtime.onMessage.addListener(function (request) {
    if (request.todo == "storescroll") {
        window.removeEventListener("scroll",myFunc)
    }
})
chrome.runtime.onMessage.addListener(function (request) {
    if (request.todo == "delscroll") {
        window.addEventListener("scroll",myFunc)
        localStorage.clear()
    }
})


