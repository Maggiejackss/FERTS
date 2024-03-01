const startClick = document.getElementById("start-button");
const game = document.getElementById("game-section")

const toMainMenu = async() =>{
    game.replaceChildren()
    const selectCountryBox = document.createElement("div")
    const countryListSelectionBox = document.createElement("ul")

    countryListSelectionBox.id = "country-list-selection"
    

    let response = await fetch("https://restcountries.com/v3.1/all")
    let data = await response.json()

    let countryNames = []
    for(i = 0; i < data.length; i++){
        countryNames.push(data[i].name.official)
        console.log(data[i].name.official)
    }
    countryNames.sort()
    countryNames.map((country) => {
        const countryListItem = document.createElement("li")
        countryListItem.innerText = country
        countryListSelectionBox.appendChild(countryListItem)
        console.log(countryListItem)    
    })
    
    selectCountryBox.innerText = "Select A Country"
    selectCountryBox.id = "select-country-box"

    game.appendChild(selectCountryBox)
    game.appendChild(countryListSelectionBox)
}

startClick.addEventListener("click", () => {
    toMainMenu()
});