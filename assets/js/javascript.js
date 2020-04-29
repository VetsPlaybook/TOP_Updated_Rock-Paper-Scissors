
let rockHilighted = document.querySelector('.rock');
let paperHilighted = document.querySelector('.paper');
let scissorHilighted = document.querySelector('.scissor');
let outcome = document.querySelector('.result');
let cpuImage = document.querySelector('.image');
let playerScore = document.querySelector('.playerScore')
let playerPoints = 1;
let cpuScore = document.querySelector('.cpuScore')
let cpuPoints = 1;
let gameActive = true;
let maxPoints = 6;
console.log(playerPoints);

function playerScoreUpdate(){
	playerScore.innerText = 'Player Score:' + ' ' + playerPoints;
	playerPoints++;
	winner();
	console.log(playerPoints);
}

function cpuScoreUpdate(){
	cpuScore.innerText = 'CPU Score:' + ' ' + cpuPoints;
	cpuPoints++;
	winner();
}

//Replace icon on each click
function removeClass(){
	cpuImage.classList.remove('fa-hand-rock-o');
	cpuImage.classList.remove('fa-hand-scissors-o');
	cpuImage.classList.remove('fa-hand-paper-o');		
	}


//Animates Rock, Paper, Scissor Icons when mouse hovers over
rockHilighted.addEventListener('mouseover', function(e){
	rockHilighted.classList.add('highlight');
});

rockHilighted.addEventListener('mouseout', function(e){
	rockHilighted.classList.remove('highlight');
});

paperHilighted.addEventListener('mouseover', function(e){
	paperHilighted.classList.add('highlight');
});

paperHilighted.addEventListener('mouseout', function(e){
	paperHilighted.classList.remove('highlight');
});

scissorHilighted.addEventListener('mouseover', function(e){
	scissorHilighted.classList.add('highlight');
});

scissorHilighted.addEventListener('mouseout', function(e){
	scissorHilighted.classList.remove('highlight');
});



//Player Choice to be evaluated
let playerSelection = '';



//Player Selection based on clicking Rock
rockHilighted.addEventListener('click', function(e){
playerSelection = 'rock';
removeClass();
playRound();
});

//Player Selection based on clicking Paper
paperHilighted.addEventListener('click', function(e){
playerSelection = 'paper';
removeClass();
playRound();
});

//Player Selection based on clicking Scissor
scissorHilighted.addEventListener('click', function(e){
playerSelection = 'scissor';
removeClass();
playRound();
});


//Computer's Choice
function computerChoice(){
	// Chooses a random string from the array "choices", and returns it
	let choices = ['rock', 'paper', 'scissor'];	
	let getRandom = choices[Math.floor(Math.random()*choices.length)];
	return getRandom;			
}

function winner(){
	if (playerPoints == maxPoints){
		playerScore.innerText ='Player Score: You are the winner.';
		gameActive = false;
	} else if (cpuPoints == maxPoints){
		cpuScore.innerText = 'CPU Score: You are the winner.';
		gameActive = false;
	}
}

function playRound(){
	if(gameActive){
	//Evaluate choices from Player and CPU and outputs image & text
	let computerSelection = computerChoice(); //This must be here for cpu to keep making choices
	if (playerSelection == 'rock' && computerSelection == 'rock'){
		outcome.innerText ='Both chose rock. Tie!';
		cpuImage.classList.add('fa-hand-rock-o');
	} else if (playerSelection == 'rock' && computerSelection == 'scissor'){
		outcome.innerText ='Rock beats scissor. You win!';
		cpuImage.classList.add('fa-hand-scissors-o');
		playerScoreUpdate();
	}else if (playerSelection == 'rock' && computerSelection == 'paper'){
		outcome.innerText ='Paper beats rock. You lose!';
		cpuImage.classList.add('fa-hand-paper-o');
		cpuScoreUpdate();
	}else if (playerSelection == 'scissor' && computerSelection == 'rock'){
		outcome.innerText ='Rock beats scissor. You lose!';
		cpuImage.classList.add('fa-hand-rock-o');
		cpuScoreUpdate();
	}else if (playerSelection == 'scissor' && computerSelection == 'scissor'){
		outcome.innerText ='Both chose scissor. Tie!';
		cpuImage.classList.add('fa-hand-scissors-o');
	}else if (playerSelection == 'scissor' && computerSelection == 'paper'){
		outcome.innerText ='Scissor beats paper. You win!';
		cpuImage.classList.add('fa-hand-paper-o');
		playerScoreUpdate();
	}else if (playerSelection == 'paper' && computerSelection == 'rock'){
		outcome.innerText ='Paper beats rock. You win!';
		cpuImage.classList.add('fa-hand-rock-o');
		playerScoreUpdate();
	}else if (playerSelection == 'paper' && computerSelection == 'scissor'){
		outcome.innerText ='Scissor beats paper. You lose!';
		cpuImage.classList.add('fa-hand-scissors-o');
		cpuScoreUpdate();
	}else if (playerSelection == 'paper' && computerSelection == 'paper'){
		outcome.innerText ='Both chose paper. Tie!';
		cpuImage.classList.add('fa-hand-paper-o');
	}
}

}

winner();