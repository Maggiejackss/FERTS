const startClick = document.getElementById("start-button");
const game = document.getElementById("game-section")

const toMainMenu = () =>{
    game.replaceChildren()
    const selectCountryBox = document.createElement("div")
    selectCountryBox.innerText = "Select A country"
    game.appendChild(selectCountryBox)
}

startClick.addEventListener("click", () => {
    toMainMenu()
});