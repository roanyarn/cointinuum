import { createContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const [roadmap, setRoadmap] = useState(false);
	const [diversity, setDiversity] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const toggleRoadmap = () => {
		setRoadmap(!roadmap);
	};

	const toggleDiversity = () => {
		setDiversity(!diversity);
	};
	return (
		<DarkModeContext.Provider
			value={{
				darkMode,
				toggleDarkMode,
				toggleRoadmap,
				roadmap,
				toggleDiversity,
				diversity,
			}}
		>
			{children}
		</DarkModeContext.Provider>
	);
};

export { DarkModeContext, DarkModeProvider };
