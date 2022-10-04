import '../styles/Question.scss';
import Answers from './Answers';
import { IQuestion } from '../types';

interface IProps {
	item: IQuestion;
	selectResponse: Function;
	checkAnswer: Function;
	select: boolean;
}

const Question: React.FC<IProps> = ({
	item,
	selectResponse,
	checkAnswer,
	select,
}) => {
	return (
		<div className='question-wrapper'>
			<p className='question'>{item.question}</p>
			<Answers
				answers={item.suggestions}
				selectResponse={selectResponse}
				checkAnswer={checkAnswer}
				select={select}
			/>
		</div>
	);
};

export default Question;
