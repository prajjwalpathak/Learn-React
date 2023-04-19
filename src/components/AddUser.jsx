import { useState } from 'react';

const AddUser = () => {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email);
		setUsers([...users, { id: Date.now(), name: name, email: email }]);
		setName('');
		setEmail('');
	};

	const handleClick = (id) => {
		const newUsers = users.filter((user) => {
			return user.id !== id;
		});
		setUsers(newUsers);
	};

	return (
		<div className='add-user'>
			<form className='form' onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					name='name'
					value={name}
					type='text'
					onChange={(e) => {
						setName(e.target.value);
					}}
				></input>
				<label htmlFor='email'>Email</label>
				<input
					name='email'
					value={email}
					type='email'
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				></input>
				<button type='submit'>Add User</button>
			</form>
			<div>
				{users.map((user) => {
					const { id, name, email } = user;
					return (
						<div key={id}>
							<h4>{name}</h4>
							<h5>{email}</h5>
							<h6>{id}</h6>
							<button
								onClick={() => {
									handleClick(id);
								}}
							>
								Remove
							</button>
							<br></br>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AddUser;
