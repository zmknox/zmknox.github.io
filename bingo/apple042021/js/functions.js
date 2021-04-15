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
				imageElement.innerHTML = "<img src=\"" + result.imageURL + "\" alt=\"" + result.name + "\" width=\"600\" class=\"img-fluid\"></img>"
			}
		}
	});
}

function generate() {
	$.ajax({
    	url : ('cardEntries.json'),
    	success : function(result){
			var x = 0;
			for(var i in result.entries) {
				x++;
			}
			var used = [];
			for(var i = 0; i < x; i++) {
				used[i] = false;
			}
			var freeSpace = document.getElementById("freeSpace");
			for(var i = 1; i <= 25; i++) {
				var element = document.getElementById(i.toString());
				$(element).removeClass("red-cell");
				$(element).removeClass("white-cell")
				$(element).removeClass("blue-cell");
				$(element).addClass("white-cell")
				if(i == 13 && freeSpace.checked == true) {
					element.innerHTML = result.freespaceTest;
				}
				else{
					var chosen = true;
					while(chosen) {
						var rand = Math.random() * (x - 1) + 1;
						var placing = Math.round(rand) - 1;
						if(!used[placing] || result.allowRepeats) {
							element.innerHTML = result.entries[placing];
							chosen = false;
							used[placing] = true;
						}
					}
				}
			}
    	}
	});
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
	});
});