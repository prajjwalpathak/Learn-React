import { useState } from 'react';

const Toggle = () => {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<button
				onClick={() => {
					setDarkMode(!darkMode);
				}}
				style={{ width: '5rem' }}
			>
				{darkMode ? 'Light Mode' : 'Dark Mode'}
			</button>
			{darkMode && <Dark />}
		</div>
	);
};

const Dark = () => {
	return <div>The Dark mode is On.</div>;
};

export default Toggle;
