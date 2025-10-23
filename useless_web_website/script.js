window.onload = function()
{
    //AUDIO OF DOH!
    const aDoh = new Audio("homer_audio/doh_scale/a_doh.mp3");
    const bDoh = new Audio("homer_audio/doh_scale/b_doh.mp3");
    const cDoh = new Audio("homer_audio/doh_scale/c_doh.mp3");
    const dDoh = new Audio("homer_audio/doh_scale/d_doh.mp3");
    const eDoh = new Audio("homer_audio/doh_scale/e_doh.mp3");
    const fDoh = new Audio("homer_audio/doh_scale/f_doh.mp3");
    const gDoh = new Audio("homer_audio/doh_scale/g_doh.mp3");

    //Array to hold all my sound components.
    const dohArray = [aDoh,bDoh,cDoh,dDoh,eDoh,fDoh,gDoh];
    const numArray = [1,2,3,4,5,6,7]

    console.log(dohArray)
    console.log(numArray)

    //Generate Random Number
    let randomNum = Math.floor(Math.random() * numArray.length)
    let useRandomNum = function()
    {
        randomNum
    }

    //Start Button
    const startBtn = document.getElementById("startBtn")

    startBtn.addEventListener("click", function()
    {
        const homeScreenOff =  document.getElementById('homeScreen');
        const gameScreenOn = document.getElementById('gameScreen');

        homeScreenOff.style.display = "none";
        gameScreenOn.style.display = "flex";

        //creating a copy of working code
        //const selectedDoh = dohArray[randomNum];
        const selectedNum = numArray[randomNum]
        console.log(selectedNum)
        const selectedDoh = dohArray[selectedNum];
        console.log(selectedDoh)

        playDohAudio = function()
        {
            selectedDoh.play()    
        }
        
        setTimeout(playDohAudio,1500);
    });


    /***** GAME SCREEN BUTTON INTERACTIONS *****/


    

    //CREATE and GET Buttons
    const aButton = document.getElementById("aButton");
    const aButtonFont = document.getElementById("aButtonFont");
    const bButton = document.getElementById("bButton");
    const bButtonFont = document.getElementById("bButtonFont");
    const cButton = document.getElementById("cButton");
    const cButtonFont = document.getElementById("cButtonFont");
    const dButton = document.getElementById("dButton");
    const dButtonFont = document.getElementById("dButtonFont");
    const eButton = document.getElementById("eButton");
    const eButtonFont = document.getElementById("eButtonFont");
    const fButton = document.getElementById("fButton");
    const fButtonFont = document.getElementById("fButtonFont");
    const gButton = document.getElementById("gButton");
    const gButtonFont = document.getElementById("gButtonFont");

    const replayDoh = document.getElementById("replayDohBtn")

    let correctSelection = 0;
    let wrongSelection = 0; 

    //BUTTONS Functionality

    aButton.addEventListener("click", function()
    {
        if(numArray === 0)
        {
            correctSelection += 1;
            numArray.splice(0,1)

            console.log("correctSelection: " + correctSelection)
            console.log(dohArray)

            aButton.style.backgroundColor = "grey";
            aButtonFont.style.color = "white";
        }
        else
        {
            wrongSelection += 1
            console.log("wrongSelection: " + wrongSelection)
        }
        
    })

    bButton.addEventListener("click", function()
    {
        bButton.style.backgroundColor = "grey";
        bButtonFont.style.color = "white";  
    })

    //REPLAY BUTTON
    replayDoh.addEventListener("click", function(){
        playDohAudio()
    })




};


