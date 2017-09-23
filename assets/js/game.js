
	$(document).ready(function(){

	var wins = 0;
	var losses = 0;

	//generate random target number between 18 - 120

	//generate random numbers and assign one number to each of the four crystals from 1-12


	var targetNumber = Math.floor(Math.random() * 113 + 17)
	
	$('#target-number').text(targetNumber);


	var crystals = [ crystalOne , crystalTwo , crystalThree , crystalFour ];
	var crystalValues = [];
	var totalScore = 0;						

	for(var i = 0; i < 4; i++){
		crystalValues[i] = Math.floor(Math.random() * 11 + 1);
	}
	// for(var j = 0; j < 4; j++){
	// 	crystalValues[i] = crystals[j];
	// }

	//onclick each crystal to add its number to the total below
	var crystalOne = crystalValues[0];
	var crystalTwo = crystalValues[1];
	var crystalThree = crystalValues[2];
	var crystalFour = crystalValues[3];

//Create a function to hold the wins++ and losses++ logic to reduce code duplication

function crystalClick(){
		if(totalScore === targetNumber){
			wins++;
			totalScore = 0;
			$('#win').html('<span>' + wins + '</span>');
			targetNumber = Math.floor(Math.random() * 113 + 17);
			$('#target-number').text(targetNumber);
			for(var i = 0; i < 4; i++){
				crystalValues[i] = Math.floor(Math.random() * 11 + 1);
			}
			// for(var j = 0; j < 4; j++){
			// 	crystalValues[i] = crystals[j];
			// }
			crystalOne = crystalValues[0];
			crystalTwo = crystalValues[1];
			crystalThree = crystalValues[2];
			crystalFour = crystalValues[3];
		}
		//if your score goes over the number above, add to losses.
		if(totalScore > targetNumber){
			losses++;
			totalScore = 0;
			$('#lose').html('<span>' + losses + '</span>');
			targetNumber = Math.floor(Math.random() * 113 + 17);
			$('#target-number').text(targetNumber);
			for(var i = 0; i < 4; i++){
				crystalValues[i] = Math.floor(Math.random() * 11 + 1);
			}
			// for(var j = 0; j < 4; j++){
			// 	crystalValues[i] = crystals[j];
			// }
			crystalOne = crystalValues[0];
			crystalTwo = crystalValues[1];
			crystalThree = crystalValues[2];
			crystalFour = crystalValues[3];
		}
	};

	//Create ONCLICK events for each crystal image

	$('#crystal-1').on('click', function(){
		totalScore += crystalOne;
		crystalClick();
		$('#total-score').html('<h2>' + totalScore + '</h2>');		
	});
	$('#crystal-2').on('click', function(){
		totalScore += crystalTwo;
		crystalClick();
		$('#total-score').html('<h2>' + totalScore + '</h2>');
	});
	$('#crystal-3').on('click', function(){
		totalScore += crystalThree;
		crystalClick();
		$('#total-score').html('<h2>' + totalScore + '</h2>');
	});
	$('#crystal-4').on('click', function(){
		totalScore += crystalFour;
		crystalClick();
		$('#total-score').html('<h2>' + totalScore + '</h2>');
	});
});

