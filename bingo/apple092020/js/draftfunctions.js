function title() {
	$.ajax({
		url : ('cardEntries.json'),
		success : function(result){
			var element = document.getElementById("heading");
			element.innerHTML = result.name + " Bingo Card Generator";
			var freeSpace = document.getElementById("freeSpace");
			freeSpace.checked = result.freeSpace;
			if(result.imageURL != "") {
				var imageElement = document.getElementById("image");
				imageElement.innerHTML = "<img src=\"" + result.imageURL + "\" alt=\"" + result.name + "\" width=\"600\"></img>"
			}
		}
	});
}

function generate() {
	$.ajax({
    	url : ('draftEntries.json'),
    	success : function(result){
			document.getElementById("heading").innerHTML = result.name;
			document.getElementById("heading-heardOn").innerHTML = "As heard on <a href=\"" + result.heardOnURL + "\">Upgrade " + result.heardOnNum + "</a>";
			var footer = document.getElementById("footer-url");
			footer.innerHTML = "Upgrade " + result.heardOnNum;
			footer.setAttribute("href", result.heardOnURL);
			for(var i = 1; i <= 11; i++) {
				var roundID = "round" + i;
				var jasonID = i + "-1";
				var jasonPick = result[roundID].jason;
				var mykeID = i + "-2"
				var mykePick = result[roundID].myke;
				var roundNumID = "roundNum" + i;

				var jason = document.getElementById(jasonID)
				jason.innerHTML = jasonPick;
				var myke = document.getElementById(mykeID)
				myke.innerHTML = mykePick;
				//document.getElementById(roundNumID) = i;

				/*
				if(result[roundID].jasonWasRight != null) {
					if (result[roundID].jasonWasRight == true) {
						$(jason).addClass("blue-cell");
						$(jason).removeClass("white-cell");
					} else {
						$(jason).addClass("red-cell");
						$(jason).removeClass("white-cell");
					}
				}
				

				if (result[roundID].mykeWasRight != null) {
					if (result[roundID].mykeWasRight == true) {
						$(myke).addClass("blue-cell");
						$(myke).removeClass("white-cell");
					} else {
						$(myke).addClass("red-cell");
						$(myke).removeClass("white-cell");
					}
				}
				*/
				
				checkResults();
			}
    	}
	});
}

function checkResults() {
	var passing = $(".blue-cell");
	var passingA = passing.filter(".p1");
	var passingB = passing.filter(".p2");
	var p1 = passingA.length;
	var p2 = passingB.length;

	// who needs jQuery anyway
	var element = document.getElementById("total1");
	element.innerHTML = "<h3>" + p1 + "</h3>";
	var element = document.getElementById("total2");
	element.innerHTML = "<h3>" + p2 + "</h3>";
}

function viewResults() {
	$.ajax({
		url: ('draftEntries.json'),
		success: function (result) {
			for (var i = 1; i <= 11; i++) {
				var roundID = "round" + i;
				var jasonID = i + "-1";
				var jasonPick = result[roundID].jason;
				var mykeID = i + "-2"
				var mykePick = result[roundID].myke;
				var roundNumID = "roundNum" + i;

				var jason = document.getElementById(jasonID);
				if ($(jason).hasClass("blue-cell")) {
					$(jason).addClass("white-cell");
					$(jason).removeClass("blue-cell");
				}
				else if ($(jason).hasClass("red-cell")) {
					$(jason).addClass("white-cell");
					$(jason).removeClass("red-cell");
				}

				var myke = document.getElementById(mykeID);
				if ($(myke).hasClass("blue-cell")) {
					$(myke).addClass("white-cell");
					$(myke).removeClass("blue-cell");
				}
				else if ($(myke).hasClass("red-cell")) {
					$(myke).addClass("white-cell");
					$(myke).removeClass("red-cell");
				}

				if (result[roundID].jasonWasRight != null) {
					if (result[roundID].jasonWasRight == true) {
						$(jason).addClass("blue-cell");
						$(jason).removeClass("white-cell");
					} else {
						$(jason).addClass("red-cell");
						$(jason).removeClass("white-cell");
					}
				}

				if (result[roundID].mykeWasRight != null) {
					if (result[roundID].mykeWasRight == true) {
						$(myke).addClass("blue-cell");
						$(myke).removeClass("white-cell");
					} else {
						$(myke).addClass("red-cell");
						$(myke).removeClass("white-cell");
					}
				}

				checkResults();
			}
		}
	});
}

// https://stackoverflow.com/questions/21741841/
function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	// Windows Phone must come first because its UA also contains "Android"
	if (/windows phone/i.test(userAgent)) {
		return "Tap";
	}

	if (/android/i.test(userAgent)) {
		return "Tap";
	}

	// iOS detection from: http://stackoverflow.com/a/9039885/177710
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return "Tap";
	}

	return "Click";
}

$(function () {
	$('th').click(function () {
		if ($(this).hasClass("blue-cell")) {
			$(this).addClass("red-cell");
			$(this).removeClass("blue-cell");
		}
		else if ($(this).hasClass("red-cell")) {
			$(this).addClass("white-cell");
			$(this).removeClass("red-cell");
		}
		else if ($(this).hasClass("white-cell")) {
			$(this).addClass("blue-cell");
			$(this).removeClass("white-cell");
		}

		checkResults();
	});
});