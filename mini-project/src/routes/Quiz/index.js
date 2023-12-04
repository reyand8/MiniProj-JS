import './index.scss';
import {useState} from "react";
import '../../App.css'
import '../../index.css'

const questions = [
    {
        title: 'JavaScript File Has An Extension of:',
        variants: ['.Java', '.Js', '.javascript', '.xml'],
        correct: '.Js',
        type: 'question',
        id: 1,
    },
    {
        title: 'The Tag is used To Give Heading To The Table',
        variants: ['Head', 'Td', 'Th', 'Caption'],
        correct: 'Caption',
        type: 'question',
        id: 2,
    },
    {
        title: 'IsNaN() Evaluates And Argument To Determine if Given Value:',
        variants: [
            'Is Not a Null',
            'Is Not a Number',
            'Is Not a New Object',
            'None Of The Above',
        ],
        correct: 'Is Not a Number',
        type: 'question',
        id: 3,
    },
    {
        title: 'Method Prompt() Contain...Number of Parameters',
        answer: '',
        correct: '2',
        type: 'input',
        id: 4,
    },
    {
        title: 'Prompt() Display a Message And a Data Entry Field',
        variants: [
            'True',
            'False',
        ],
        correct: 'True',
        type: 'question',
        id: 5,
    },

];

function Result({correct}) {
    return (
        <div className="quiz__result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='result-img'/>
            <h2>You have {correct} points of {questions.length}</h2>
            <a href="/quiz/">
                <button>Try again</button>
            </a>

        </div>
    );
}

function Game({step, question, onClickVariant}) {
    const [input, setInput] = useState('')
    const {title, variants, type} = question
    const percentage = Math.round((step / questions.length) * 100)

    function onInputChange(e) {
        setInput(e.target.value)
    }
    function onSubmit(e) {
        e.preventDefault()
        setInput('')
        onClickVariant(input)
    }

    function askQuestions() {
        if (type === 'question') {
            question = <ul>
                            {variants.map((text, index) =>
                                <li onClick={() => onClickVariant(text)} key={index}>{text}</li>
                        )}
                        </ul>
        }
        else if (type === 'input') {
            question =
                    <form className='quiz__input-question' onSubmit={onSubmit}>
                        <input maxLength="4" type='text' value={input} onChange={onInputChange} key={7771}/>
                        <button className='quiz__btn-step'>Next Step</button>
                    </form>
        }
        return question
    }

    return (
        <>
            <div className="quiz__progress">
                <div style={{ width: `${percentage}%` }} className="quiz__progress_inner"></div>
            </div>
            <h1>{title}</h1>
            {askQuestions()}
        </>
    )
}

function Quiz() {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions[step]
    const onClickVariant = (selected) => {
        setStep(step + 1)
        if (selected === question.correct) {
            setCorrect(correct + 1)
        }
    }
    return (
        <div className='quiz__quiz-main'>
            <div className="quiz__quiz-app">
                {
                    step !== questions.length ?
                        (<Game step={step} question={question} onClickVariant={onClickVariant}/>) :
                        (<Result correct={correct} />)
                }
            </div>
        </div>
    )
}

export default Quiz;