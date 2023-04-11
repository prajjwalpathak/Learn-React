import { useState } from 'react';

const UserAuth = () => {
	const [user, setUser] = useState(null);

	const login = () => {
		setUser({ name: 'Topper' });
	};
	const logout = () => {
		setUser(null);
	};

	return <div>{user ? <UserIn user={user} logout={logout} /> : <UserOut login={login} />}</div>;
};

const UserIn = (props) => {
	const { user, logout } = props;
	return (
		<div>
			<h4>Hello there {user.name}</h4>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

const UserOut = (props) => {
	const { login } = props;
	return (
		<div>
			<h4>Please Login</h4>
			<button onClick={login}>Login</button>
		</div>
	);
};

export default UserAuth;
