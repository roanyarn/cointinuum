export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
export const LETTERS_REGEX = /^[a-zA-Z\s]*$/;
export const NUMBERS_REGEX = /^[0-9]*$/;
export const ALL_REGEX = /[^/s]*$/;

export const REGEX_ENUM = {
	email: EMAIL_REGEX,
	password: PASSWORD_REGEX,
	letters: LETTERS_REGEX,
	numbers: NUMBERS_REGEX,
	all: ALL_REGEX,
};
