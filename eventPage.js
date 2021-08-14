chrome.runtime.onMessage.addListener(function (request, sender, sendResponce) {
    if (request.todo == "showPageAction") {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id)
        })
    }
})