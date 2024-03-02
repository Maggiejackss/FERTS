const startClick = document.getElementById("start-button");
const game = document.getElementById("game-section")
let selectedCountry = ""

const toMainMenu = () =>{
    game.replaceChildren()
    const countryBox = document.createElement("div")
    countryBox.innerHTML = selectedCountry
    game.appendChild(countryBox)
}

// Funtion that navigates to country selection after clicking start
const toCountrySelection = async() =>{
    game.replaceChildren()
    const selectCountryBox = document.createElement("div")
    const countryListSelectionBox = document.createElement("ul")
    countryListSelectionBox.id = "country-list-selection"

    let response = await fetch("https://restcountries.com/v3.1/all")
    let data = await response.json()

    // makes a new array with all country names to have access to the .sort method 
    // that lists countries alphabetically
    let countryNames = []
    for(i = 0; i < data.length; i++){
        countryNames.push(data[i].name.official)
    }
    countryNames.sort()
    countryNames.map((country) => {
        const countryListItem = document.createElement("li")
        countryListItem.id = "country-list-item"
        countryListItem.innerText = country
        countryListSelectionBox.appendChild(countryListItem)
        
        //when user clicks on a country it saves it
        // then navigates to main menu
        countryListItem.addEventListener("click", ()=>{
            selectedCountry = country
            toMainMenu()
        }) 
    })
    
    selectCountryBox.innerText = "Select A Country"
    selectCountryBox.id = "select-country-box"

    game.appendChild(selectCountryBox)
    game.appendChild(countryListSelectionBox)
}

startClick.addEventListener("click", () => {
    toCountrySelection()
});