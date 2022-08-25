const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", start);

function start() {
  let step = 1;
  let timer = 30;
  const spanTimer = document.querySelector(".timer");
  console.log(spanTimer.innerText);
  const timerCounter = setInterval(() => {
    timer--;
    spanTimer.innerText = timer;
    console.log(timer);
    if (timer <= 0) {
      clearInterval(timerCounter);
      step = 4;
      showQuestions();
    }
  }, 1000);

  const quizStart = document.querySelector(".quiz__start");
  quizStart.style.display = "none";
  const quizTask = document.querySelector(".quiz__task");
  quizTask.style.display = "block";

  function right() {
    step++;
    showQuestions();
    const quizResult = document.querySelector(".quiz__result");
    quizResult.innerText = "Right!";
  }

  function wrong() {
    step++;
    timer -= 5;
    if (timer <= 0) {
      timer = 0;
    }
    showQuestions();
    const quizResult = document.querySelector(".quiz__result");
    quizResult.innerText = "Wrong!";
  }

  function showQuestions() {
    switch (step) {
      case 1: {
        const titleQuestion = document.querySelector(".quiz__title");
        titleQuestion.innerText =
          "1 Inside which HTML element do we put the JavaScript?";
        const answer1 = document.querySelector("#answer1");
        const answer2 = document.querySelector("#answer2");
        const answer3 = document.querySelector("#answer3");
        const answer4 = document.querySelector("#answer4");

        answer1.innerText = "<scripting>";
        answer2.innerText = "<js>";
        answer3.innerText = "<javascript>";
        answer4.innerText = "<script>";

        answer1.addEventListener("click", wrong);
        answer2.addEventListener("click", wrong);
        answer3.addEventListener("click", wrong);
        answer4.addEventListener("click", right);

        break;
      }
      case 2: {
        const titleQuestion = document.querySelector(".quiz__title");
        titleQuestion.innerText =
          "2 How do you write 'Hello World' in an alert box?";
        const answer1 = document.querySelector("#answer1");
        const answer2 = document.querySelector("#answer2");
        const answer3 = document.querySelector("#answer3");
        const answer4 = document.querySelector("#answer4");

        answer1.innerText = "alert('Hello World')";
        answer2.innerText = "msg('Hello world')";
        answer3.innerText = "msgBox('Hello World')";
        answer4.innerText = "alertBox('Hello World')";

        answer1.removeEventListener("click", wrong);
        answer2.removeEventListener("click", wrong);
        answer3.removeEventListener("click", wrong);
        answer4.removeEventListener("click", right);

        answer1.addEventListener("click", right);
        answer2.addEventListener("click", wrong);
        answer3.addEventListener("click", wrong);
        answer4.addEventListener("click", wrong);
        break;
      }
      case 3: {
        const titleQuestion = document.querySelector(".quiz__title");
        titleQuestion.innerText =
          "3 How to write an IF statement for executing some code if 'i' is NOT equal to 5?";
        const answer1 = document.querySelector("#answer1");
        const answer2 = document.querySelector("#answer2");
        const answer3 = document.querySelector("#answer3");
        const answer4 = document.querySelector("#answer4");

        answer1.innerText = "if (i<> 5)";
        answer2.innerText = "if i =! 5 then";
        answer3.innerText = "if i <> 5";
        answer4.innerText = "if(i != 5)";

        answer1.removeEventListener("click", right);
        answer2.removeEventListener("click", wrong);
        answer3.removeEventListener("click", wrong);
        answer4.removeEventListener("click", wrong);

        answer1.addEventListener("click", wrong);
        answer2.addEventListener("click", wrong);
        answer3.addEventListener("click", wrong);
        answer4.addEventListener("click", right);
        break;
      }
      case 4: {
        const quizTask = document.querySelector(".quiz__task");
        quizTask.style.display = "none";
        const game = document.querySelector(".game");
        game.style.display = "block";

        const clear = clearInterval(timerCounter);

        const gameResult = document.querySelector(".game__result");
        gameResult.innerText = `Your final score is ${timer}`;

        const gameInput = document.querySelector("#initials");

        let initialString = "Anonymous";
        gameInput.addEventListener("input", (e) => {
          initialString = e.target.value;
        });

        const gameBtn = document.querySelector(".game__btn");
        gameBtn.addEventListener("click", () => {
          const arr = JSON.parse(localStorage.getItem("fullName")) || [];
          localStorage.setItem(
            "fullName",
            JSON.stringify([...arr, `${initialString}  ${timer}`])
          );

          step++;
          showQuestions();
        });

        spanTimer.innerText = timer;

        break;
      }
      case 5: {
        const game = document.querySelector(".game");
        game.style.display = "none";
        const endGame = document.querySelector(".final");
        endGame.style.display = "block";

        const arr = JSON.parse(localStorage.getItem("fullName")) || [];
        arr.forEach((el) => {
          const newDiv = document.querySelector(".scores");
          const p = document.createElement("p");
          p.innerText = el;
          p.className = "initial__name";
          newDiv.appendChild(p);
        });

        const goBackButton = document.querySelector(".goBack");
        goBackButton.addEventListener("click", () => {
          window.location.reload();
        });

        const clearScoreButton = document.querySelector(".clearScore");
        clearScoreButton.addEventListener("click", () => {
          localStorage.clear();
          const scoresDiv = document.querySelector(".scores");
          scoresDiv.innerHTML = "";
        });
      }
    }
  }
  showQuestions();
}
