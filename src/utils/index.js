/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-08-02 11:13:35         **/
/**  https://github.com/ale4ko69      **/
/***************************************/

// Possible values for gender
const GENDERS = ["male", "female"];

// Possible meanings for education
const EDUCATION_LEVELS = ["Higher", "Technical", "Average", "None"];

// Age range
const MIN_AGE = 22;
const MAX_AGE = 50;

export const userIcons = {
	male: "\u{1F468}",
	female: "\u{1F469}",
};

/**
 * Selects a random element from the provided array.
 * @param {Array} arr - An array from which you need to select an element.
 * @returns {*} Random element from the array.
 */
export function getRandomElement(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

/**
 * Generates a random integer within the specified range (inclusive).
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number} Random integer.
 */
export function getRandomInt(min, max) {
	// +1 so that the maximum value is also included in the range
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Adds random data (gender, education, age) to each object in the array.
 * @param {Array<Object>} data - The original array of objects (e.g., obtained from the server).
 * @returns {Array<Object>} A new array with added properties.
 */
export function appendRandomData(data) {
	return data.map(item => {
		// Creating a new object by copying all properties from the original item
		// and adding new random properties.
		return {
			...item, // The spread operator (...) copies all existing fields.
			gender: getRandomElement(GENDERS),
			education: getRandomElement(EDUCATION_LEVELS),
			age: getRandomInt(MIN_AGE, MAX_AGE),
		};
	});
}
