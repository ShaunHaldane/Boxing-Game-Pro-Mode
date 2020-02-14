// Hard Round Function

function HardboxingCountDown() {
  // Change title titleMessage
  document.getElementById("titleMessage").innerHTML = "Get Ready!!!";
  // Trigger Countdown Audio
  CountDown.play();
  // Go to round count down function
  HardboxingRoundCountDown();
  // Set count down variable to 10 seconds
  var tcd = 11;
  // Start boxing countdown loop
  function HardboxingRoundCountDown() {
    // set timer to trigger between each loop to be 1 section
    setTimeout(function() {
      // Display value of countdown variable
      document.getElementById("printCountDownTimer").innerHTML = tcd + " Seconds";
      // decrease countdown variable by 1
      tcd--;
      // repeat round count down function until tcd = zero
      if (tcd > 0) {
        HardboxingRoundCountDown();
      } else {
        // start the boxing game
        HardBoxingCallFunction();
      }
      // 1 second timer trigger
    }, 1000);
  }
}

// Function to call the function for the combinations and the function for the round timer together
function HardBoxingCallFunction() {
  HardboxingRound();
  HardcombiCallerBoxing();
}

// time variable to count down the round 180 sec(3min)
var t = 180;
// time variable to count down the break
var bt = 30;
// variables to call audio for break
pause = document.getElementById("pauseAudio");
// initialise no of rounds to 1
var NoOfRounds = 1;
// function to countdown the timer for the round and record time left and number of rounds
function HardboxingRound() {
  setTimeout(function() {
    document.getElementById("printCountDownTimer").innerHTML = t + " seconds left";
    document.getElementById("RoundNo").innerHTML = "Round No: " + NoOfRounds;
    t--;
    if (t > 0) {
      HardboxingRound();
    } else {
      // run break audio add one to rounds reset round time and start the break countdown
      pause.play();
      NoOfRounds++;
      t = 180;
      HardboxingBreak();
    }
  }, 1000);
}

// function for the break countdown
function HardboxingBreak() {
  setTimeout(function() {
    document.getElementById("printCountDownTimer").innerHTML = "Break for " + bt + " seconds";
    document.getElementById("titleMessage").innerHTML = "Take a break!";
    bt--;
    if (bt > 11) {
      HardboxingBreak();
    } else {
      HardboxingCountDown();
    }
  }, 1000);
}

// set variables for each Boxing combination audio
LRL = document.getElementById("LRLAudio");
DJC = document.getElementById("DJCAudio");
DJ = document.getElementById("DJAudio");
RLR = document.getElementById("RLRAudio");
LRLR = document.getElementById("LRLRAudio");
RLRL = document.getElementById("RLRLAudio");
LRDLH = document.getElementById("LRDLHAudio");
RLDRH = document.getElementById("RLDRHAudio");
LRLH = document.getElementById("LRLHAudio");
RLRH = document.getElementById("RLRHAudio");
RLRDRLR = document.getElementById("RLRDRLRAudio");
LRLDLRL = document.getElementById("LRLDLRLAudio");
D = document.getElementById("DAudio");
DC = document.getElementById("DCAudio");

// variable to display the remaining amount of combinations
var c = 59;
// function to call the combinations
function HardcombiCallerBoxing() {
  setTimeout(function() {
    //audio array
    var combinationsSound = [D, DJC, LRL, DJ, RLR, LRLR, RLRL, LRDLH, RLDRH, LRLH, RLRH, DC];
    // function to play random audio from combinationSound array
    rand();

    function rand() {
      // variable to select random combination from combinationsSound array
      x = [Math.floor(Math.random() * combinationsSound.length)];
      y = combinationsSound[x].play();
      // Display Combination
      if (x == 0) {
        document.getElementById("titleMessage").innerHTML = "Duck!";
      } else if (x == 1) {
        document.getElementById("titleMessage").innerHTML = "Double Jab Cross!";
      } else if (x == 2) {
        document.getElementById("titleMessage").innerHTML = "Left Right Left!";
      } else if (x == 3) {
        document.getElementById("titleMessage").innerHTML = "Double Jab!";
      } else if (x == 4) {
        document.getElementById("titleMessage").innerHTML = "Right Left Right!";
      } else if (x == 5) {
        document.getElementById("titleMessage").innerHTML = "Left Right Left Right!";
      } else if (x == 6) {
        document.getElementById("titleMessage").innerHTML = "Right Left Right Left!";
      } else if (x == 7) {
        document.getElementById("titleMessage").innerHTML = "Left Right Double Left Hook!";
      } else if (x == 8) {
        document.getElementById("titleMessage").innerHTML = "Right Left Double Right Hook!";
      } else if (x == 9) {
        document.getElementById("titleMessage").innerHTML = "Left Right Left Hook!";
      } else if (x == 10) {
        document.getElementById("titleMessage").innerHTML = "Right Left Right Hook!";
      } else if (x == 11) {
        document.getElementById("titleMessage").innerHTML = "Double Cross!";
      }
      // show how many combinations left
      document.getElementById("printCombi").innerHTML = c + " combinations left";
    }
    //Keep calling a randomly selected combination file until c=0
    if (c > 1) {
      c--;
      HardcombiCallerBoxing();
    } else {
      // Reset the combinations
      c = 59;
    }
    // Call a combination every 3 sec
  }, 3000);
}
