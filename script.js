/*Add your JavaScript here*/

//using DOM to store HTML elements
var playerScore = 0;
var npcScore = 0;
var questionCount = 0;

var result = document.getElementById("result");
var description = document.getElementById("description");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var reset = document.getElementById("reset");

//click buttons and execute the corresponding function

q1a1.addEventListener("click", player);
q1a2.addEventListener("click", npc);

q2a1.addEventListener("click", player);
q2a2.addEventListener("click", npc);

q3a1.addEventListener("click", npc);
q3a2.addEventListener("click", player);

reset.addEventListener("click", restart);

//disabling the buttons
q1a1.addEventListener("click", disq1);
q1a2.addEventListener("click", disq1);

q2a1.addEventListener("click", disq2);
q2a2.addEventListener("click", disq2);

q3a1.addEventListener("click", disq3);
q3a2.addEventListener("click", disq3);

//functions

function updateResult() //determine outcome
  {
    if(playerScore >= 2)
    {
      result.innerHTML = "You are the player!";
      /* description.innerHTML = "You're probably an adventurous person and have no problem going outside of your comfort zone to try and explore new things! You probably try to help other people when you have the chance :)"
      */
      console.log("You are the player!");
    }
    else if(npcScore >= 2)
    {
      result.innerHTML = "You are the NPC!";
     //description.innerHTML = ""
      console.log("You are the NPC!");
    }
  }

function restart()
  {
    questionCount = 0;
    npcScore = 0;
    playerScore = 0;
    result.innerHTML = "You are...";
    description.innerHTML = "";

    document.getElementById("q1a1").disabled = false;
    document.getElementById("q1a2").disabled = false;
    document.getElementById("q2a1").disabled = false;
    document.getElementById("q2a2").disabled = false;
    document.getElementById("q3a1").disabled = false;
    document.getElementById("q3a2").disabled = false;
  }

function player() //player scores and outcome
  {
    playerScore++;
    questionCount++;

    console.log("questionCount= " + questionCount + " playerScore= " + playerScore);

    if(questionCount==3)
    {
      console.log("The quiz is done!");
      updateResult();
    }
  }

function npc() //npc scores and outcome
  {
    npcScore++;
    questionCount++;

    console.log("questionCount= " + questionCount + " npcScore= " + npcScore);

    if(questionCount==3)
    {
      console.log("The quiz is done!");
      updateResult();
    }
  }

function disq1()
  {
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
  }

function disq2()
  {
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
  }

function disq3()
  {
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
  }