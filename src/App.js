import { DarkModeProvider } from './Context/DarkModeContext';
import AppRouter from './routes/AppRouter';

const App = () => {
	return (
		<div className="App">
			<DarkModeProvider>
				<AppRouter />
			</DarkModeProvider>
		</div>
	);
};

export default App;
