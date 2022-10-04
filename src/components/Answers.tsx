import { IAnswers } from '../types';

interface IProps {
	answers: Array<IAnswers>;
	selectResponse: Function;
	checkAnswer: Function;
	select: boolean;
}

const Answers: React.FC<IProps> = ({
	answers,
	selectResponse,
	checkAnswer,
	select,
}) => {
	return (
		<ul className='answers'>
			{answers.map((answer: IAnswers, index: number) => (
				<li
					key={index}
					className={select ? checkAnswer(answer) : ''}
					onClick={() => selectResponse(answer)}>
					{answer.suggestion}
				</li>
			))}
		</ul>
	);
};

export default Answers;
