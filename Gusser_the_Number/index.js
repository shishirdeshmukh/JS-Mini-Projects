let randomnum = Number((Math.random()*100).toFixed(0))
console.log(randomnum);
const submit= document.querySelector("#subt")
const input = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const lastresult = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []; 
let numGuess = 0;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = Number(input.value)
        Validateguess(guess)
    })
}

function Validateguess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1')
    }
    else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        
        if(numGuess === 11){
            cleanGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomnum}`)
            EndGame()
        }else{
            cleanGuess(guess)
            Checkguess(guess)
        }
    }
}

function Checkguess(guess){
    if(guess === randomnum){
        displayMessage(`Correct! You guessed the number in ${numGuess} guesses!`)
        EndGame()
    }else if(guess < randomnum){
            displayMessage('Number is Too Low')
    }
    else if(guess > randomnum){
            displayMessage('Number is Too High')
    }
}

function cleanGuess(guess){
    input.value = ''
    guessslot.innerHTML += `${guess} , `
    numGuess ++;
    lastresult.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    loworhigh.innerHTML= `<h3>${message}</h3>`
}

function newGame(){
    const newgamebtn = document.querySelector('#newGame');
    newgamebtn.addEventListener('click', function(){
        randomnum = Number((Math.random()*100).toFixed(0))
        prevGuess=[]
        newGame=0
        guessslot.innerHTML=" "
        lastresult.innerHTML =  `${9 - numGuess}`
        input.removeAttribute('disabled','')
        startover.removeChild(p)


        playGame=true;

    })
}

function EndGame(){
   input.value=' ';
   input.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
   startover.appendChild(p) 
   playGame = false
   newGame()
}

