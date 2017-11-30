
		const QUESTIONS_COUNT = 5;
		const QUESTION_TIMER = 10;

		var currentQuestion = -1;
		var selectedQuestions = [];
		var totalScore = 0;

		$(document).ready(function() {
			console.log("Starting...");

			totalScore = 0;
			selectedQuestions = generateQuestions(allQuestions);

			loadQuestion();
			$(".answer").click(function() {
				var index = $(".answer").index(this);
				changeAnswerBarColor(selectedQuestions[currentQuestion].answers[index].correct, currentQuestion);
				loadQuestion();
			})
		})

		var timerInterval;
		function launchTimer(totalDuration) {
			var timeLeft = totalDuration;
			clearInterval(timerInterval);
			$('.timer-marker').attr('aria-valuenow', 100).css('width', "100%");
			timerInterval = setInterval(function() {
				timeLeft--;

				var timeLeftPercent = (timeLeft / totalDuration) * 100;
				$('.timer-marker').attr('aria-valuenow', timeLeftPercent).css('width', timeLeftPercent + "%");
				if (timeLeft == 0) {
					clearInterval(timerInterval);
					changeAnswerBarColor(false, currentQuestion);
					loadQuestion();
				}
			}, 1000);
		}

		function loadQuestion() {
			if (currentQuestion < selectedQuestions.length - 1) {
				currentQuestion += 1;
				displayQuestion(currentQuestion, selectedQuestions);
				launchTimer(QUESTION_TIMER);
			} else {
				clearInterval(timerInterval);
				displaySummary(totalScore);
			}
		}

		function displaySummary(score) {
			$(".question-container").css("display", "none");
			$("<p>").text("Thank you for playing. Your result is " + score + " points.").appendTo($(".content"));
		}

		function generateQuestions(allQuestions) {
			return shuffleArray(allQuestions).slice(0, QUESTIONS_COUNT);
		}

		function shuffleArray(array) {
			var result = array.slice();
			for (var i = result.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = result[i];
				result[i] = result[j];
				result[j] = temp;
			}
			return result;
		}

		function displayQuestion(index, questions) {
			var currentQuestion = questions[index];

			$(".question-text").text(currentQuestion.question);
			for (var i = 0; i < currentQuestion.answers.length; i++) {
				var answer = currentQuestion.answers[i];
				$(".answer:eq(" + i + ")").text(answer.text);
			}

			$(".question-indicator:eq(" + index + ")").removeClass("unanswered").addClass("current");
		}

		function changeAnswerBarColor(isCorrect, questionIndex) {
			var indicatorClassName = "";
			if (isCorrect) {
				totalScore++;
				indicatorClassName = "correct";
			} else {
				indicatorClassName = "wrong";
			}

			$(".question-indicator:eq(" + questionIndex + ")").removeClass("current").addClass(indicatorClassName);
		}