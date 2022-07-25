
 function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const RandomRGB = () =>{
    R = randomIntFromInterval(0, 255)
    G = randomIntFromInterval(0, 255)
    B = randomIntFromInterval(0, 255)
    return "rgb(" + R + "," + G + "," + B + ")"
 }

 const GameVariables = {
    Timer : document.getElementById('Time'),
    nextround : document.getElementById('NextRound'),
    CubeHTML : document.getElementById('Square'),
    Stalas : document.getElementById('Stalas'),
    VisasTimer : document.getElementById('Timing'),
    VisasRaundas : document.getElementById('Timing2'),
    Start : document.getElementById('Start'),
    Egg : document.getElementById('Egg'),
    entitled : document.getElementById('entitled'),
    NextRound :5,
    Cube :0,
    Player :0,
    CubeScore :0,
    PlayerScore :0,
    RoundTimer :30,
    Round :0,
    PlayAgain : false
}

const Pradzia = () =>{
   Intervalas = setInterval((ROUND),1000)
   GameVariables.Start.style.display = "none"
   GameVariables.VisasRaundas.style.display = "none"
   GameVariables.CubeHTML.style.display = "block"
   GameVariables.entitled.style.display = "none"
   if(GameVariables.PlayAgain == true){
    GameVariables.Stalas.innerHTML = ''
    GameVariables.Round = 0
   }
}

function playAudio() {
    new Audio("PewPew.mp3").play("PewPew.mp3");
  }

const ROUND = () =>{
    GameVariables.NextRound = 5
    GameVariables.VisasTimer.style.display = "block"
    GameVariables.Egg.style.display = "none"
    Locked = false
    GameVariables.PlayAgain = false
    GameVariables.Cube += 1
    GameVariables.RoundTimer -= 1
    GameVariables.Timer.textContent = GameVariables.RoundTimer
    GameVariables.CubeHTML.style.backgroundColor = RandomRGB()
    GameVariables.CubeHTML.style.top = randomIntFromInterval(10,90) + "%"
    GameVariables.CubeHTML.style.left = randomIntFromInterval(15,90) + "%"

    if(GameVariables.RoundTimer == 0){
        clearInterval(Intervalas)
        GameVariables.RoundTimer = 30
        GameVariables.Round += 1
        GameVariables.Timer.textContent = GameVariables.RoundTimer
        GameVariables.CubeHTML.style.top = "49%"
        GameVariables.CubeHTML.style.left = "48%"

        if(GameVariables.Cube > GameVariables.Player){
            GameVariables.CubeScore +=1
            GameVariables.VisasTimer.style.display = "none"
            GameVariables.Stalas.innerHTML += `<tr class="table-danger">
            <td>`+GameVariables.Round+`</td>
            <td>`+GameVariables.Player+`</td>
            <td>`+GameVariables.Cube+`</td>
            <td>Cube</td>
            </tr>`
        }
        else if(GameVariables.Cube < GameVariables.Player){
            GameVariables.PlayerScore +=1
            GameVariables.VisasTimer.style.display = "none"
            GameVariables.Stalas.innerHTML += `<tr class="table-success">
            <td>`+GameVariables.Round+`</td>
            <td>`+GameVariables.Player+`</td>
            <td>`+GameVariables.Cube+`</td>
            <td>Player</td>
            </tr>`
        }
        else if(GameVariables.Cube == GameVariables.Player){
            GameVariables.VisasTimer.style.display = "none"
            GameVariables.Stalas.innerHTML += `<tr class="table-primary">
            <td>`+GameVariables.Round+`</td>
            <td>`+GameVariables.Player+`</td>
            <td>`+GameVariables.Cube+`</td>
            <td>Draw</td>
            </tr>`
        }
        if(GameVariables.Round == 10){
            if(GameVariables.CubeScore > GameVariables.PlayerScore){
                GameVariables.entitled.innerHTML = "Cube Wins!!!"
            }
            else if(GameVariables.CubeScore < GameVariables.PlayerScore){
                GameVariables.entitled.innerHTML = "Meh you win this time -.-"
            }
            else if(GameVariables.CubeScore == GameVariables.PlayerScore){
                GameVariables.entitled.innerHTML = "The damn French ship won...."
            }
            GameVariables.entitled.style.display = "block"
            GameVariables.PlayAgain = true
        }
        GameVariables.Cube = 0
        GameVariables.Player = 0
        GameVariables.VisasRaundas.style.display = "block"
        GameVariables.CubeHTML.style.display = "none"
        Raundas = setInterval((TimeTillNextRound),1000)
    }
}

const Clicker = () =>{
    if(Locked == false){
    GameVariables.Cube -= 1
    GameVariables.Player +=1
    Locked = true
    playAudio()
    GameVariables.Egg.style.display = "block"
}
}

const TimeTillNextRound = () =>{
    GameVariables.NextRound -=1
    GameVariables.nextround.textContent = GameVariables.NextRound
    if(GameVariables.Round < 10){
    if(GameVariables.NextRound == 0){
        GameVariables.nextround.textContent = "5"
        clearInterval(Raundas)
        Pradzia()
    }
}
else if(GameVariables.Round == 10){
    clearInterval(Raundas)
    GameVariables.VisasRaundas.style.display = "none"
    GameVariables.Start.textContent = "Play Again?"
    GameVariables.Start.style.display = "block"
}
}
