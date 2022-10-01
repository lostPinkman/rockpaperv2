const choice = ['rock', 'paper', 'scissors'];
const compChoice = function(){
   return choice[Math.floor((Math.random() *choice.length))]
}
const yourChoice = document.querySelector('.player')
const computerChoice = document.querySelector('.computer')
const span1 = document.querySelector('.player')
const span2 = document.querySelector('.computer')
const totalGames = document.querySelector('.totalgames')
const score = document.querySelector('.score')

let total = 0;
let cScore = 0;
let pScore = 0;

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', () => {
    
    span1.classList.add('spancolorgreen')
    span2.classList.add('spancolorred') 
    const playerChoice = button.className
    const compSelection = compChoice()
    yourChoice.textContent = `${playerChoice}`;
    computerChoice.textContent = `${compSelection}`;
    console.log(playerChoice)
    console.log(compSelection)
    if (playerChoice === compSelection) {
        console.log("tie"); 
        total += 1;
        totalGames.textContent = `Total: ${total}`;
        score.textContent = `Player score: ${pScore}
        Computer score: ${cScore}`
        
    }
    else if((playerChoice === 'rock' && compSelection === 'scissors') || 
        (playerChoice === 'paper' && compSelection === 'rock') || 
        (playerChoice === 'scissors' && compSelection === 'paper')) {
            console.log('win'); 
            pScore += 1; 
            total+=1;
            totalGames.textContent = `Total: ${total}`
            score.textContent = `Player score: ${pScore}
            Computer score: ${cScore}`
        }
            
    else {
        console.log('lose');
        cScore += 1;
        total+=1;
        totalGames.textContent = `Total: ${total}`
        score.textContent = `Player score: ${pScore}
            Computer score: ${cScore}`
    }
    if (total >= 5 && pScore > cScore) {
            alert(`Congratulations! You win with score: ${pScore}`)
            resetGame();
    }
    else if (total >= 5 && pScore < cScore){
        alert(`Unfortunately you lost. Try again!`); 
        resetGame();
    }
    else if (total >= 5 && pScore === cScore) {
        alert(`TIE. Try again!`); 
        resetGame();
    }
        
}))




function resetGame () {
    total = 0;
    cScore = 0;
    pScore = 0;
    yourChoice.textContent = `---`;
    computerChoice.textContent = `---`;
    totalGames.textContent = `Total:`
    score.textContent = `Score:`
    span1.classList.toggle('spancolorgreen')
    span2.classList.toggle('spancolorred')

}

