// Donna Quach, JavaScript 310B, Autumn 2023
// Class 3 Exercises 

// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// To use .test(), the regex parameter does not need to be wrapped in single quotes, just simply starts and ends with '/' because that that's how JavaScript recognizes the const as regex.
// (In other words, if you wrap it in single quotes, then you will keep getting "false" in the console even if the test phone number is typed out correctly.)
const myRegexPhoneNumber = /\(\d{3}\)[-\s]\d{3}[-\s]\d{4}/; 

const testPhoneNumberOne = '(206) 333-4444';
const testPhoneNumberTwo = '(206) 33-4444';

function testPhoneNumber(somePhoneNumber) {
    console.log(myRegexPhoneNumber.test(somePhoneNumber));
}

// check testPhoneNumber
console.log(testPhoneNumber(testPhoneNumberOne)); // should return true
console.log(testPhoneNumber(testPhoneNumberTwo)); // should return false, missing a digit


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}

// .+? = ignore characters in-between - Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
// (?<areaCode>\d{3}) = named capture group called areaCode where area code consists of 3 digits only
// (?<phoneNumberThreeDigits>\d{3}) = named capture group called phoneNumberThreeDigits that consists of 3 digits only
// (?<phoneNumberFourDigits>\d{4}) = named capture group called phoneNumberFourDigits that consists of 4 digits only
const myRegexPhoneNumberTwo = /(?<areaCode>\d{3}).+?(?<phoneNumberThreeDigits>\d{3}).+?(?<phoneNumberFourDigits>\d{4})/; 


const testPhoneNumberThree = '206-333-4444';
const testPhoneNumberFour = '(222) 422-5353';


function parsePhoneNumber(somePhoneNumberEntered) {
    let extractAreaCodePhoneNumber = myRegexPhoneNumberTwo.exec(somePhoneNumberEntered);
    console.log(`{areaCode}: '${extractAreaCodePhoneNumber[1]}', {phoneNumber}: '${extractAreaCodePhoneNumber[2]}${extractAreaCodePhoneNumber[3]}'`);
}



// Check parsePhoneNumber
parsePhoneNumber(testPhoneNumberThree);
// returns {areaCode: '206', phoneNumber: '3334444'}

parsePhoneNumber(testPhoneNumberFour);
// returns {areaCode: '222', phoneNumber: '4225353'}