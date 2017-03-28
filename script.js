console.log("Code loaded");

var score = 0;
var perClick = 1;

var clickUpgraded = false;

$(document).ready(function() {
	console.log("JQuery is Ready");

	$('#title').text('Cookie Clicker is Ready');

	$('#cookie').click(function() {
		console.log("Cookie was Clicked");
		$(this).toggleClass('clicked')

		score += perClick;
		console.log(score);

		$('#score').text(score);

		if(score >= 500) {
			$('#score').append('<h1>Congratulations, You Win!</h1>');
		}

		if(score >= 10 && clickUpgraded == false) {
			$('#upgradePerClick').removeClass('hidden');
		}

		$('#upgradePerClick').text('Upgrade Click Value');

	})

	$('#upgradePerClick').click(function() {
		$(this).addClass('hidden');
		perClick += 1;
		clickUpgraded = true;
	})

	//$('#reset').click(function() {
	//	alert("reset");
	//	$('#cookie').removeClass('clicked');
	//	score = 0;
	//	$('#score').text('0');
	//})
})