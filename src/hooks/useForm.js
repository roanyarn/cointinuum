import { useState } from 'react';

const useForm = (initialState) => {
	const [values, setValues] = useState(initialState);

	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value,
		});
	};

	return [values, handleInputChange, setValues];
};

export default useForm;
