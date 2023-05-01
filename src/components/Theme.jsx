import { useContext } from 'react';
import { ThemeContext } from '../App';

const Theme = () => {
	const { dark, setDark } = useContext(ThemeContext);
	return (
		<div>
			<button
				onClick={() => {
					setDark(!dark);
				}}
			>
				Dark
			</button>
			<div
				style={{
					width: '4rem',
					height: '4rem',
					background: dark ? 'black' : 'white',
					color: dark ? 'white' : 'black',
					border: '1px black solid'
				}}
			>
				Hi
			</div>
		</div>
	);
};

export default Theme;
