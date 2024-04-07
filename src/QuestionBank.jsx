// this file stores quiz questions


// QuestionBank.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import qBank from "./QuestionBank";
import Questions from './Questions';
import Score from './Score';
import Container from 'react-bootstrap/Container';
import Courses from './Courses'

const questions = [
	{
		question: 'What does CSS stand for?',
		options: [' Colorful Style Sheets', ' Computer Style Sheets', ' Cascading Style Sheets', ' Creative Style Sheets'],
		answer: ' Cascading Style Sheets',
		id:1
	}, 
	{
	question: 'What is the correct HTML for referring to an external style sheet?',
	options: [' &lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;', ' &lt;style src="mystyle.css"&gt;', 
			' &lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;', ' &lt;link rel="stylesheet" href="mystyle.css"&gt;'],
	answer: ' &lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;',
	id:2
	},

	{
		question: ' Which of the following CSS selector is used to specify a rule to bind a particular unique element?',
		options: ['tag', 'id', 
			'class', 'both class and tag'],
	answer: 'id',
		id:3
	},

];
export default questions;
