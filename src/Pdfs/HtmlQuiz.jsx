import React, { useState }  from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../Css/LMSUI.module.css"
import { Cursor } from 'react-bootstrap-icons';

const questions = [
  {
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyperlinking Text Markup Language'],
    correctAnswer: 'Hyper Text Markup Language'
  },
  {
    question: 'What is the correct HTML element for inserting a line break?',
    options: ['<br>', '<break>', '<lb>', '<linebreak>'],
    correctAnswer: '<br>'
  },
  {
    question: 'Which HTML tag is used to define an unordered list?',
    options: ['<ol>', '<list>', '<ul>', '<dl>'],
    correctAnswer: '<ul>'
  },
{
  question: "What does the <br> tag do?",
  options: [
    "Creates a break in the text",
    "Defines a single line break",
    "Creates a horizontal line",
    "Defines a paragraph"
  ],
  correctAnswer: "Defines a single line break"
},

];
export default function HtmlQuiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value)
      ;
    };
  
    const handleNextQuestion = () => {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      setSelectedOption('');
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    };
  
    const handleRestartQuiz = () => {
      setCurrentQuestion(0);
      setSelectedOption('');
      setScore(0);
      setShowScore(false);
    };
  

  
    return (
        <center>
            
            {/* <div className={style.quizset}> */}
        
        {/* <div className={style.Container1}> */}
            
			<div className= {style.full}>
				<div className="card-body">
      {/* <Container> */}
        <h2>HTML Quiz</h2>
        {showScore ? (
          <div>
            <h3>Your Score: {score} / {questions.length}</h3>
            <Button onClick={handleRestartQuiz}>Restart Quiz</Button>
          </div>
        ) : (
          <div>
            <h4>Question {currentQuestion + 1} of {questions.length}</h4>
            <h5>{questions[currentQuestion].question}</h5>
            <center>  <Form>
              {questions[currentQuestion].options.map((option, index) => (
                
                <Form.Check
                  key={index}
                type='radio'
                //   type="checkbox"
                  id={`option${index}`}
                
                  label={option}
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
              ))}
            </Form> </center>
            <br></br>
            <Button onClick={handleNextQuestion}>Next</Button>
          </div>
        )}
      {/* </Container> */}
      </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      </center>

    );
  };
  

