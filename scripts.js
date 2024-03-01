const startClick = document.getElementById("start-button");
const game = document.getElementById("game-section")

const toMainMenu = async() =>{
    game.replaceChildren()
    const selectCountryBox = document.createElement("div")
    const countryListSelectionBox = document.createElement("ul")
    

    let response = await fetch("https://restcountries.com/v3.1/all")
    let data = await response.json()

    
    console.log(data[0].name.official)
    

    data.map((country)=>{
        const countryListItem = document.createElement("li")
        countryListItem.innerText = country.name.official
        countryListSelectionBox.appendChild(countryListItem)
    })
    
    selectCountryBox.innerText = "Select A country"
    selectCountryBox.id = "select-country-box"

    game.appendChild(selectCountryBox)
    game.appendChild(countryListSelectionBox)
}

startClick.addEventListener("click", () => {
    toMainMenu()
});