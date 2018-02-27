/**
 * IS SUBSTRING
 *
 * This function is used to determine if a string is a substring of a longer one.

 * As per requirements, we are not allowed to use high level API such as a 3rd
 * party library, a string API such as `String.substr()`, or `String.contains()`.
 * Although, the requirements document didn't specify how deep does the limitation
 * go, I am going to break down the string to a char array and use primitive values
 * to compare instead of using an object.
 *
 * @param fullString - The Full length string
 * @param substring - The partial string
 */
function isSubstring(fullString, substring) {
	if(fullString === substring) return true;

	const substringArray = Array.from(substring);
	const fullStringArray = Array.from(fullString);

	// Get the index of the first letter of the substring from the full string
	for(var outerIndex = 0; outerIndex < fullStringArray.length; outerIndex++) {
		if(substringArray[0] === fullStringArray[outerIndex]) {

			for(var innerIndex = 0; innerIndex < substringArray.length; innerIndex++) {
				if(substringArray[innerIndex] !== fullStringArray[outerIndex + innerIndex]) break;
				if(innerIndex === substringArray.length - 1) return true;
			}
		}
	}

	return false;
}

// TEST CASE 1 - String IS A substring of fullString
console.log(`Test Case 1 - isSubstring("This is a string", "is a"): ${isSubstring("This is a string", "is a")}`);

// TEST CASE 2 - String IS NOT A substring of fullString
console.log(`Test Case 2 - isSubstring("This is a string", "is not a"): ${isSubstring("This is a string", "is not a")}`);

// TEST CASE 3 - String IS A substring of fullstring (Testing case sensitivity)
console.log(`Test Case 3 - isSubstring("Hello World", "Hello"): ${isSubstring("Hello World", "Hello")}`);

// TEST CASE 4 - String IS NOT A substring of fullstring (Testing case sensitivity)
console.log(`Test Case 3 - isSubstring("Hello World", "hello"): ${isSubstring("Hello World", "hello")}`);

// TEST CASE 4 - String IS A substring of fullstring
console.log(`Test Case 3 - isSubstring("", ""): ${isSubstring("", "")}`);
