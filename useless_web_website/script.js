window.onload = function()
{
    console.log('Window loaded')

    const startBtn = document.getElementById("startBtn")

    startBtn.addEventListener("click", function()
    {
        const homeScreenOff =  document.getElementById('homeScreen');
        const gameScreenOn = document.getElementById('gameScreen');

        homeScreenOff.style.display = "none";
        gameScreenOn.style.display = "flex";
    });


    /***** GAME SCREEN BUTTON INTERACTIONS *****/

    const aButton = document.getElementById("aButton");
    const aButtonFont = document.getElementById("aButtonFont");
    const bButton = document.getElementById("bButton");
    const bButtonFont = document.getElementById("bButtonFont");

    aButton.addEventListener("click", function()
    {
        aButton.style.backgroundColor = "grey";
        aButtonFont.style.color = "white";
    })

    bButton.addEventListener("click", function()
    {
        bButton.style.backgroundColor = "grey";
        bButtonFont.style.color = "white";  
    })






};


