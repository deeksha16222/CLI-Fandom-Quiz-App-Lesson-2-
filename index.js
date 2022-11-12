var readlineSync = require("readline-sync");
var score = 0;
var username = readlineSync.question("May I have your name please?");
const chalk = require('chalk');
console.log(chalk.redBright("Hi " + username + ", Welcome to React's Quiz "));
console.log(chalk.greenBright("Choose the correct option "));
var highScore = [
  {
    name: "Deeksha",
    score: 8
  },
  {
    name: "Nityasha",
    score: 6
  }
];
function play(question, answer, answer1, answer2, answer3, answer4) {
  console.log(chalk.blueBright(question));
  console.log(chalk.greenBright(answer1));
  console.log(chalk.yellowBright(answer2));
  console.log(chalk.magentaBright(answer3));
  console.log(chalk.redBright(answer4));

  var userAnswer = readlineSync.question(chalk.cyan("Your answer "));



  if (userAnswer === answer) {
    console.log("YAY!! you are right");
    score = score + 1;

  }
  else {
    console.log("NAY!! you are wrong");

  }
  console.log("current score ", score);
  console.log("---------------");
}

const questionBank = [
  {
    question: "React is a",
    answer: "b",
    answer1: "a: Web development Framework",
    answer2: "b: JavaScript Library",
    answer3: "c: jQuery",
    answer4: "d: Web Server"
  },
  {
    question: "JSX stands for",
    answer: "c",
    answer1: "a: JSON",
    answer2: "b: JSON XML",
    answer3: "c: JavaScript XML",
    answer4: "d: JavaScript and AngularJS"
  },
  {
    question: "What are Props?",
    answer: "a",
    answer1: "a: Props are arguments passed into React components",
    answer2: "b: Props are functions in the ReactJS",
    answer3: "c: Props are used to returns multiple values from the function",
    answer4: "d: All of the above"
  },
  {
    question: "Which ReactJS command is used to create a new application?",
    answer: "a",
    answer1: "a: create-react-app",
    answer2: "b: new-react-app",
    answer3: "c: create-new-reactapp",
    answer4: "d: reactapp"
  },
  {
    question: "In ES6 – Which method refers to the parent class?",
    answer: "a",
    answer1: "a: super()",
    answer2: "b: parent()",
    answer3: "c: top()",
    answer4: "d: main()"
  },
  {
    question: "Which is used to pass data to components from outside?",
    answer: "c",
    answer1: "a: Render with arguments",
    answer2: "b: setState",
    answer3: "c: Props",
    answer4: "d: PropTypes"
  },
  {
    question: "Which method is used to generate lists?",
    answer: "a",
    answer1: "a: map()",
    answer2: "b: generate()",
    answer3: "c: new()",
    answer4: "d: filter()"
  },
  {
    question: "Which ReactJS function renders HTML to the web page?",
    answer: "d",
    answer1: "a: render()",
    answer2: "b: renders()",
    answer3: "c: ReactDOM.renders()",
    answer4: "d: ReactDOM.render()"
  },
  {
    question: "What is the default port where webpack-server runs?",
    answer: "d",
    answer1: "a: 443",
    answer2: "b: 3030",
    answer3: "c: 3043",
    answer4: "d: 8080"
  },
  {
    question: "What is the use of the webpack command in React.js?",
    answer: "c",
    answer1: "a: The webpack command is used to transpile all the JavaScript down into one file",
    answer2: "b: It runs React local development server",
    answer3: "c: It is a module bundler",
    answer4: "d: None of the above"
  }
]

for (var i = 0; i < questionBank.length; i++) {
  var currentQuestion = questionBank[i];
  play(currentQuestion.question,
    currentQuestion.answer,
    currentQuestion.answer1,
    currentQuestion.answer2,
    currentQuestion.answer3,
    currentQuestion.answer4)

}
console.log("Total score ", score);
if (score === 10) {
  console.log(chalk.bold.rgb(10, 100, 200)("YOU ARE A GEM!!!!!!! :)"));
}

console.log("Check out the high scores, if you should be there ping me and I'll update it");
for (var i = 0; i < highScore.length; i++) {
  var currentscore = highScore[i];
  console.log(currentscore.name);
  console.log(currentscore.score);
}
