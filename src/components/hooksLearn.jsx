import { useEffect } from 'react';
import { useState } from 'react';

const HooksLearn = () => {
	const url = 'https://exception-arg-jvc-salad.trycloudflare.com';
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url + '/admin/get-all-users');
				if (!res.ok) {
					setIsError(true);
					setIsLoading(false);
					return;
				}
				const data = await res.json();
				setUsers(data.data);
			} catch (error) {
				setIsError(true);
				console.log(error);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);

	if (isLoading) {
		return <h4>Fetching data...</h4>;
	} else if (isError) {
		return <h4>Error fetching data</h4>;
	}
	return (
		<div className='hooks-learn'>
			{users.map((user) => {
				let { id, name } = user;
				return (
					<div key={id} className='user-card'>
						<h4>{name}</h4>
					</div>
				);
			})}
		</div>
	);
};

export default HooksLearn;
