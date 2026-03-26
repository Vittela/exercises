const inputSite = document.getElementById("inputSite")
const searchButton = document.getElementById("searchButton")

console.log("inputSite:", inputSite)
console.log("searchButton:", searchButton)

searchButton.onclick = function () { search(inputSite.value) }

function search(site) {
  window.location = site
}
