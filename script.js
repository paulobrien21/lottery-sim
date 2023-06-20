function calculatePerDay(count){
	return Math.floor((count/365));
}

function calculatePerWeek(count){
	return Math.floor((count/52));
}

function calculateLifetimes(count){
	return Math.floor((count/365)/90);
}
function generateLotto(){
	let lottoNumbers = [];
	let number;
	for(let i=0; i<6; i++){

		//get random number and check if already exists in array before inserting
		do{
			number = getRandomNumber();
		}
		while(lottoNumbers.includes(number))
		
		lottoNumbers.push(number);
	}

	lottoNumbers.sort((a, b) => a - b);
	return lottoNumbers;
}

function getRandomNumber(){
	let number = Math.floor(Math.random() * (45 - 1) + 1);
	return number;
}

function addSelectionArray(){
	const lottoOne = parseInt(document.getElementById('lotto-one').value);
	const lottoTwo = parseInt(document.getElementById('lotto-two').value);
	const lottoThree = parseInt(document.getElementById('lotto-three').value);
	const lottoFour = parseInt(document.getElementById('lotto-four').value);
	const lottoFive = parseInt(document.getElementById('lotto-five').value);
	const lottoSix = parseInt(document.getElementById('lotto-six').value);

	let selectedNumbers = [lottoOne,lottoTwo, lottoThree, lottoFour, lottoFive, lottoSix];

	selectedNumbers.sort((a, b) => a - b);

	return selectedNumbers;
}

function checkNumbers(selectedNumbers, lottoNumbers){
	let result = true;
	for(let j = 0; j<selectedNumbers.length;j++){
		if(selectedNumbers[j]!==lottoNumbers[j]){
			return result = false;
		}
	}
	return result;
}

function main(){
	let selectedNumbers = addSelectionArray();
	
	let lottoCount = 0;
	const countDisplay = document.getElementById('result-count');
	const perDay = document.getElementById('per-day');
	const perWeek = document.getElementById('per-week');
	const lifetimes = document.getElementById('lifetime');
	do{
		lottoCount++;
		let lottoNumbers = generateLotto();
		result = checkNumbers(selectedNumbers, lottoNumbers);

		if(result){
			if(result){
				countDisplay.textContent = lottoCount + " : WE GOT A MATCH";
				perDay.textContent = "If you did the lotto once per day, it would have taken you roughly "+calculatePerDay(lottoCount)+" years to win";
				perWeek.textContent = "If you did the lotto once per week, it would have taken you roughly "+calculatePerWeek(lottoCount)+" years to win";
				lifetimes.textContent = "If you lived to the age of 90, it would take roughly "+calculateLifetimes(lottoCount)+" lifetimes before you win the lotto (assuming you it once per day)";
				console.log(result);
				console.log("Your Numbers: "+ selectedNumbers);
				console.log("sorted lotto numbers: "+lottoNumbers);
				return;
			}
			else{
				countDisplay.textContent = lottoCount + " : no match...";
				console.log(result);
				return;
			}
			
		}
	}
	while(result===false)
}