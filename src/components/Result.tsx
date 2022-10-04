interface IProps {
	score: number;
	startQuiz: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Result: React.FC<IProps> = ({ score, startQuiz }) => {
	return (
		<div className='flex flex-col items-center py-5 relative'>
			<h1 className='text-4xl'>GAME OVER!</h1>
			<span className='absolute top-[2.2rem] text-4xl text-orange'>
				---------
			</span>
			<h3 className='text-xl pt-5'>Score</h3>
			<h4 className='text-lg pb-10'>{score}/100</h4>
			<button
				className='bg-slate-900 text-white-100 px-8 py-1 rounded-full'
				onClick={startQuiz}>
				Again
			</button>
		</div>
	);
};

export default Result;
