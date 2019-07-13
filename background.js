browser.commands.onCommand.addListener(command => {
  if (command == "show-search-bar") {
    browser.tabs
      .query({ active: true, currentWindow: true })
      .then(tabs => tabs[0].id)
      .then(currentTabId => {
        browser.tabs
          .sendMessage(currentTabId, { message: "show-search-bar" })
          .then(res => console.log(res), err => {})
      })
  }
})

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message == "open-in-tab") {
    console.log("open the tab")
    browser.tabs.create({ url: "https://reddit.com/" }).then(
      res => {
        alert(res)
      },
      error => {
        alert(error)
      }
    )
  }
})
