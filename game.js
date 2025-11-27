  <script>
    const cells = document.querySelectorAll('.cell');

    var easy=document.getElementById("game-easy");
    easy.style.display="none";
    var medium=document.getElementById("game-medium");
    medium.style.display="none";
    var hard=document.getElementById("game-hard");
    hard.style.display="none";

    function LevelEasy()
    {
      if (easy.style.display==="none")
        {
          easy.style.display="block";
          medium.style.display="none";
          hard.style.display="none";
        }
      else
        {
          easy.style.display="none";
        }
    }
    
    function LevelMedium()
    {
      if (medium.style.display==="none")
        {
          medium.style.display="block";
          easy.style.display="none";
          hard.style.display="none";
        }
      else
        {
          medium.style.display="none";
        }
    }
    
    function LevelHard()
    {
      if (hard.style.display==="none")
        {
          hard.style.display="block";
          easy.style.display="none";
          medium.style.display="none";
        }
      else
        {
          hard.style.display="none";
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
      cells.forEach(cell => {
        cell.dataset.state = "blank";

        cell.addEventListener('click', () => {
          switch (cell.dataset.state) {
            case "blank":
              cell.dataset.state = "possible";
              cell.className = "cell possible";
              cell.textContent = "✔️";
              break;
            case "possible":
              cell.dataset.state = "not-possible";
              cell.className = "cell not-possible";
              cell.textContent = "❌";
              break;
            case "not-possible":
              cell.dataset.state = "blank";
              cell.className = "cell";
              cell.textContent = "";
              break;
          }
        });
      });
    });

    function checkAnswer(levelId, correctAnswer, resultId) {
    let isCorrect = true;
    document.querySelectorAll(`#${levelId} .cell`).forEach(cell => {
      const id = cell.id;
      if (Object.values(correctAnswer).includes(id)) {
        if (cell.dataset.state !== "possible") {
          isCorrect = false;
        }
      } else {
        if (cell.dataset.state === "possible") {
          isCorrect = false;
        }
      }
    });

    const result = document.getElementById(resultId);
    result.style.display = "block";
    result.textContent = isCorrect ? "✅ Correct! Great job!" : "❌ Incorrect! Try again.";
  }

  // Easy Answer Checker
  function CheckAnswerEasy() {
    checkAnswer("game-easy", {
      "P": "easy-P-one",
      "Q": "easy-Q-three",
      "R": "easy-R-two",
      "S": "easy-S-four"
    }, "resulteasy");
  }

  // Medium Answer Checker
  function CheckAnswerMedium() {
    checkAnswer("game-medium", {
      "P": "medium-P-three",
      "Q": "medium-Q-four",
      "R": "medium-R-one",
      "S": "medium-S-two"
    }, "resultmedium");
  }

  // Hard Answer Checker
  function CheckAnswerHard() {
    checkAnswer("game-hard", {
      "P": "hard-P-three",
      "Q": "hard-Q-two",
      "R": "hard-R-one",
      "S": "hard-S-four"
    }, "resulthard");
  }

    function Reset()
    {
      cells.forEach(cell => {cell.dataset.state = "blank"; cell.className = "cell"; cell.textContent = ""; });
      document.getElementById("resulteasy").style.display="none";
      document.getElementById("resultmedium").style.display="none";
      document.getElementById("resulthard").style.display="none";
    }
</script>
