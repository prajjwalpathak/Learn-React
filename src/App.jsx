import AddUser from './components/AddUser';
import useFetch from './components/useFetch';
import Theme from './components/Theme';
import Counter from './components/Counter';
import FileUpload from './components/FileUpload';
import HooksLearn from './components/HooksLearn';
import Todo from './components/Todo';
import Toggle from './components/Toggle';
import UserAuth from './components/UserAuth';
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
				{/* {todoData &&
					todoData.map((item) => {
						return (
							<div key={item.id}>
								<p>{item.title}</p>
							</div>
						);
					})} */}
			</ThemeContext.Provider>
		</div>
	);
};

export default App;
