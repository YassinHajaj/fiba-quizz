class FIBAQuiz {
    constructor() {
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedQuestions = [];
        this.userAnswers = [];
    }

    async loadQuestions() {
        // Embedded questions data to avoid CORS issues with local files
        const csvText = `question,answer1,answer2,answer3,answer4
What happens if a player stays in the restricted area for more than 3 seconds while their team controls the ball?,It's a violation and the ball goes to the opponents,Play continues unless the player touches the ball,The shot clock resets,It results in a personal foul
"How long can a closely guarded player hold the ball without dribbling, passing, or shooting?",5 seconds,8 seconds,3 seconds,10 seconds
When does the alternating possession arrow change direction?,Immediately after an alternating possession throw-in ends,At the start of every quarter,After each free throw,Whenever the coach requests
What is the penalty for a technical foul?,1 free throw and possession for opponents,2 free throws only,Ball returned to same team,No penalty unless repeated
How many personal fouls disqualify a player from the game?,5 fouls,6 fouls,4 fouls,7 fouls
How long does a team have to advance the ball from the backcourt to the frontcourt?,8 seconds,5 seconds,10 seconds,24 seconds
"What happens if a player dribbles, stops, and then starts dribbling again without the ball touching another player?",Double dribble violation,Travelling violation,"No violation, play continues",Technical foul
When is the shot clock reset to 14 seconds instead of 24?,After an offensive rebound,After a defensive rebound,At the start of each quarter,After a made basket
How long can a player take to release the ball on a throw-in?,5 seconds,8 seconds,3 seconds,10 seconds
"If the game is tied after regulation, what happens?",Overtime periods of 5 minutes are played,The game ends in a tie,Overtime periods of 10 minutes are played,A free throw shootout decides the winner
What is the penalty when a defensive team commits its 5th team foul in a quarter?,Two free throws for the opponents,One free throw for the opponents,Throw-in for the opponents,No penalty
What happens if an offensive player charges into a stationary defender with legal guarding position?,Offensive foul,Defensive foul,No call,Technical foul
"If a player deliberately kicks the ball with the foot or leg, what is the ruling?",Violation,Personal foul,Technical foul,Play continues
When is the alternating possession arrow used?,Jump-ball situations,End of every quarter,After each foul,After each free throw
What happens if a player interferes with the ball on its downward flight toward the basket?,Goaltending,Travelling,Offensive foul,Play continues
How many referees normally officiate a FIBA game?,3 referees,2 referees,1 referee,4 referees
What is the ruling if a defender touches the ball while it is still on the rim?,Basket interference,No violation,Travelling,Technical foul
How many steps are allowed without dribbling after gathering the ball?,2 steps,1 step,3 steps,Unlimited
What happens when a held ball situation occurs?,Alternating possession arrow determines possession,Jump ball at center circle,Throw-in to defense,Play continues
How many time-outs is each team allowed in regulation play?,5 time-outs,4 time-outs,6 time-outs,Unlimited
"If a player commits two unsportsmanlike fouls, what happens?",They are disqualified,Ejection only after 3,No consequence,Team loses possession only
When can a substitution be made?,When the ball is dead and clock stopped,At any time during play,Only at halftime,Only after fouls
What is the ruling if a player fakes being fouled (flopping)?,Technical foul,No call,Personal foul,Unsportsmanlike foul
How many free throws are awarded for a successful basket on which a player is fouled?,1 free throw,2 free throws,No free throw,3 free throws
What is the maximum number of players on the court for one team at a time?,5 players,6 players,4 players,7 players
What happens if the free throw shooter crosses the line before the ball touches the rim?,Violation,Personal foul,Play continues,Technical foul
When does the game clock stop in the last 2 minutes of a quarter?,On every dead ball,Only on fouls,Only on time-outs,It never stops
What happens if a player commits a foul while the clock shows 0:00 in a period?,Foul is administered before next period begins,Foul is ignored,Technical foul,Foul counts but no free throws
How many jump balls occur in a FIBA game under normal conditions?,1 (at the start of the game),1 each quarter,1 each half,1 each overtime
What is awarded if a player is fouled while attempting a three-point shot and misses?,3 free throws,2 free throws,1 free throw,No free throws
What happens if the offensive team causes the ball to go out of bounds?,Possession to the defense,Jump ball,Play continues,Technical foul
When is a backcourt violation called?,If a team returns the ball to the backcourt after establishing frontcourt control,Whenever the ball touches the midline,When a pass is intercepted,After a missed shot
What is the correct penalty if a coach receives two technical fouls?,Disqualification from the game,Warning only,Ejection only after three,Loss of one time-out
When does the 24-second shot clock reset to 24?,When the defense gains control,After a made basket,At the start of each quarter,After a time-out
What happens if a player delays the game by touching the ball after a made basket?,Delay-of-game warning,Technical foul immediately,No penalty,Turnover
How many free throws are awarded if a player is fouled while making a two-point basket and the basket is successful?,1 free throw,2 free throws,No free throws,3 free throws
When can a coach request a time-out?,When their team has control of the ball,At any moment of play,Only during free throws,Only during halftime
What happens if a defensive player commits goaltending?,Points are awarded to the shooting team,Play continues,Jump ball,Turnover to defense
What is the minimum number of players required to continue a game?,2 players,3 players,4 players,5 players
"If a substitute enters without reporting to the scorer, what is the penalty?",Technical foul,Personal foul,Unsportsmanlike foul,No penalty
How many quarters are played in a FIBA game?,4 quarters,2 halves,3 periods,5 quarters
What is the penalty for fighting?,Disqualifying foul,Ejection only,Personal foul,Technical foul only
When can the ball be legally touched during a jump ball?,After it reaches its highest point,As soon as it leaves the referee's hand,Only after it bounces,When whistle blows
What happens if a player commits a foul on a player in the act of shooting and the shot is successful?,Basket counts + free throw,Basket is cancelled,No basket but 2 free throws,Technical foul
How many time-outs are allowed in the last two minutes of the 4th quarter?,2 time-outs per team,Unlimited,1 time-out only,No time-outs allowed
What happens if a player dunks the ball during warm-up?,Technical foul before the game,No penalty,Unsportsmanlike foul,Game delay
What happens if the ball lodges between the ring and the backboard?,Jump ball/alternating possession,Replay the shot,Turnover,Free throw
How many players can be disqualified from one team before the game is forfeited?,Fewer than 2 remain,When 3 players remain,When 4 players remain,When 5 players remain
What happens if a free throw does not touch the ring?,Violation,Personal foul,Play continues,Jump ball
What is the ruling if the defense breaks the plane of the boundary line on a throw-in before the ball is released?,Warning then technical foul,Personal foul,No penalty,Automatic turnover
What is the penalty if a defensive player enters the free-throw lane too early during a free throw?,Violation and shooter repeats if miss,Play continues,Technical foul,Turnover
What happens if the shooter crosses the free-throw line before the ball hits the rim?,Violation,Personal foul,Unsportsmanlike foul,Play continues
How many players from each team line up on the lane during a free throw?,2 defensive + 2 offensive,3 defensive + 2 offensive,3 defensive + 3 offensive,4 defensive + 2 offensive
What is awarded if a player is fouled while attempting a three-point shot and makes it?,1 free throw,2 free throws,No free throws,3 free throws
When does the game clock start on a throw-in?,When the ball is legally touched by a player on court,When the referee hands the ball to thrower,When the thrower releases the ball,When the whistle blows
If a team has the ball and a 24-second horn sounds without a shot touching the rim then what happens?,Shot clock violation,Personal foul,Jump ball,Play continues
What is the ruling if a player hangs on the rim without safety reason?,Technical foul,Unsportsmanlike foul,No penalty,Personal foul
When is basket interference called?,Touching the ball while it is on the rim,Touching the backboard,Blocking a shot,Contacting the shooter
What happens if a team refuses to play after being instructed to continue?,Forfeit,Technical foul only,Unsportsmanlike foul only,Delay-of-game warning
How many free throws are given for a foul on a two-point shot that misses?,2 free throws,1 free throw,3 free throws,No free throws
"If a coach enters the playing court during live play, what is the sanction?",Technical foul,No penalty,Personal foul,Unsportsmanlike foul
What is the correct signal for a three-point field goal attempt by the referee?,Arm raised with three fingers,One arm waving,Two arms crossed,Blowing the whistle
How many jump balls are held in a regulation FIBA game?,Only 1 at the start,One each quarter,One each half,One each overtime
What happens if a player scores in their own basket?,Points credited to opposing captain,Points to the shooter,Points cancelled,Jump ball
When is the ball considered live on a free throw?,When it is at the disposal of the shooter,When the referee blows the whistle,When shooter releases it,When it touches the rim
What happens if a player touches the ball while standing out of bounds?,Violation,Technical foul,No penalty,Personal foul
What happens if both teams commit a foul at the same time?,Double foul,Technical foul,Jump ball,Play continues
What happens if the defensive team commits a foul during the last 2 minutes with no team fouls left?,Personal foul only,Free throws awarded,Technical foul,Jump ball
What is the ruling if a player commits a foul on an opponent away from the ball?,Personal foul,No call,Technical foul,Violation
What is the penalty if a player verbally abuses an official?,Technical foul,Personal foul,Unsportsmanlike foul,No action`;
        
        try {
            this.parseCSV(csvText);
        } catch (error) {
            console.error('Error loading questions:', error);
        }
    }

    parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        
        // Skip the header line
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
                const values = this.parseCSVLine(line);
                if (values.length >= 5) {
                    this.questions.push({
                        question: values[0],
                        correctAnswer: values[1],
                        options: [values[1], values[2], values[3], values[4]]
                    });
                }
            }
        }
    }

    parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        let i = 0;
        
        while (i < line.length) {
            const char = line[i];
            
            if (char === '"' && !inQuotes) {
                // Start of quoted field
                inQuotes = true;
                i++;
            } else if (char === '"' && inQuotes) {
                // Check if it's an escaped quote (double quote)
                if (i + 1 < line.length && line[i + 1] === '"') {
                    current += '"';
                    i += 2; // Skip both quotes
                } else {
                    // End of quoted field
                    inQuotes = false;
                    i++;
                }
            } else if (char === ',' && !inQuotes) {
                // Field separator outside quotes
                result.push(current.trim());
                current = '';
                i++;
            } else {
                // Regular character
                current += char;
                i++;
            }
        }
        
        // Add the last field
        result.push(current.trim());
        
        return result;
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    selectRandomQuestions() {
        const shuffledQuestions = this.shuffleArray(this.questions);
        this.selectedQuestions = shuffledQuestions.slice(0, 10);
    }

    startQuiz() {
        if (this.questions.length === 0) {
            console.error('No questions loaded');
            return;
        }
        
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.selectRandomQuestions();
        
        document.querySelector('.container').style.backgroundImage = 'url("backgroundquestions.png")';
        document.querySelector('.container').style.backgroundSize = 'cover';
        document.querySelector('.container').style.backgroundPosition = 'center';
        document.querySelector('.container').style.backgroundRepeat = 'no-repeat';
        document.querySelector('.main').style.justifyContent = 'center';
        document.querySelector('.main').innerHTML = '';
        
        this.showQuestion();
    }

    showQuestion() {
        if (!this.selectedQuestions || this.selectedQuestions.length === 0) {
            console.error('No questions available');
            return;
        }
        
        const question = this.selectedQuestions[this.currentQuestion];
        if (!question || !question.options) {
            console.error('Invalid question data');
            return;
        }
        
        const shuffledOptions = this.shuffleArray(question.options);
        
        const questionHTML = `
            <div class="quiz-container">
                <div class="quiz-progress">
                    <span>Question ${this.currentQuestion + 1} of 10</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${((this.currentQuestion + 1) / 10) * 100}%"></div>
                    </div>
                </div>
                
                <div class="question-card">
                    <h2 class="question-text">${question.question}</h2>
                    <div class="options-container">
                        ${shuffledOptions.map((option, index) => `
                            <button class="option-button" onclick="quiz.selectAnswer('${option}')" data-option="${option}">
                                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                                <span class="option-text">${option}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        document.querySelector('.main').innerHTML = questionHTML;
    }

    selectAnswer(selectedAnswer) {
        const question = this.selectedQuestions[this.currentQuestion];
        const isCorrect = selectedAnswer === question.correctAnswer;
        
        this.userAnswers.push({
            question: question.question,
            selectedAnswer,
            correctAnswer: question.correctAnswer,
            isCorrect
        });
        
        if (isCorrect) {
            this.score++;
        }
        
        // Highlight the selected answer
        const buttons = document.querySelectorAll('.option-button');
        buttons.forEach(button => {
            button.disabled = true;
            const option = button.dataset.option;
            if (option === question.correctAnswer) {
                button.classList.add('correct');
            } else if (option === selectedAnswer && !isCorrect) {
                button.classList.add('incorrect');
            }
        });
        
        // Move to next question after a delay
        setTimeout(() => {
            this.currentQuestion++;
            if (this.currentQuestion < 10) {
                this.showQuestion();
            } else {
                this.showResults();
            }
        }, 1500);
    }

    showResults() {
        const percentage = (this.score / 10) * 100;
        let message = '';
        let emoji = '';
        
        if (percentage >= 90) {
            message = 'Outstanding! You\'re a FIBA expert!';
            emoji = '🏆';
        } else if (percentage >= 70) {
            message = 'Great job! You know your basketball!';
            emoji = '🏀';
        } else if (percentage >= 50) {
            message = 'Not bad! Keep learning about FIBA!';
            emoji = '👍';
        } else {
            message = 'Keep practicing! There\'s more to learn!';
            emoji = '📚';
        }
        
        const resultsHTML = `
            <div class="results-container">
                <div class="results-header">
                    <div class="results-emoji">${emoji}</div>
                    <h1 class="results-title">Quiz Complete!</h1>
                    <div class="results-score">
                        <span class="score-number">${this.score}</span>
                        <span class="score-total">/ 10</span>
                    </div>
                    <div class="results-percentage">${percentage}%</div>
                    <p class="results-message">${message}</p>
                </div>
                
                <div class="results-actions">
                    <button class="btn-primary" onclick="quiz.startQuiz()">Try Again</button>
                    <button class="btn-secondary" onclick="location.reload()">Back to Home</button>
                </div>

                <div class="promotional-sections">
                    <a href="https://bruit.club" target="_blank" rel="noopener noreferrer" class="promo-card">
                        <img src="bruit.png" alt="BRUIT.club" class="promo-logo">
                        <p class="promo-text">Want to learn how to build such a website? Join <strong>BRUIT.club</strong></p>
                    </a>
                    
                    <a href="https://hoops.brussels" target="_blank" rel="noopener noreferrer" class="promo-card">
                        <img src="hoops.png" alt="Hoops.Brussels" class="promo-logo">
                        <p class="promo-text">Want to play ball in Brussels? Visit <strong>Hoops.Brussels</strong></p>
                    </a>
                </div>
                
                <div class="results-details">
                    <h3>Review Your Answers:</h3>
                    <div class="answers-review">
                        ${this.userAnswers.map((answer, index) => `
                            <div class="answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}">
                                <div class="answer-question">${index + 1}. ${answer.question}</div>
                                <div class="answer-details">
                                    <div class="your-answer">Your answer: ${answer.selectedAnswer}</div>
                                    ${!answer.isCorrect ? `<div class="correct-answer">Correct answer: ${answer.correctAnswer}</div>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        document.querySelector('.main').innerHTML = resultsHTML;
    }
}

// Initialize quiz
const quiz = new FIBAQuiz();

// Load questions when page loads
document.addEventListener('DOMContentLoaded', async () => {
    await quiz.loadQuestions();
    
    // Add click event to the Test Your Knowledge button
    const startButton = document.querySelector('.cta-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            quiz.startQuiz();
        });
    }
});