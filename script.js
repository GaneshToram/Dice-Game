'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
let player = 1;

document.querySelector('.btn--new').textContent = "🎲 Start";
player0.classList.remove('player--active');

dice.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;

const rollDice = function(){
    const num = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${num}.png`;
    if(player == 1)
    {
        if(num === 1)
        {
            player = 2;
            currentScore0.textContent = 0;
            player0.classList.remove('player--active');
            player1.classList.add('player--active');

        }
        else
        {
            currentScore0.textContent = Number(currentScore0.textContent) + num;
        }
    }
    else
    {
        if(num === 1)
        {
            player = 1;
            currentScore1.textContent = 0;
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
        }
        else
        {
            currentScore1.textContent = Number(currentScore1.textContent) + num;
        }
    }
}

const checkScore = function(score, player){
    if(score >= 100)
    {
        if(player == 1)
        {
            document.querySelector('.winner').textContent = "Winner : Player1";
        }
        else
        {
            document.querySelector('.winner').textContent = "Winner : Player2";
        }
        document.querySelector('.modal').classList.remove('hidden');
    }
}

const holdDice = function(){
    if(player == 1)
    {
        score0.textContent = Number(score0.textContent) + Number(currentScore0.textContent);
        checkScore(Number(score0.textContent), 1);
        player = 2;
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
        currentScore0.textContent = 0;
    }
    else
    {
        score1.textContent = Number(score1.textContent) + Number(currentScore1.textContent);
        checkScore(Number(score1.textContent), 2);
        player = 1;
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
        currentScore1.textContent = 0;
    }
}

const newGame = function(){
    document.querySelector('.btn--new').textContent = "🔄 New game";
    dice.classList.remove('hidden');
    document.querySelector('.modal').classList.add('hidden');
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
}

document.querySelector('.btn--new').addEventListener('click', newGame);
document.querySelector('.btn--roll').addEventListener('click', rollDice);
document.querySelector('.btn--hold').addEventListener('click', holdDice);
document.querySelector('.close-modal').addEventListener('click', newGame);


