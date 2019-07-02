const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message == "show-search-bar") {
    sendResponse("show the search bar")
    attachSearchBar(createSearchBar())
    focusSearchBar()
  }
})

function attachSearchBar(searchBar) {
  document.body.appendChild(searchBar)
}

function focusSearchBar() {
  document.querySelector("#searchBarInput").focus()
}

function createSearchBar() {
  var searchBar = document.createElement("div")
  searchBar.style.width = "500px"
  searchBar.style.height = "60px"
  searchBar.style.backgroundColor = "#555151"
  searchBar.style.display = "flex"
  searchBar.style.justifyContent = "space-between"
  searchBar.style.position = "fixed"
  searchBar.style.top = "50%"
  searchBar.style.left = "50%"
  searchBar.style.marginLeft = "-210px"
  searchBar.style.border = "1px solid #555151"
  searchBar.style.borderRadius = "15px"
  searchBar.style.zIndex = "10000"

  var input = document.createElement("input")
  input.id = "searchBarInput"
//   input.style.height = "100%"
  input.style.backgroundColor = "#555151"
  input.style.color = "#17BEBB"
  input.style.fontSize = "xx-large"
  input.style.padding = "0px 15px"
  input.style.borderStyle = "none"
  input.style.borderRadius = "15px"

  // input.addEventListener("blur", e =>
  //   document.body.removeChild(e.target.parentElement)
  // )

  input.addEventListener("keyup", e => {
    if (e.target.value.match(urlRegex) !== null) {
      icon.src = urlIcon
    } else {
      icon.src = magnifierIcon
    }

    if(e.keyCode === 13) {
        switchToPopup()
    }
  })

  var icon = document.createElement("img")
  var magnifierIcon = browser.runtime.getURL("magnifier.svg")
  var urlIcon = browser.runtime.getURL("url.svg")
  icon.src = magnifierIcon
  icon.style.width = "30px"
  icon.style.marginRight = "28px"

  searchBar.appendChild(input)
  searchBar.appendChild(icon)

  return searchBar
}

function switchToPopup() {
    detachSearchBar()
}