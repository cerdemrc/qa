import '../styles/Footer.scss';

interface IProps {
	handleButtonEvent: React.MouseEventHandler<HTMLButtonElement> | undefined;
	select: boolean;
	lastQue: boolean;
}

const Footer: React.FC<IProps> = ({ handleButtonEvent, select, lastQue }) => {
	return (
		<div className='footer'>
			<button
				onClick={handleButtonEvent}
				disabled={select}
				className={`btn ${select ? 'unselected' : 'selected'}`}>
				Skip
			</button>
			<button
				onClick={handleButtonEvent}
				disabled={!select}
				className={`btn ${select ? 'selected' : 'unselected'}`}>
				{lastQue ? 'Finish' : 'Next'}
			</button>
		</div>
	);
};

export default Footer;
