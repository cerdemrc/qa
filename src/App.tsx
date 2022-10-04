import './styles/App.scss';
import { useState } from 'react';
import { questionList } from './data/questionList';
import { IQuestion, IAnswers } from './types';
import Header from './components/Header';
import Question from './components/Question';
import Result from './components/Result';
import Footer from './components/Footer';

const App: React.FC = () => {
	const [score, setScore] = useState(0);
	const [select, setSelect] = useState(false);
	const [lastQue, setLastQue] = useState(false);
	const [quiz, setQuiz] = useState(true);
	const [a, setA] = useState(0);
	const [b, setB] = useState(1);

	const handleButtonEvent = () => {
		checkFinishQuiz(b);
	};

	const checkFinishQuiz = (value: number) => {
		setSelect(false);
		setA(a + 1);
		setB(b + 1);
		if (value == questionList.length) {
			setQuiz(false);
		}

		if (value + 1 == questionList.length) {
			setLastQue(true);
		}
	};

	const checkAnswer = (answer: IAnswers) => {
		if (answer.correct) {
			return 'correct';
		} else {
			return 'incorrect';
		}
	};

	const selectResponse = (answer: IAnswers) => {
		setSelect(true);
		if (answer.correct) {
			setScore(score + 10);
		}
	};

	const startQuiz = () => {
		setA(0);
		setB(1);
		setQuiz(true);
		setScore(0);
		setLastQue(false);
	};

	return (
		<div className='qa-wrapper'>
			<Header />
			{quiz ? (
				<div className='qa-card'>
					{questionList.slice(a, b).map((item: IQuestion, index: number) => (
						<div className='w-full' key={index}>
							<Question
								item={item}
								select={select}
								selectResponse={selectResponse}
								checkAnswer={checkAnswer}
							/>
						</div>
					))}
					<Footer
						lastQue={lastQue}
						select={select}
						handleButtonEvent={handleButtonEvent}
					/>
				</div>
			) : (
				<div className='qa-card'>
					<Result score={score} startQuiz={startQuiz} />
				</div>
			)}
		</div>
	);
};

export default App;
