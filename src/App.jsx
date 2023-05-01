import AddUser from './components/AddUser';
import useFetch from './components/useFetch';
import Theme from './components/Theme';
import Counter from './components/counter';
import FileUpload from './components/fileUpload';
import HooksLearn from './components/hooksLearn';
import Todo from './components/todo';
import Toggle from './components/toggle';
import UserAuth from './components/userAuth';
import './styles/App.css';
import { useState, createContext } from 'react';

export const ThemeContext = createContext();

const App = () => {
	const [dark, setDark] = useState(false);
	const [todoData] = useFetch('https://jsonplaceholder.typicode.com/todos');

	return (
		<div className='App'>
			<ThemeContext.Provider value={{ dark, setDark }}>
				{/* <FileUpload /> */}
				{/* <Counter /> */}
				{/* <Todo /> */}
				{/* <HooksLearn /> */}
				{/* <Toggle /> */}
				{/* <UserAuth /> */}
				{/* <AddUser /> */}
				{/* <Theme /> */}
				{todoData &&
					todoData.map((item) => {
						return (
							<div key={item.id}>
								<p>{item.title}</p>
							</div>
						);
					})}
			</ThemeContext.Provider>
		</div>
	);
};

export default App;
