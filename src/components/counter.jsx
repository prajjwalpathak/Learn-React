import { useEffect, useState } from 'react';
import '../styles/counter.css';

const Counter = () => {
	let [count, setCount] = useState(0);
	const handleClick = () => {
		count = count + 1;
		setCount(count);
		console.log(count);
	};
	// useEffect(() => {
	// 	count = count + 1;
	// 	console.log(count);
	// }, [count]);

	return (
		<div className='counter'>
			<span className='counter-number'>{count}</span>
			<button className='counter-btn' type='button' onClick={handleClick}>
				Count Click
			</button>
		</div>
	);
};

export default Counter;
