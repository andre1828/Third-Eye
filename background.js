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
