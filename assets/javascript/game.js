
$(document).ready(function () {
  //your code here


counter = 0;
wins=0;
losses=0;

function Guessnumber() {
	NumberToGuess = Math.floor((Math.random() * 100) + 1);
}

console.log(Guessnumber());

$("#guessnumber").text("Number to be guessed: " + NumberToGuess);



function reset () {
	counter=0;
	Guessnumber();
};

var imagepoints = [23, 20, 57];

for (var i = 0; i < imagepoints.length; i++){

var mineral = $("<img>");

mineral.addClass("mineral-image");

mineral.attr("src", "http://www.hallegeologicalservices.ca/wp-content/uploads/2014/01/goethite.png");

mineral.attr("mineral-points", imagepoints[i]);

$("#minerals").append(mineral)

}

$(".mineral-image").on("click", function() {




var MineralPoints = ($(this).attr("mineral-points"));
mineralvalue = parseInt(MineralPoints);

counter += mineralvalue;

console.log(counter);

$("#score").text("Score so far: " + counter)

if (counter == NumberToGuess) {
	wins++;
	$(".winimagea").css("display", "block");
	$("#win").text("Wins: " + wins)
}

else if (counter > NumberToGuess) {
	losses++;
	$(".lossimage").css("display", "block");
	$("#losses").text("Losses: " + losses);
	reset();
	

}







})


});



