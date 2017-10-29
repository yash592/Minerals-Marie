
$(document).ready(function () {
  //your code here


counter = 0;
wins=0;
losses=0;

var NumberToGuess = Math.floor((Math.random() * 100) + 1);

console.log(NumberToGuess);

$("#guessnumber").text("Number to be guessed: " + NumberToGuess);

var imagepoints = [23, 40, 49];

for (var i = 0; i < imagepoints.length; i++){

var mineral = $("<img>");

mineral.addClass("mineral-image");

mineral.attr("src", "http://www.hallegeologicalservices.ca/wp-content/uploads/2014/01/goethite.png", "https://www.engineering.com/Portals/0/BlogFiles/3D%20Printing/0114/3_ores.png");

mineral.attr("mineral-points", imagepoints[i]);

$("#minerals").append(mineral)

}

$(".mineral-image").on("click", function(){



var MineralPoints = ($(this).attr("mineral-points"));
mineralvalue = parseInt(MineralPoints);

counter += mineralvalue;

console.log(counter);

if (counter == NumberToGuess) {
	alert("You won!");
	wins++;
	$("#win").text("Wins: " + wins)
}

else if (counter > NumberToGuess) {
	alert("You lose!");
	losses++;
	$("#loss").text("Losses: " + losses)
}





})


});



