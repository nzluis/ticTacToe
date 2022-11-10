let cell = document.querySelectorAll('.cell')
let display = document.querySelector('h3')
let player1turn = true
let player
let end = false


const Gameboard = {
    gameboard: []
}

if (Gameboard.gameboard.length === 0) {display.innerText = "Player 1 Start!"}

cell.forEach((spot) => {
    spot.addEventListener('click', (e) => {
        
        if (end == false){
            const childTarget = spot.childNodes[1]
            if(spot.innerText === '') {
                if(player1turn == true) {
                    childTarget.innerText = 'X'
                    player1turn = false
                    display.innerText = 'Player 2, your turn'
                    Gameboard.gameboard[childTarget.dataset.index] = 'X'
                    gameFlow('X')
                } else if (player1turn ==false) {
                    childTarget.innerText = 'O'
                    player1turn = true
                    display.innerText = 'Player 1, your turn'
                    Gameboard.gameboard[childTarget.dataset.index] = 'O'
                    gameFlow('O')
                }
            }
        }           
    })
})


function gameFlow (p) {
    (p === 'X') ? player = 1 : player = 2
    if (Gameboard.gameboard[0]+Gameboard.gameboard[1]+Gameboard.gameboard[2] === (p+p+p)){display.innerText = `PLAYER ${player} WON`; end = true}
    if (Gameboard.gameboard[3]+Gameboard.gameboard[4]+Gameboard.gameboard[5] === (p+p+p)){display.innerText = `PLAYER ${player} WON`; end = true}
    if (Gameboard.gameboard[6]+Gameboard.gameboard[7]+Gameboard.gameboard[8] === (p+p+p)){display.innerText = `PLAYER ${player} WON`; end = true}
    if (Gameboard.gameboard[0]+Gameboard.gameboard[3]+Gameboard.gameboard[6] === (p+p+p)){display.innerText = `PLAYER ${player} WON`; end = true}
    if (Gameboard.gameboard[1]+Gameboard.gameboard[4]+Gameboard.gameboard[7] === (p+p+p)){display.innerText = `PLAYER ${player} WON`; end = true}
    if (Gameboard.gameboard[2]+Gameboard.gameboard[5]+Gameboard.gameboard[8] === (p+p+p)){display.innerText = `PLAYER ${player} WON`; end = true}
    if (Gameboard.gameboard[0]+Gameboard.gameboard[4]+Gameboard.gameboard[8] === (p+p+p)){display.innerText = `PLAYER ${player} WON`; end = true}
    if (Gameboard.gameboard[6]+Gameboard.gameboard[4]+Gameboard.gameboard[2] === (p+p+p)){display.innerText = `PLAYER ${player} WON`; end = true}
    if (end == true) {display.setAttribute('style', 'font-size: 50px')}
    if (end == false && Object.values(Gameboard.gameboard).length === 9) {display.innerText = 'DRAW!';
    display.setAttribute('style', 'font-size: 50px')} 
}