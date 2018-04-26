


function startGame() {
	$("#questions").hide();
	$("#endScreen").hide();

	$("#start").on("click", function() {
		$("#startScreen").hide();
		$("#questions").show();
		gamePlay();
	});
}

function gamePlay() {
	var right = 0;
	var wrong = 0;
	var noAnswer = 0;
	var time = 60;
	var timeUp = false;
	var intervalid;
	var qA = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

// ~~~~<RADIO BUTTON SENSE>~~~~
	$(".option1").on("click", function() {
		qA[0] = ($(this).attr("value"));
	})
	$(".option2").on("click", function() {
		qA[1] = ($(this).attr("value"));
	})
	$(".option3").on("click", function() {
		qA[2] = ($(this).attr("value"));
	})
	$(".option4").on("click", function() {
		qA[3] = $(this).attr("value");
	})
	$(".option5").on("click", function() {
		qA[4] = $(this).attr("value");
	})
	$(".option6").on("click", function() {
		qA[5] = $(this).attr("value");
	})
	$(".option7").on("click", function() {
		qA[6] = $(this).attr("value");
	})
	$(".option8").on("click", function() {
		qA[7] = $(this).attr("value");
	})
// ~~~~<RADIO BUTTON SENSE>~~~~

	function runTime() {
		intervalid = setInterval(decrement, 1000);
	};

	function stopTime() {
		clearInterval(intervalid);
	};

	function decrement() {
		time--;
		$("#time").html(timeConv(time));
		timeMon();
	};

	function timeConv(t) {
		var minutes = Math.floor(t / 60);
		var seconds = t - (minutes * 60);

	    if (seconds < 10) {
	      seconds = "0" + seconds;
	    }
	    if (minutes === 0) {
	      minutes = "00";
	    }
	    else if (minutes < 10) {
	      minutes = "0" + minutes;
	    }
	    return minutes + ":" + seconds;
	};

	function scoreMon() {
		for (i = 0; i < qA.length; i++) {
			if (qA[i] === "true") {
				right ++;
			}
			if (qA[i] === "false") {
				wrong++;
			}
			if (qA[i] === undefined) {
				noAnswer++;
			};
		}
		$("#rights").html("Right: " + right);
		$("#wrongs").html("Wrong: " + wrong);
		$("#unanswered").html("Not Answered: " + noAnswer);
	};

	$("#earlyB").on("click", function(){
		time = 0;
	});

	function timeMon() {
		if (time > 0) {
			timeUp = false
		};
		if (time <= 0) {
			timeUp = true;
			stopTime();
		};
		if (timeUp === true) {
			$("#questions").hide();
			$("#endScreen").show();
		console.log(qA);
			scoreMon();
		};
	};

runTime();
};

startGame();

