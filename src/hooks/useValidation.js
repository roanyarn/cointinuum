import { useState } from 'react';

import { REGEX_ENUM } from '../constants/regex';

const ERROR_ENUM = {
	SHORT: (fieldName, minSize) =>
		`The ${fieldName} must be at least ${minSize} characters`,
	LONG: (fieldName, maxSize) =>
		`The ${fieldName} must be less than ${maxSize} characters`,
	REQUIRED: (fieldName) => `The ${fieldName} is required`,
	INVALID: (fieldName, type) => `The ${fieldName} must be of type ${type}`,
};

const useValidation = ({
	input = '',
	fieldName = 'Field',
	minSize = 0,
	maxSize = 9999,
	type = 'all',
	required = false,
}) => {
	const [store, setStore] = useState(input);
	const [error, setError] = useState('');

	function handleError() {
		if (required && store.length === 0) {
			setError(ERROR_ENUM.REQUIRED(fieldName));
			return;
		}

		if (store.length < minSize) {
			setError(ERROR_ENUM.SHORT(fieldName, minSize));
			return;
		}

		if (store.length > maxSize) {
			setError(ERROR_ENUM.LONG(fieldName, maxSize));
			return;
		}

		const re = REGEX_ENUM[type];

		const isValid = re ? re.test(String(store)) : '';

		if (!isValid) {
			setError(ERROR_ENUM.INVALID(fieldName, type));
			console.log(isValid);
			return;
		}

		setError('');
	}

	return [store, setStore, error, handleError];
};

export default useValidation;
