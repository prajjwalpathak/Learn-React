import Counter from './components/counter';
import FileUpload from './components/fileUpload';
import HooksLearn from './components/hooksLearn';
import Todo from './components/todo';
import Toggle from './components/toggle';
import UserAuth from './components/userAuth';
import './styles/App.css';

const App = () => {
	return (
		<div className='App'>
			{/* <FileUpload /> */}
			{/* <Counter /> */}
			{/* <Todo /> */}
			{/* <HooksLearn /> */}
			{/* <Toggle /> */}
			<UserAuth />
		</div>
	);
};

export default App;
