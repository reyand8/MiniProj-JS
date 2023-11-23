import './index.scss';
import {useState} from "react";

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
        id: 1,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
        id: 2,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
        id: 3,
    },
];

function Result({correct}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='result-img'/>
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href="/quiz/">
                <button>Попробовать снова</button>
            </a>

        </div>
    );
}

function Game({step, question, onClickVariant}) {
    const {title, variants} = question
    const percentage = Math.round((step / questions.length) * 100)
    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{title}</h1>
            <ul>
                {variants.map((text, index) =>
                    <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
                )}
            </ul>
        </>
    );
}

function Quiz() {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions[step]

    const onClickVariant = (index) => {
        setStep(step + 1)
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }
    return (
        <div className='quiz-main'>
            <div className="quiz-app">
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