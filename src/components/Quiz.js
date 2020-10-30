import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Questions from './Questions'
import Answers from './Answers'
const Quiz = ({ onResult, onFinish }) => {
    const [questions, setQuestions] = useState(null)
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)

    useEffect(() => {

        const getApi = () => {
            axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
                .then(Response => setQuestions(Response.data.results))
                .catch(err => console.log(err))
        }

        if (!questions) {
            getApi()
        }
        console.log(questions)
    }, [questions, count])


    if (!questions) return <p className="text-dark text-muted">Loading...</p>
    // const result = answers.map(answer => <Answers answer={answer} />)

    const answers = [...questions[count].incorrect_answers, questions[count].correct_answer]
    const result = answers.sort(() => Math.random() - 0.5)   //     sort(()=>{Math.random - 0.5})

    const checkAnswer = (answer) => {
        console.log(answer)
        if (answer === questions[count].correct_answer) {
            setScore(score + 1)
        }
        // if(count < questions.leng)
        if (count < questions.length - 1) {
            setCount(count + 1)
        } else {
            onFinish(true)
            onResult(score)
        }
    }



    return (

        <div className="card-body">
            <Questions question={questions[count].question} />
            <div className="card-text">
                <div data-toggle="buttons" className="btn-group btn-group-vertical btn-group-toggle ">
                    {/* {result.sort(() => Math.random() - 0.5)} */}
                </div>
            </div>
            {result.map((answer, index) => <Answers key={index} answer={answer}
                onAnswer={() => checkAnswer(answer)}
            />)}
        </div>
    );
}


export default Quiz;