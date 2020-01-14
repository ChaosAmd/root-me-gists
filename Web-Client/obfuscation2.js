/** using ES6 **/
// The constant of the string
const stringToConvert = '%6e%6f%70%71%20%2f';

// The arrowed function to decode
const decode = (encodeStr) => {
  return encodeStr.split('\%')
                  .filter(el => el !== '')
                  .map(el => String.fromCharCode(parseInt(el, 16)))
                  .join('');
}

console.log(decode(stringToConvert));
// alert(decode(stringToConvert));

/**
2)using dom:
**/
decodeURI(stringToConvert);
